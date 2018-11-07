import { expect } from 'chai';
import 'mocha';
import * as testUtils from './test-utils';
import Reducer from '../src/handlers/Reducer';
import config from '../src/config';

describe('Reducer', () => {
  const reducer = new Reducer();
  let hook;

  beforeEach(() => {
    config.minimumAnagramSetSize = 2;
    hook = testUtils.captureStream(process.stdout);
  });

  afterEach(() => hook.unhook());

  it('combines anagrams from the mappers output', () => {
    const mapperOutputLine1 = testUtils.getKeyValue('acer', 'care');
    const mapperOutputLine2 = testUtils.getKeyValue('acer', 'race');
    const mapperOutputLine3 = testUtils.getKeyValue('eginstt', 'testing');

    reducer.handleLine(mapperOutputLine1);
    reducer.handleLine(mapperOutputLine2);
    reducer.handleLine(mapperOutputLine3);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('acer', 'care race'));
  });

  it('adjusts the minimum set size through minimumAnagramSetSize', () => {
    function assertReducerOutput(expected: string) {
      const mapperOutput = testUtils.getKeyValue('acer', 'care');

      reducer.handleLine(mapperOutput);
      reducer.close();
  
      expect(hook.captured())
        .to
        .equal(expected);
    }

    config.minimumAnagramSetSize = 2;
    assertReducerOutput('');

    config.minimumAnagramSetSize = 1;
    assertReducerOutput(testUtils.getKeyValue('acer', 'care'));
  });
});
