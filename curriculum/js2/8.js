/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function(cb, i=0, result=[]) {
    if(i===this.length) return result;
    result.push(cb(this[i],i));
    return this.gsMap(cb, i+1, result);
  };
};

module.exports = {
	solution,
};
