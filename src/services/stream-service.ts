import Handler from '../handlers/Handler';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

/**
 * Streams input line-by-line to the handler,
 * and runs a closing function when the stream
 * has finished.
 *
 * @param handler We'll send each line of stdin to handler.handleLine()
 */
export function handleInput(handler: Handler) {
  rl.on('line', line => handler.handleLine(line));
  rl.on('close', () => handler.close());
}

/**
 * Write to stdout
 *
 * @param string String to output
 */
export function write(string: string) {
  process.stdout.write(string);
}
