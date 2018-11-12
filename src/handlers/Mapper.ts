import Handler, { KeyValue } from './Handler';
import * as streamService from '../services/stream-service';
import * as anagramService from '../services/anagram-service';

class Mapper extends Handler {
  public handleLine(line: string) {
    const words: string[] = anagramService.splitWords(line);
    const keyValues: KeyValue[] = words.map(this.getKeyValue);
    const formattedKeyValues: string = super.formatKeyValues(keyValues);

    streamService.write(formattedKeyValues);
  }

  protected getKeyValue(word: string): KeyValue {
    const normalizedWord = anagramService.getNormalizedWord(word);

    return super.getKeyValue(normalizedWord, word);
  }

  public close() {
    //
  }
}

export default Mapper;
