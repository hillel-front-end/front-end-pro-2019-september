console.log('Lection_4');


// блок инициализации
// A = [];
// A.length = 50;

// через конструктор
// A = new Array(50);

// for(i = 0; i < A.length; i++){
//     A[i] = Math.floor(Math.random()*20 - 10);
// }

// console.log(A);

// ---------------------------

// min?

// min = A[0];
// max = A[0];
// for(i = 0; i < A.length; i++){
//     if(A[i] < min) {
//         min = A[i];
//     }

//     if(A[i] > max) {
//         max = A[i];
//     }
// }

// ----------------------------------
// min_index = 0;
// max_index = 0;
// for(i = 0; i < A.length; i++){
//     if(A[i] < A[min_index]) {
//         min_index = i;
//     }
    
//     if(A[i] < A[max_index]) {
//         max_index = i;
//     } 
// }

// ----------------------------------



// методы массива

a = [1, 7, 8, 9, 5, 6, 77];
b = [66, 8, 9, 5, 5, 2, 3];

// task -> склеить два массива

res = a.concat(b);   
// console.log(res);

// res = [];
// for(i = 0; i < a.length; i++){
//     res[res.length] = a[i];
// }
// for(i = 0; i < b.length; i++){
//     res[res.length] = b[i];
// }
// console.log(res);



// slice

A = [6, 7, 8888, 9, 4, 3];
// res = A.slice(2, 5);
// console.log(A);
// console.log(res);

// res = A.splice(2, 0, 'hello', 'world', '!', 'dfhgsfs');
// console.log(A);
// console.log(res);


// -------------------------------------
// console.log(A);
// res = A.reverse();
// console.log(A); 
// console.log(res);

// -------------------------------------

// push, pop

A = [1, 4, 7];
// console.log(A);
// res = A.push(20, 40, 60);
// console.log(A, res);
// res = A.pop();
// console.log(A, res);
// res = A.push([1245,457,547,45,745,75]);
// console.log(A, res);

// ----------------------

// console.log(A);
// res = A.shift();
// console.log(A, res);
// res = A.unshift(90);
// console.log(A, res);


// -----------------------

// from array to string with separator

A = [2, 7, 8, 9, 5, 6, 6];

console.log(A);
console.log(A.join('!'));

// document.write('<ul>');
//     for(i = 0; i < A.length; i++){
//         document.write('<li>' + A[i] + '</li>');
//     }
// document.write('</ul>');
// document.write('<ul><li>' + A.join('</li><li>') + '</li></ul>');
// document.write('<ul><li>1</li><li>67</li><li>89</li><li>13</li><li>54</li></ul>');


// ----------------------------------