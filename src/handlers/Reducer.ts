import config from '../config';
import Handler, { KeyValue } from './Handler';
import * as streamService from '../services/stream-service';
import * as anagramService from '../services/anagram-service';
import { Anagrams } from '../services/anagram-service';

class Reducer extends Handler {
  private currentKey: string = null;
  private currentValues: Anagrams = {};

  public handleLine(line: string) {
    const [normalizedWord, word] = line.trim().split('\t');
    const lowerWord = word.toLowerCase();

    // It's the first key, or there's been a key change
    if (this.currentKey !== normalizedWord) {

      // If the first key has been set, output the key and the anagrams
      if (this.currentKey !== null) {
        this.output(this.currentKey, this.currentValues);
      }

      this.currentKey = normalizedWord;
      this.currentValues = {};
    }

    if (config.reducer.shouldDiscardCaseOnContradiction) {
      if (this.currentValues[lowerWord] && this.currentValues[lowerWord] !== word) {
        this.currentValues[lowerWord] = lowerWord;
      } else {
        this.currentValues[lowerWord] = word;
      }
    } else {
      this.currentValues[lowerWord] = lowerWord;
    }
  }

  private output(currentKey: string, currentValues: Anagrams) {
    if (!anagramService.shouldOutputAnagrams(currentValues)) {
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

  public close() {
    this.output(this.currentKey, this.currentValues);
  }
}

export default Reducer;
