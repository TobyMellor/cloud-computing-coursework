import config from '../config';
import Handler, { KeyValue } from './Handler';
import * as streamService from '../services/stream-service';
import * as anagramService from '../services/anagram-service';
import { AnagramSet } from '../services/anagram-service';

class Reducer extends Handler {
  private currentKey: string = null;
  private currentValues: AnagramSet = new Set<string>();

  public handleLine(line: string) {
    const [normalizedWord, word] = line.trim().split('\t');

    // It's the first key, or there's been a key change
    if (this.currentKey !== normalizedWord) {

      // If the first key has been set, output the key and the anagrams
      if (this.currentKey !== null) {
        this.output(this.currentKey, this.currentValues);
      }

      this.currentKey = normalizedWord;
      this.currentValues.clear();
    }

    this.currentValues.add(word);
  }

  private output(currentKey: string, currentValues: AnagramSet) {
    if (!anagramService.shouldOutputAnagrams(currentValues)) {
      return;
    }

    const anagrams: string[] = [...currentValues];
    const anagramsJoined: string = anagrams.join(' ');
    const outputKeyValue: KeyValue = super.getKeyValue(currentKey, anagramsJoined);
    const formattedKeyValue: string = config.shouldFormatTestOutput
                                    ? `{ ${outputKeyValue.value.split(' ').join(', ')} }\n`
                                    : super.formatKeyValue(outputKeyValue);

    streamService.write(formattedKeyValue);
  }

  public close() {
    this.output(this.currentKey, this.currentValues);
  }
}

export default Reducer;
