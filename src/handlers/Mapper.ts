import Handler, { KeyValue } from './Handler';
import * as streamService from '../services/stream-service';
import * as anagramService from '../services/anagram-service';

/**
 * Mapper
 *
 * A handler that converts text into a format
 * that the reducer can understand
 */
class Mapper extends Handler {
  /**
   * This function takes a line and:
   *     - Splits into words, e.g. "Toby"
   *     - Creates key/value pairs, with the key
   *       being a alphabetically sorted version of the key
   *       e.g. Key: "boty", Value: "Toby"
   *     - Formats the key values
   *       e.g. boty\tToby\n
   *     - Writes the result to stdout
   *
   * @param line A line of text
   */
  public handleLine(line: string) {
    const words: string[] = anagramService.splitWords(line);
    const keyValues: KeyValue[] = words.map(this.getKeyValue);
    const formattedKeyValues: string = super.formatKeyValues(keyValues);

    streamService.write(formattedKeyValues);
  }

  /**
   * Creates key/value pairs, with the key
   * being a alphabetically sorted version of the key
   *
   * @param word
   */
  protected getKeyValue(word: string): KeyValue {
    const normalizedWord = anagramService.getNormalizedWord(word);

    return super.getKeyValue(normalizedWord, word);
  }

  public close() {
    //
  }
}

export default Mapper;
