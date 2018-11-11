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
stdin.on('data', data => {
  mapper.handleLine(data);
});
stdin.on('end', () => {
  mapper.close();
});
