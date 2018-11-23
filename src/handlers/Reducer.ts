import config from '../config';
import Handler, { KeyValue } from './Handler';
import * as streamService from '../services/stream-service';
import { Anagrams, shouldOutputAnagrams } from '../services/anagram-service';

class Reducer extends Handler {
  private currentKey: string = null;
  private currentValues: Anagrams = {};

  /**
   * This function will get streamed a list of key value pairs
   * in an alphabetically sorted order.
   *
   * This function stores all words that have the same
   * normalized key.
   *
   * @param line A key/value, e.g. boty\tToby\n
   */
  public handleLine(line: string) {
    const [normalizedWord, originalWord] = line.trim().split('\t');

    let lowerWord = originalWord.toLowerCase();

    // See the relevant config values
    if (config.reducer.shouldDiscardApostropheIfTwoSeen) lowerWord = lowerWord.replace(/'/g, '');
    if (config.reducer.shouldDiscardHyphenIfTwoSeen)     lowerWord = lowerWord.replace(/-/g, '');

    // It's the first key, or there's been a key change
    if (this.currentKey !== normalizedWord) {

      // If the first key has been set, output the key and the anagrams
      if (this.currentKey !== null) {
        this.output(this.currentKey, this.currentValues);
      }

      this.currentKey = normalizedWord;
      this.currentValues = {};
    }

    if (config.reducer.shouldDiscardCaseIfTwoSeen) {
      if (this.currentValues[lowerWord] && this.currentValues[lowerWord] !== originalWord) {
        this.currentValues[lowerWord] = lowerWord;
      } else {
        this.currentValues[lowerWord] = originalWord;
      }
    } else {
      this.currentValues[lowerWord] = lowerWord;
    }
  }

  /**
   * This function outputs anagrams in the desired format.
   *
   * @param currentKey The alphabetically sorted, normalized key
   * @param currentValues Anagrams which have the same currentKey
   */
  private output(currentKey: string, currentValues: Anagrams) {

    // e.g. Don't output if there's only one anagram in the set
    if (!shouldOutputAnagrams(currentValues)) {
      return;
    }

    const anagrams: string[] = Object.keys(currentValues).map(key => currentValues[key]);
    const anagramsJoined: string = anagrams.join(' ');
    const outputKeyValue: KeyValue = super.getKeyValue(currentKey, anagramsJoined);
    const formattedKeyValue: string = config.reducer.shouldFormatTestOutput
                                    ? `{ ${outputKeyValue.value.split(' ').join(', ')} }\n`
                                    : super.formatKeyValue(outputKeyValue);

    streamService.write(formattedKeyValue);
  }

  /**
   * Don't forget to output the last line!
   */
  public close() {
    this.output(this.currentKey, this.currentValues);
    this.currentKey = null;
    this.currentValues = {};
  }
}

export default Reducer;
