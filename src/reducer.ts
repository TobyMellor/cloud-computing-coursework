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

stdin.setEncoding('utf8');
stdin.on('data', data => {
  reducer.handleLine(data);
});
stdin.on('end', () => {
  reducer.close();
});
