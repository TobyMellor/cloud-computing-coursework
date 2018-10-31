import Handler from '../handlers/Handler';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

export function handleInput(handler: Handler) {
  rl.on('line', line => handler.handleLine(line));
  rl.on('close', () => handler.close());
}

export function write(string: string) {
  process.stdout.write(string);
}
