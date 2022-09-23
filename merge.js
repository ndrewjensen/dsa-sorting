"use strict";

/**accepts two sorted arrays and
 * returns a new array with values
 * from both arrays sorted. */

function merge(nums1, nums2) {
  //two pointers, one for each array

  const len1 = nums1.length;
  const len2 = nums2.length;
  let i = 0;
  let j = 0;
  let output = []

  while (i < len1 && j < len2) {
    if (nums1[i] <= nums2[j]) {
      output.push(nums1[i]);
      i++
    } else {
      output.push(nums2[j]);
      j++
    }
  }
  while (j < len2) {
    output.push(nums2[j]);
      j++
  }
  while (i < len1) {
    output.push(nums1[i]);
      i++
  }

  return output
}


function mergeSort() {}

module.exports = { merge, mergeSort };
