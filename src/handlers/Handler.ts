export type KeyValue = {
  key: string,
  value: string,
};

/**
 * Handler
 *
 * Util functions for child handlers (Mapper and Reducer),
 * as well as functions which must be present in any child.
 */
abstract class Handler {
  public abstract handleLine(line: string): void;

  /**
   * Create a key, value pair.
   *
   * @param key Some key (first argument of stdout)
   * @param value Some value (second argument of stdout)
   */
  protected getKeyValue(key: string, value: string): KeyValue {
    return {
      key,
      value,
    };
  }

  /**
   * Converts KeyValues into a format understood by the
   * reducer.
   *
   * @param keyValues KeyValues to format
   */
  protected formatKeyValues(keyValues: KeyValue[]) {
    const formattedKeyValues: string[] = keyValues.map(this.formatKeyValue);
    const joinedKeyValues: string = formattedKeyValues.join('');

    return joinedKeyValues;
  }

  /**
   * Converts a key, e.g. "K", and a value, e.g. "V"
   * into a standard format, e.g. "K/tV\n"
   *
   * @param keyValue
   */
  protected formatKeyValue({ key, value }: KeyValue) {
    return `${key}\t${value}\n`;
  }

  public abstract close(): void;
}

export default Handler;
