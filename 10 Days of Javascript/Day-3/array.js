function getSecondLargest(nums) {
  // Complete the function
  let maxNumber = Math.max(...nums);
  let removeFirstLargestValue = nums.filter(item => item !== maxNumber);
  let secondLargestNumber = Math.max(...removeFirstLargestValue);
  return secondLargestNumber;
}
