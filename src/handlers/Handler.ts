export type KeyValue = {
  key: string,
  value: string,
};

abstract class Handler {
  public abstract handleLine(line: string): void;

  protected getKeyValue(key: string, value: string): KeyValue {
    return {
      key,
      value,
    };
  }

  protected formatKeyValues(keyValues: KeyValue[]) {
    const formattedKeyValues: string[] = keyValues.map(this.formatKeyValue);
    const joinedKeyValues: string = formattedKeyValues.join('');

    return joinedKeyValues;
  }

  protected formatKeyValue({ key, value }: KeyValue) {
    return `${key}\t${value}\n`;
  }

  public abstract close(): void;
}

export default Handler;
