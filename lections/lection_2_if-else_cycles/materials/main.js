console.log("Lection_2");

/*
+ bool
+ logical and or
+ if else
+ if else if else // at home
+ тернарный оператор ? // at home
+ циклы основы
+ while () {}
+ do {} while()
+ for(){}
*/


// x = 10;
// y = -4;

// console.log(x > 0);
// console.log(x != 0);
// console.log(x == 40);

// console.log( x > 5 && (y != 0 && x <= y*2) );

// --------------------------------

// if else


// x = -2;


// if (x != 0){
//     console.log('inner code');
// }

// x = "1jyhgfe2";
// x = +x;
// // NaN == +x -- very bad
// // isNaN();
// if (!isNaN(x)){
//     console.log('inner code, succesfull');
// }


// ------------------------

// a = +prompt();
// b = +prompt();
// c = +prompt();

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//     console.error('wrong value');
// } else {
//     console.log(a + b + c);
// }

// ------------------------


// x = +prompt('x=');
// y = +prompt('y=');
// znak = prompt('znak='); // * /
// res = '';

/*

!(znak == '*' || znak =='/')

znak != '*' && znak != '/'

*/

// if (znak != '*' && znak != '/') {
//     console.error('wrong sign')
// } else {
//     // if (znak == '*' || znak =='/') {

//     if(znak == '*') {
//         res = x * y;
//     }

//     if(znak == '/') {
//         res = x / y;
//     }
//     // }

//     console.log(res);
// }

// ------------------------------


i = 1;
n = 10;

while(i <= n) {
    console.log(i);
    i++;
}

i = 1;
n = 10;
do {
    console.log(i);
    i++;
} while(i <= n);

// for
for(i = 1, n = 10; i <= n; i++){
    console.log(i);
}