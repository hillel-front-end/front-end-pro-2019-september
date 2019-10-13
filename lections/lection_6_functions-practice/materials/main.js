
console.log('Lection_6');




// console.log(sum(2, 9));

// function declaration
function sum(a, b) {
    return a + b;
}

// console.log(sum2);
// function expression
var sum2 = function (a, b) {
    return a + b;
}

// console.log(b);
c = 10;
var b = 50;
res = c + b;



// ----


x = 10;
y = 20;

function f() {
    var x = 600;
    var y = 67;

    console.log(x, y)
    console.log('global x', window.x);

    return x+y;
}

// console.log('before',x, y)
// y = f();
// console.log('after', x, y)



// ------------------------------------



var A = new Array(20);
var min = -5;
var max = 10;

// console.log(i)
// fillArray(A, min, max);
// // console.log(A);
// min = -20;
// max = 60;
// fillArray(A, min, max);
// // console.log(A);


// function fillArray(source, min, max){
//     // console.log(source, min, max);
//     for(var i = 0; i < source.length; i++){
//         source[i] = Math.floor(Math.random()*(max - min + 1) + min);
//     }
// }



// ------------------------------------

// x = 800;
// var f1;
// function f(){
//     window.f1 = function (y) {
//         console.log(x, y);
//     }
//     console.log(x, f1);
//     var x = 10;
//     // x = f1;

//     f1(60);
//     // x();
    
// }

// f();
// f1();