var assert = require('assert');
var expect    = require("chai").expect;
var insertionSort = require("../lib/insertionSort");
describe('Array', function() {
  describe('insertionSort', function() {
    it('should return a sorted array', function() {
      var sortedArray1 = [1, 2, 4, 8];
      var sortedResult1 = insertionSort([4, 2, 1, 8])

      var sortedArray2 = [2, 10, 12, 44, 55, 150, 1111, 1231023213];
      var sortedResult2 = insertionSort([10, 150, 2, 1111, 1231023213, 44, 55, 12])

      assert.deepEqual(sortedArray1, sortedResult1, "sortedResult1 is equal to sortedArray1");
      assert.deepEqual(sortedArray2, sortedResult2, "sortedResult2 is equal to sortedArray2");
    });
  });
});
