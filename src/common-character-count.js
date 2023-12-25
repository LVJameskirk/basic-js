const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCount = 0;
  const s1CharCount = {};
  const s2CharCount = {};

  for (let char of s1) {
    if (s1CharCount[char]) {
      s1CharCount[char]++;
    } else {
      s1CharCount[char] = 1;
    }
  }

  for (let char of s2) {
    if (s2CharCount[char]) {
      s2CharCount[char]++;
    } else {
      s2CharCount[char] = 1;
    }
  }

  for (let char in s1CharCount) {
    if (s2CharCount[char]) {
      commonCount += Math.min(s1CharCount[char], s2CharCount[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
