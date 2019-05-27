let smallArr = [1, 23, 25, 46, 52, 789, 64];

let thisArr = [5, 4, 65, 24, 35];

let thatArr = [{key: 1, anotherKey: 2}];

let parentObj = {};

let bigArr = [smallArr, thisArr, thatArr];

let newSomething = bigArr.map(arr => parentObj["arr"] = arr);

let newSomething2 = bigArr.map(function(arr) {
    return parentObj["arr"] = arr 
});

console.log(newSomething);
console.log(newSomething2);
console.log(parentObj);