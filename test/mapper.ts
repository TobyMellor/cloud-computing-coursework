import { expect } from 'chai';
import 'mocha';
import * as testUtils from './test-utils';
import Mapper from '../src/handlers/Mapper';

describe('Mapper', () => {
  const mapper = new Mapper();
  let hook;

  beforeEach(() => {
    hook = testUtils.captureStream(process.stdout);
  });

  afterEach(() => hook.unhook());

  it('creates a map of a sentence to the expected key pair list', () => {
    mapper.handleLine('care');

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('acer', 'care'));
  });

  it('preserves the case of values', () => {
    mapper.handleLine('CaRe');

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('acer', 'CaRe'));
  });

  it('should remove single hyphens in the key, but keep the original in the value', () => {
    mapper.handleLine('e-mail');

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('aeilm', 'e-mail'));
  });

  it('treats all other separators as spaces', () => {
    mapper.handleLine('abc_def');

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('abc', 'abc') + testUtils.getKeyValue('def', 'def'));
  });

  it('ensures accents characters are distinct from non-accented characters', () => {
    mapper.handleLine('ábç abc');

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('báç', 'ábç') + testUtils.getKeyValue('abc', 'abc'));
  });
  
  it('should keep apostrophies', () => {
    mapper.handleLine(`gardeners gardener's gardeners' lady's`);

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('adeegnrrs', 'gardeners') +
             testUtils.getKeyValue('adeegnrrs', 'gardener\'s') +
             testUtils.getKeyValue('adeegnrrs', 'gardeners\'') +
             testUtils.getKeyValue('adlsy', 'lady\'s'));
  });
});
