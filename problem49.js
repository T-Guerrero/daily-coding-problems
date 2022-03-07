/*
Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137,
since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0,
since we would not take any elements.

Do this in O(N) time.
*/
export default class Problem49 {
  static solve(list) {
    if(list.length == 0)
      return 0;

    const reducedValues = [];
    let currentSum = list[0];

    for(let i = 1; i < list.length; i++) {
      if(Math.sign(list[i]) != Math.sign(list[i - 1])) {
        reducedValues.push(currentSum);
        currentSum = list[i];
      }
      else
        currentSum += list[i];
    }

    reducedValues.push(currentSum);

    let maxSum = 0;
    currentSum = 0;
    for(let i = 0; i < reducedValues.length; i++) {
      if(Math.sign(reducedValues[i]) == -1) {
        if(currentSum + reducedValues[i] >= 0) {
            currentSum += reducedValues[i];
        }
        else {
          maxSum = Math.max(maxSum, currentSum);
          currentSum = 0;
        }
      } else {
        currentSum += reducedValues[i];
      }
    }

    return Math.max(maxSum, currentSum);
  }


  static tests = [
    () => {
      const list = [34, -50, 42, 14, -5, 86];
      return Problem49.solve(list) === 137;
    },
    () => {
      const list = [-5, -1, -8, -9];
      return Problem49.solve(list) === 0;
    },
    () => {
      const list = [];
      return Problem49.solve(list) === 0;
    },
    () => {
      const list = [-10, 100, -70, 100, -91, 90, -20, 50];
      return Problem49.solve(list) === 159;
    }
  ]
}