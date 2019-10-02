console.log('Lection 3 - Arrays');

// A = [6, 9, 8, 7, 5, 9];

// console.log(A, A.length)

// -----------------

// dynamical

// A.length = 3;
// console.log(A);
// A.length = 6;
// console.log(A);

// ----------------------

// 0 .. A.length

// for(i = 0; i < A.length; i++){
//     console.log(i, ' --- ', A[i]);
// }

// ----------------------

// fill array

// n = +prompt();
n = 10;
A = [];
A.length = n;

for(i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*81 + 20);
}

console.log(A);

// Math.random()