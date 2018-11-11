#!/usr/bin/env node

import Reducer from './handlers/Reducer';

// @ts-ignore
process.openStdin = function() {
  process.stdin.resume();
  return process.stdin;
};

// @ts-ignore
const stdin = process.openStdin();
const reducer = new Reducer();
let input = '';

stdin.setEncoding('utf8');
stdin.on('data', function(data) {
  if (data) {
    input += data;

    while (input.match(/\r?\n/)) {
      const lineIndexOf = input.search(/\r?\n/);
      const [left, right] = [input.slice(0, lineIndexOf), input.slice(lineIndexOf + 1, input.length)];
      input = right;
      reducer.handleLine(left);
    }
  }
});
stdin.on('end', function() {
  if (input) {
    reducer.handleLine(input);
    reducer.close();
  }
});
