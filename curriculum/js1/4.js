/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, str, i=0, output='') => {
  if (i >= n) return output;
  return solution(n, str, i+1, output+str);
};

module.exports = {
  solution,
};
