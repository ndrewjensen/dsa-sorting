"use strict";

/**accepts two sorted arrays and
 * returns a new array with values
 * from both arrays sorted. */

function merge(nums1, nums2) {

  if (!nums1) return nums2;
  if (!nums2) return nums1;
  const len1 = nums1.length;
  const len2 = nums2.length;
  let i = 0;
  let j = 0;
  let output = [];

  while (i < len1 && j < len2) {
    if (nums1[i] <= nums2[j]) {
      output.push(nums1[i]);
      i++;
    } else {
      output.push(nums2[j]);
      j++;
    }
  }
  while (j < len2) {
    output.push(nums2[j]);
    j++;
  }
  while (i < len1) {
    output.push(nums1[i]);
    i++;
  }

  return output;
}

/** Given an array, sort the values in the array */
function mergeSort(nums) {
  if (nums.length > 1) {
    const arr1 = mergeSort(nums.slice(0, Math.floor(nums.length / 2)));
    const arr2 = mergeSort(nums.slice(Math.floor(nums.length / 2)));
    return merge(arr1, arr2);
  }
  return nums;
}

module.exports = { merge, mergeSort };
