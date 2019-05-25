const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//  This makes sense to me
function sort(arr) {
    return arr.sort();
}

function sortedItems(arr, cb) {
    console.log(cb(arr));
}

 sortedItems(items, sort); //[ 'Gum', 'Notebook', 'Pencil', 'yo-yo' ]

//This does not
function sortItems(arr, cb) {
    return cb(arr.sort());
}

sortItems(items, (sorted) => {
    console.log(sorted);
});// [ 'Gum', 'Notebook', 'Pencil', 'yo-yo' ]

let res = items.find("Gum");

console.log(res);