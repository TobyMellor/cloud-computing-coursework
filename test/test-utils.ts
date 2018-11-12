// Taken from https://stackoverflow.com/a/18543419/2957677
export function captureStream(stream) {
  const oldWrite = stream.write;
  let buf = '';

  stream.write = function (chunk) {
    buf += chunk.toString();
    oldWrite.apply(stream, arguments);
  };

  return {
    unhook() {
      stream.write = oldWrite;
    },
    captured() {
      const output = buf;
      buf = '';
      return output;
    },
  };
}

export function getKeyValue(key: string, value: string) {
  return `${key}\t${value}\n`;
}

export function deindent(strings: string[]): string[] {
  const stringsDeindented = strings.map((string) => {
    const stringDeindented = string.replace(/[\n]\ +/g, '\n')
                             .replace(/^[\n]/, '');

    return stringDeindented.endsWith('\n') ? stringDeindented : `${stringDeindented}\n`;
  });

  return stringsDeindented;
}
