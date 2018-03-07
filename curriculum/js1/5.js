/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (x, func) => {
  if (!x) return;
  func();
  return solution(x-1, func);
};

module.exports = {
  solution,
};
