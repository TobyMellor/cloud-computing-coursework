import config from '../config';

export type AnagramSet = Set<string>;

export function getNormalizedWord(word: string) {
  const characters: string[] = word.split('');
  const normalizedCharacters: string[] = characters.sort();
  const normalizedWord: string = normalizedCharacters.join('');

  return normalizedWord;
}

export function shouldOutputAnagrams(anagrams: AnagramSet) {
  const anagramCount = anagrams.size;

  return anagramCount >= config.minimumAnagramSetSize;
}
