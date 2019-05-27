// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  */

// Higher order function using "cb" as the call back
function firstItem(arr, cb) {
  return cb(arr[0]);
}

// Function invocation 
firstItem(items, (first) => {
  console.log(first)
});




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}



getLength(items, len => {console.log(len)});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, (lastItem) => {
  console.log(lastItem)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(5, 64, (sum) => {
  console.log(sum)
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(45, 3, (prod) => {
  console.log(prod)
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let res = list.includes(item);
  return cb(res);
}

contains("Gum", items, (found) => {
  console.log(found)
});

contains("isudgcisau", items, (notFound) => {
  console.log(notFound);
});

/* STRETCH PROBLEM */

const nums = [12, 23, 34, 45, 56, 12, 35, 24, 23, 34, 12];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let filteredArr = [];
  array.forEach((val) => {
    if (!filteredArr.includes(val)) {
      filteredArr.push(val);
    }
  });
  return cb(filteredArr);
}
removeDuplicates(nums, (filtered) => {
  console.log(filtered)
});
