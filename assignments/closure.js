// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// function plusTwo(val) {
//   const num = 2;
//   val;
//   let addsToNum = () => {
//     return num + val;
//   };
//   return addsToNum();
// };

function plusTwo(val) {
  const num = 2;
  let res = num;
  return (() => {res =+ val; return res;})();
};
console.log(plusTwo(4));

let thisNum = plusTwo;

console.log(thisNum(35))


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (() => {
  let count = 0;
  return () => { count += 1; return count }
})();

const newCounter = counter;

console.log(newCounter());
newCounter();
newCounter();
newCounter();
newCounter();
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = (() => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
const counterFactory = (() => {
  let count = 0;
  const changeBy = (val) => {
    count += val;
  }
  return {
    increment: () => {
      changeBy(1);
      return count;
    },
    decrement: () => {
      changeBy(-1);
      return count;
    },
  };   
})();

counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.increment());

counterFactory.decrement();
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.decrement());
