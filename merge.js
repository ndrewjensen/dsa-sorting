"use strict";

/**accepts two sorted arrays and
 * returns a new array with values
 * from both arrays sorted. */

function merge(nums1, nums2) {
  if (!nums1) return nums2;
  if (!nums2) return nums1;
  const len1 = nums1.length;
  const len2 = nums2.length;
  let [i,j] = [0,0]
  const output = [];

  while (i < len1 || j < len2) {
    if (nums1[i] <= nums2[j]) {
      output.push(nums1[i]);
      i++;
    } else if (nums1[i] > nums2[j]) {
      output.push(nums2[j]);
      j++;
    } else if (j < len2) {
      output.push(nums2[j]);
      j++;
    } else if (i < len1) {
      output.push(nums1[i]);
      i++;
    }
  }
  return output;
}

/** Given an array, sort the values in the array */
function mergeSort(nums) {
  if (nums.length > 1) {
    let half = Math.floor(nums.length / 2);
    const half1 = mergeSort(nums.slice(0, half));
    const half2 = mergeSort(nums.slice(half));
    return merge(half1, half2);
  }
  return nums;
}

module.exports = { merge, mergeSort };
