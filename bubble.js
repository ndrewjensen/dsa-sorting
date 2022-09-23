"use strict";

/** Given an array, sort the values in the array.
 * An O(n^2) algorithm.  */

function bubbleSort(nums) {
  for (let i = nums.length - 1; i > -1; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums
}

module.exports = bubbleSort;
