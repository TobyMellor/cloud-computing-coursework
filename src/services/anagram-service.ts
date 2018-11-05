import config from '../config';

export type AnagramSet = Set<string>;

export function splitWords(line: string) {
  const sanatizedLine = line.replace(/[.,\/#!$%\^&\*;:{}=\`~()"“”‘’]/g, '') // Discard punctuation and other characters
                            .replace('_', ' ')                            // Treat underscores as separators
                            .replace(/(-|–|—){2,}/g, ' ');                // Treat multiple hyphens as seperators

  return sanatizedLine.split(' ');
}

export function getNormalizedWord(word: string) {

  // Convert to lower case, remove special characters
  // e.g. E-mail becomes email
  const cleanedWord = word.toLocaleLowerCase()
                          .replace(/[-–—']/g, '');

  // Normalize the word, so it's characters are sorted alphabetically
  // e.g. email becomes aeilm
  const normalizedWord = cleanedWord.split('')
                                    .sort()
                                    .join('');

  return normalizedWord;
}

export function shouldOutputAnagrams(anagrams: AnagramSet) {
  const anagramCount = anagrams.size;

  return anagramCount >= config.minimumAnagramSetSize;
}
