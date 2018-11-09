import config from '../config';

export type AnagramSet = Set<string>;

export function splitWords(line: string) {
  const sanatizedLine = line.replace(/[^ ]+[.,\/#!$%\^&\*;:{}=\`~()"“”‘’][^ ]+[ ]?/g, '') // Discard words containing punctuation (e.g. domains)
                            .replace(/[.,\/#!$%\^&\*;:{}=\`~()"“”‘’]/g, '')               // Discard punctuation and other characters
                            .replace(/_/g, ' ')                                           // Treat underscores as separators
                            .replace(/(-|–|—){2,}/g, ' ');                                // Treat multiple hyphens as seperators

  const words = sanatizedLine.split(' ');
  const sanatizedWords = words.filter(word => {
    if (/\d/.test(word)) { // Remove non-words (e.g. numbers)
      return false;
    }

    if (word.length < config.minimumWordLength) { // Remove small words (e.g. " " or "A")
      return false;
    }

    return true;
  });

  return sanatizedWords;
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

export function shouldOutputAnagrams(anagrams: AnagramSet) {
  const anagramCount = anagrams.size;

  return anagramCount >= config.minimumAnagramSetSize;
}
