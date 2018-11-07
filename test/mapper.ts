import { expect } from 'chai';
import 'mocha';
import { captureStream, getKeyValue, deindent } from './test-utils';
import Mapper from '../src/handlers/Mapper';

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

    it('preserves the case of values', () => {
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

    it('treats all other separators as spaces', () => {
      mapper.handleLine('abc_def');

      expect(hook.captured())
        .to
        .equal(getKeyValue('abc', 'abc') + getKeyValue('def', 'def'));
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
  });

  describe('Real world', () => {
    let child;

    beforeEach(done => {
      const parameters = [path.resolve('./dist/mapper.js')];
      child = spawn('node', parameters, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
      });
  
      child.stdout.on('data', () => {
        child.stdout.removeAllListeners('data');
        done();
      });
      child.stdin.setEncoding('utf-8');
      child.stdout.pipe(process.stdout);
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
      const mapperExpectedInputLines: string[] = deindent([
        `the quick brown fox jumps over the lazy dog race care`,
        `seventeen sixteen fifteen thirteen twelve eleven ten nine`,
        `eight seven six five four three two one zero`,
      ]);
      const mapperExpectedOutputLines: string[] = deindent([
        `
          eht\tthe
          cikqu\tquick
          bnorw\tbrown
          fox\tfox
          jmpsu\tjumps
          eorv\tover
          eht\tthe
          alyz\tlazy
          dgo\tdog
          acer\trace
          acer\tcare
        `,
        `
          eeeennstv\tseventeen
          eeinstx\tsixteen
          eeffint\tfifteen
          eehinrtt\tthirteen
          eeltvw\ttwelve
          eeelnv\televen
          ent\tten
          einn\tnine
        `,
        `
          eghit\teight
          eensv\tseven
          isx\tsix
          efiv\tfive
          foru\tfour
          eehrt\tthree
          otw\ttwo
          eno\tone
          eorz\tzero
        `,
      ]);
  
      child.stdout.on('data', (msg: Buffer) => {
        return handleIO(msg, mapperExpectedInputLines, mapperExpectedOutputLines, child.stdin, done);
      });
  
      child.stdin.write(mapperExpectedInputLines.shift());
    });
  
    it('should handle advanced mocks as expected', done => {
      const mapperExpectedInputLines: string[] = deindent([
        `rAcE caRe`,
        `care something another word`,
        `testing nice one okay! there!`,
        `e-mail one two three email`,
        `eamIl four five six`,
        `dog--god`,
        `ogd dgo test`,
      ]);
      const mapperExpectedOutputLines: string[] = deindent([
        `
          acer\trAcE
          acer\tcaRe
        `,
        `
          acer\tcare
          eghimnost\tsomething
          aehnort\tanother
          dorw\tword
        `,
        // TODO: Should NOT be returning punctuation ! at the end of a word
        `
          eginstt\ttesting
          cein\tnice
          eno\tone
          akoy\tokay!
          eehrt\tthere!
        `,
        `
          aeilm\te-mail
          eno\tone
          otw\ttwo
          eehrt\tthree
          aeilm\temail
        `,
        `
          aeilm\teamIl
          foru\tfour
          efiv\tfive
          isx\tsix
        `,
        // TODO: Should NOT be treating x--y as the same word...
        `
          ddggoo\tdog--god
        `,
        `
          dgo\togd
          dgo\tdgo
          estt\ttest
        `,
      ]);
  
      child.stdout.on('data', (msg: Buffer) => {
        return handleIO(msg, mapperExpectedInputLines, mapperExpectedOutputLines, child.stdin, done);
      });
  
      child.stdin.write(mapperExpectedInputLines.shift());
    });
  });
});
