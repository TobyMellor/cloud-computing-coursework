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

stdin.setEncoding('utf8');
stdin.pipe(require('split')()).on('data', function(line) {
  if (line) {
    mapper.handleLine(line);
  }
})
stdin.on('end', () => {
  mapper.close();
});
