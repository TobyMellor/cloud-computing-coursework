#!/usr/bin/env node

import Mapper from './handlers/Mapper';

// @ts-ignore
process.openStdin = function() {
  process.stdin.resume();
  return process.stdin;
};

// @ts-ignore
const stdin = process.openStdin();
const mapper = new Mapper();
let input = '';

stdin.setEncoding('utf8');
stdin.on('data', function(data) {
  if (data) {
    input += data;

    while (input.match(/\r?\n/)) {
      const lineIndexOf = input.search(/\r?\n/);
      const [left, right] = [input.slice(0, lineIndexOf), input.slice(lineIndexOf + 1, input.length)];
      input = right;
      mapper.handleLine(left);
    }
  }
});
stdin.on('end', function() {
  if (input) {
    mapper.handleLine(input);
  }
});
