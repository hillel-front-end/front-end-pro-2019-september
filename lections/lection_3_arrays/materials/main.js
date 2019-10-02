console.log('Lection_3');

// n = 4;


// for(i = 1, res = 1; i <= n; i++){
//     res *= i;
// }
// console.log('factorial=', res);

// -----------------------------------------

// a = 2;
// n = 6;
// for(i = 1, res = 1; i <= n; i++){
//     res *= a;
// }
// console.log('a^n=', res);


// -----------------------------------------

/*
    Ввести a, b с клавиатуры.
    Если а меньше чем b, 
    то посчитать сумму всех четных элементов 
    между ними.
    Если а больше или равно чем b,
    то вывести простые числа между ними.
*/

do {
    a = +prompt('a');
    b = +prompt('b');
} while(isNaN(a) || isNaN(b));

if (a < b) {
    for(i = a, sum = 0; i <= b; i++){
        if(i % 2 == 0) {
            sum += i;
        }
    }

    console.log(sum)
} else {
    for(j = b; j <= a; j++){
        value = j;
        isPrime = true;
        for(i = 2; i < value; i++){
            if(value % i === 0) {
                // NE PROSTE
                isPrime = false;
                break;
            }
        }
    
        console.log(value, isPrime);
    }
}



// -----------------------------------------
