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