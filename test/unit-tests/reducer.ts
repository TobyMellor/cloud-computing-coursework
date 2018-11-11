import { expect } from 'chai';
import 'mocha';
import * as testUtils from '../test-utils';
import Reducer from '../../src/handlers/Reducer';
import config from '../../src/config';

describe('Reducer', () => {
  const reducer = new Reducer();
  let hook;

  beforeEach(() => {
    config.reducer.minimumAnagramSetSize = 2;
    config.reducer.shouldDiscardCaseIfTwoSeen = true;
    config.reducer.shouldDiscardApostropheIfTwoSeen = true;
    config.reducer.shouldDiscardHyphenIfTwoSeen = true;
    config.reducer.shouldFormatTestOutput = false;
    hook = testUtils.captureStream(process.stdout);
  });

  afterEach(() => hook.unhook());

  function assertReducerOutput(expected: string, mapperOutput: string) {
    reducer.handleLine(mapperOutput);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(expected);
  }

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
    assertReducerOutput('', testUtils.getKeyValue('acer', 'care'));

    config.reducer.minimumAnagramSetSize = 1;
    assertReducerOutput(testUtils.getKeyValue('acer', 'care'), testUtils.getKeyValue('acer', 'care'));
  });

  it('attempts to keep case through shouldDiscardCaseIfTwoSeen', () => {
    config.reducer.minimumAnagramSetSize = 1;

    const mapperOutputLine1 = testUtils.getKeyValue('boty', 'Toby');
    const mapperOutputLine2 = testUtils.getKeyValue('ellmor', 'Mellor');
    const mapperOutputLine3 = testUtils.getKeyValue('ellmor', 'mellor');

    reducer.handleLine(mapperOutputLine1);
    reducer.handleLine(mapperOutputLine2);
    reducer.handleLine(mapperOutputLine3);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('boty', 'Toby') +
             testUtils.getKeyValue('ellmor', 'mellor'));

    config.reducer.shouldDiscardCaseIfTwoSeen = false;

    const mapperOutputLine4 = testUtils.getKeyValue('eginstt', 'Testing');

    reducer.handleLine(mapperOutputLine4);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('eginstt', 'testing'));
  });

  it('attempts to keep apostrophe through shouldDiscardApostropheIfTwoSeen', () => {
    config.reducer.minimumAnagramSetSize = 1;

    const mapperOutputLine1 = testUtils.getKeyValue('adeegnrrs', 'gardeners\'');
    const mapperOutputLine2 = testUtils.getKeyValue('adeegnrrs', 'gardener\'s');

    reducer.handleLine(mapperOutputLine1);
    reducer.handleLine(mapperOutputLine2);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('adeegnrrs', 'gardeners'));

    config.reducer.shouldDiscardApostropheIfTwoSeen = false;

    const mapperOutputLine3 = testUtils.getKeyValue('adeegnrrs', 'gardeners\'');
    const mapperOutputLine4 = testUtils.getKeyValue('adeegnrrs', 'gardener\'s');

    reducer.handleLine(mapperOutputLine3);
    reducer.handleLine(mapperOutputLine4);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('adeegnrrs', 'gardeners\' gardener\'s'));
  });

  it('attempts to keep hyphen through shouldDiscardApostropheIfTwoSeen', () => {
    config.reducer.minimumAnagramSetSize = 1;

    const mapperOutputLine1 = testUtils.getKeyValue('bdeeelllovw', 'well-beloved');
    const mapperOutputLine2 = testUtils.getKeyValue('bdeeelllovw', 'wellbeloved');

    reducer.handleLine(mapperOutputLine1);
    reducer.handleLine(mapperOutputLine2);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('bdeeelllovw', 'wellbeloved'));

    config.reducer.shouldDiscardHyphenIfTwoSeen = false;

    const mapperOutputLine3 = testUtils.getKeyValue('bdeeelllovw', 'well-beloved');
    const mapperOutputLine4 = testUtils.getKeyValue('bdeeelllovw', 'wellbeloved');

    reducer.handleLine(mapperOutputLine3);
    reducer.handleLine(mapperOutputLine4);
    reducer.close();

    expect(hook.captured())
      .to
      .equal(testUtils.getKeyValue('bdeeelllovw', 'well-beloved wellbeloved'));
  });
});
