console.log('Lection_5');


// A = [1,2,4,56,3,6];

// isLengthEven = A.length % 2 == 0;

// middle = Math.ceil(A.length / 2) - 1;

// A.splice(middle, isLengthEven ? 2 : 1);

// count = 1;
// if(isLengthEven){
//     count = 2
// }
// count = isLengthEven ? 2 : 1;
// A.splice(middle, count);

// --------------------------

// Function

// function sum(a, b) {
//     console.log(a, b, a + b);
// }

// a = +prompt();
// b = +prompt();
// sum(a, b);
// console.log(a);
// ------------------
// delete window.b;

// --------------------

// function f(d, a, b = -99, c) {
//     // if(!a) {
//     //     a = -99;
//     // }
//     if(typeof a == 'undefined') {
//         a = -99;
//     }
//     console.log(a, b, c, d);
// }

// f(40, '', '');

// --------------------


function sum(a, b){
    return a+b;
} 

res = sum(2, 12);
console.log(res);


// ------------------


function fillArray(arr, n){
    arr.length = n;

    for(i = 0; i < arr.length; i++){
        arr[i] = getRandom(-20, 45);
    }

    return arr;
}

function getRandom(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}


A = [1, 3,3,4];
A = fillArray(A, 40);
console.log(A);



A = fillArray(A, 20);
console.log(A);
A = fillArray(A, 10);
console.log(A);