import config from '../config';

export type Anagrams = {
  [prop: string]: string; // [lowercase word]: Original or lowercase
};

const SEPARATORS = /--+|_+| +|\||\(|\)/;
const ILLEGAL_WORD = /([^ ]+[.,\/#!$%\^&\*;:{}=\`~()"“”‘’][^ ]+|\d)/;
const PUNCTUATION = /([.,\/#!$%\^&\*;:{}=\`~()"“”‘’?]|^')/g;

export function splitWords(line: string) {
  const tokens = line.split(SEPARATORS);

  const words = tokens
    .filter(w => !ILLEGAL_WORD.test(w))                           // Discard words containing punc
    .map(w => w.replace(PUNCTUATION, ''))                         // Remove surrounding punctuation
    .filter(w => w.length >= config.mapper.minimumAnagramLength); // Discard words below min length

  return words;
}

export function getNormalizedWord(word: string) {

  // Convert to lower case, remove special characters
  // e.g. E-mail becomes email
  const cleanedWord = word.toLowerCase()
                          .replace(/[-–—']/g, '');

  // Normalize the word, so it's characters are sorted alphabetically
  // e.g. email becomes aeilm
  const normalizedWord = cleanedWord.split('')
                                    .sort()
                                    .join('');

  return normalizedWord;
}

export function shouldOutputAnagrams(anagrams: Anagrams) {
  const anagramCount = Object.keys(anagrams).length;

  return anagramCount >= config.reducer.minimumAnagramSetSize;
}
