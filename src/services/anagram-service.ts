import config from '../config';

export type Anagrams = {
  [prop: string]: string; // [lowercase word]: Original or lowercase
};

/**
 * Takes a line of text, splits it into valid words.
 *
 * @param line A line of text to split into words.
 */
export function splitWords(line: string) {
  const SEPARATORS = /--+|_+| +|[|()[]]/;
  const ILLEGAL_WORD = /([^ ]+[.,\/#!$%\^&\*;:{}=\`~"“”‘’][^ ]+|\d)/;
  const PUNCTUATION = /([^A-Za-z\u00C0-\u017F'-]|^'|^-)/g;

  const tokens = line.split(SEPARATORS);

  const words = tokens
    .filter(w => !ILLEGAL_WORD.test(w))   // Discard words containing punc
    .map(w => w.replace(PUNCTUATION, '')) // Remove surrounding punctuation
    .filter((w) => {
      return w.replace(/['-]/g, '')
              .length >= config.mapper.minimumAnagramLength;
    }); // Discard words (without any special characters) below min length

  return words;
}

/**
 * Alphabetically sorts a word, and strips out
 * any special characters
 *
 * @param word Word to normalize
 */
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

/**
 * Determines whether a set of anagrams should
 * be printed out or not.
 *
 * Should not be printed out if:
 *    - It's below a certain length
 *
 * @param anagrams Set of unique anagrams
 */
export function shouldOutputAnagrams(anagrams: Anagrams) {
  const anagramCount = Object.keys(anagrams).length;

  return anagramCount >= config.reducer.minimumAnagramSetSize;
}
