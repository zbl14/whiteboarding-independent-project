// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

export const stringToUrls = (str) => {
  if (str === "") return "";
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      const left = str.substring(0, i);
      const right = str.substring(i + 1);
      str = left + "%20" + right;
    }
  }
  return str;
};

// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

export const arrDedupe = (arr) => {
  if (arr.length <= 1) return arr;
  let map = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
      res.push(arr[i]);
    } else {
      map[arr[i]]++;
    }
  }
  return res;
};

export const arrDedupeWithSet = (arr) => {
  if (arr.length <= 1) return arr;
  const arrSet = new Set(arr);
  return [...arrSet];
};

// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

export const compressingStr = (str) => {
  let res = "";
  if (str.length === 0) return res;
  compressing(str);
  return res;

  function compressing(str) {
    const len = str.length;
    for (let i = 0; i < len; i++) {
      if (str[i] !== str[i + 1]) {
        const tempStr = str.substring(0, i + 1);
        // console.log("tempStr:" + tempStr + "" + tempStr.length);
        if (tempStr.length !== 1) {
          res += tempStr.length + tempStr[0];
        } else {
          res += tempStr[0];
        }
        // console.log("res:" + res);
        console.log(i + "" + str);
        if (str[i + 1] !== undefined) {
          str = str.substring(i + 1);
          console.log("new:" + str);
          compressing(str);
        } else {
          return res;
        }
      }
    }
  }
};

// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

export const checkingForUniqueness = (str) => {
  let map = {};
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
};

// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

//Quick sort
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const partition = (arr, l, r) => {
  let pivot = arr[r];
  let i = l - 1;
  for (let j = l; j < arr.length; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, r);
  return i + 1;
};

export const quickSort = (arr, l, r) => {
  if (l < r) {
    let pi = partition(arr, l, r);
    quickSort(arr, l, pi - 1);
    quickSort(arr, pi + 1, r);
  }
  return arr;
};
