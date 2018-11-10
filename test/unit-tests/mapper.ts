import { expect } from 'chai';
import 'mocha';
import { captureStream, getKeyValue } from './../test-utils';
import Mapper from '../../src/handlers/Mapper';
import mocks from '../mocks';

const path = require('path');
const { spawn } = require('child_process');

describe('Mapper', () => {
  describe('Mapper.js', () => {
    const mapper = new Mapper();
    let hook;

    beforeEach(() => {
      hook = captureStream(process.stdout);
    });

    afterEach(() => hook.unhook());

    it('creates a map of a sentence to the expected key pair list', () => {
      mapper.handleLine('care');

      expect(hook.captured())
        .to
        .equal(getKeyValue('acer', 'care'));
    });

    it.skip('preserves the case of values', () => {
      mapper.handleLine('CaRe');

      expect(hook.captured())
        .to
        .equal(getKeyValue('acer', 'CaRe'));
    });

    it('should remove single hyphens in the key, but keep the original in the value', () => {
      mapper.handleLine('e-mail');

      expect(hook.captured())
        .to
        .equal(getKeyValue('aeilm', 'e-mail'));
    });

    // TO FIX: Change replace _ to regex or replaceAll
    it('treats all other separators as spaces', () => {
      mapper.handleLine('abc_def_ghi');
      mapper.handleLine('abc--def');

      expect(hook.captured())
        .to
        .equal(getKeyValue('abc', 'abc') +
               getKeyValue('def', 'def') +
               getKeyValue('ghi', 'ghi') +
               getKeyValue('abc', 'abc') +
               getKeyValue('def', 'def'));
    });

    it('ensures accents characters are distinct from non-accented characters', () => {
      mapper.handleLine('ábç abc');

      expect(hook.captured())
        .to
        .equal(getKeyValue('báç', 'ábç') + getKeyValue('abc', 'abc'));
    });
    
    it('should keep apostrophies', () => {
      mapper.handleLine(`gardeners gardener's gardeners' lady's`);

      expect(hook.captured())
        .to
        .equal(getKeyValue('adeegnrrs', 'gardeners') +
               getKeyValue('adeegnrrs', 'gardener\'s') +
               getKeyValue('adeegnrrs', 'gardeners\'') +
               getKeyValue('adlsy', 'lady\'s'));
    });
    
    it('should discard "words" that contain numbers', () => {
      mapper.handleLine('432425 whatever1');

      expect(hook.captured())
        .to
        .equal('');
    });
    
    it('should discard "words" that contain other characters', () => {
      mapper.handleLine('testing me@tobymellor.com tobymellor.com tes*ting test!');

      expect(hook.captured())
        .to
        .equal(getKeyValue('eginstt', 'testing') +
               getKeyValue('estt', 'test'));
    });
    
    it('should output values in lowercase', () => {
      mapper.handleLine('TESTING');

      expect(hook.captured())
        .to
        .equal(getKeyValue('eginstt', 'testing'));
    });

    it('should drop apostrophies that are prepending words', () => {
      mapper.handleLine(`'tis a good morning's tobys'`);

      expect(hook.captured())
        .to
        .equal(getKeyValue('ist', 'tis') +
               getKeyValue('dgoo', 'good') +
               getKeyValue('gimnnors', 'morning\'s') +
               getKeyValue('bosty', 'tobys\''));
    });
  });

  describe('Real world', () => {
    let child;

    beforeEach(done => {
      const parameters = [path.resolve('./dist/mapper.js')];
      child = spawn('node', parameters, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
      });
  
      child.stdin.setEncoding('utf-8');
      child.stdout.pipe(process.stdout);
      done();
    });
  
    afterEach(() => {
      child.stdin.end();
      child.kill();
    });

    function handleIO(
      msg: Buffer,
      mapperExpectedInputLines: string[],
      mapperExpectedOutputLines: string[],
      stdin,
      done,
    ) {
      const mapperExpectedOutputLine = mapperExpectedOutputLines.shift();
      const nextMapperInputLine = mapperExpectedInputLines.shift();

      expect(msg.toString()).to.equal(mapperExpectedOutputLine);

      if (!nextMapperInputLine) {
        return done();
      }

      stdin.write(nextMapperInputLine);
    }
  
    it('should handle simple mocks as expected', done => {
      const mapperExpectedInputLines: string[] = mocks.simple.mapper.testInputLines;
      const mapperExpectedOutputLines: string[] = mocks.simple.mapper.expectedOutputLines;
  
      child.stdout.on('data', (msg: Buffer) => {
        return handleIO(msg, mapperExpectedInputLines, mapperExpectedOutputLines, child.stdin, done);
      });
  
      child.stdin.write(mapperExpectedInputLines.shift());
    });
  
    it('should handle advanced mocks as expected', done => {
      const mapperExpectedInputLines: string[] = mocks.advanced.mapper.testInputLines;
      const mapperExpectedOutputLines: string[] = mocks.advanced.mapper.expectedOutputLines;
  
      child.stdout.on('data', (msg: Buffer) => {
        return handleIO(msg, mapperExpectedInputLines, mapperExpectedOutputLines, child.stdin, done);
      });
  
      child.stdin.write(mapperExpectedInputLines.shift());
    });
  });
});
