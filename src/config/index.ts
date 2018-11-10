export default {
  mapper: {
    // Words below this length will be discarded (e.g. a, i)
    minimumAnagramLength: 2,
  },

  reducer: {
    // The anagram will only be printed from the reducer if the set's length is above this
    minimumAnagramSetSize: 2,

    // If only ever seen in a certain case, print that one. Otherwise, lowercase all characters.
    // e.g. If "Toby" always has a capital T, print that.
    shouldDiscardCaseOnContradiction: true,

    // Test format: { Anagram1, Anagram2 }
    shouldFormatTestOutput: true,
  },
};
