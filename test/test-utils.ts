// Taken from https://stackoverflow.com/a/18543419/2957677
export function captureStream(stream) {
  const oldWrite = stream.write;
  let buf = '';

  stream.write = function(chunk) {
    buf += chunk.toString();
    oldWrite.apply(stream, arguments);
  }

  return {
    unhook: function unhook() {
      stream.write = oldWrite;
    },
    captured: function() {
      return buf;
    }
  };
}

export function getKeyValue(key: string, value: string) {
  return `${key}\t${value}\n`;
}