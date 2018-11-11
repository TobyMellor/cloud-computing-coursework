export default {
  mapper: {
    // Words below this length will be discarded (e.g. a, i)
    minimumAnagramLength: 2,
  },

  reducer: {
    // The anagram will only be printed from the reducer if the set's length is above this
    minimumAnagramSetSize: 2,

    // If the same word is always seen with an apostrophe, print that one. Otherwise, drop the apostrophe.
    // e.g. If "gardener's" and "gardeners'" is seen, just print "gardeners"
    shouldDiscardApostropheIfTwoSeen: true,

    // If the same word is always seen with an hyphen, print that one. Otherwise, drop the hyphen.
    // e.g. If "well-beloved" and "wellbeloved'" is seen, just print "wellbeloved"
    shouldDiscardHyphenIfTwoSeen: true,

    // If only ever seen in a certain case, print that one. Otherwise, lowercase all characters.
    // e.g. If "Toby" always has a capital T, print that.
    shouldDiscardCaseIfTwoSeen: true,

    // Test format: { Anagram1, Anagram2 }
    shouldFormatTestOutput: false,
  },
};
