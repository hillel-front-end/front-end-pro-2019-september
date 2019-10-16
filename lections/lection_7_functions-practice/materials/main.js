console.log('Lection_7');


// var x = 10;

// function f(y) {
//     // hoisting
//     console.log(x, y);
//     var x = 678;

//     console.log(x, y);
// }


// f(56);

// console.log(x, y);


// -----------------------------


// var z = 20;
// var a = 700;
// function f(a, x) // f.scope = Global   f.LE -> b = 20, a ="hello", x = false
// {
//     var b = 20;
//     var super_a = a;


//     // console.log(a, b);

//     f1(500, a)

//     function f1(a, super_super_a) { // f1.scope = f.LE      f1.LE -> a = 500 x = 900
//         var x = 900;

//         // console.log(a, x, b);
//         console.log('z = ', z);
//         console.log('a = ', super_a, super_super_a);
//         console.log(window.a);  
//         for(var i = 0, inner_z = window.z; i < inner_z; i++){
//             console.log(i);
//         }
//     }
// }

// f("hello", false)

// -----------------------------------------
var x = 0;
function f(p, l) { // f.scope = Global f.LE = x = 1000, p=900, l=78, f1 = function
    var x = 1000;
    function f1(a) { // f1.scope = f.LE f1.LE = ?
        console.log(p, l, x)
        return a + 20 + x + p + l;
    }
    
    console.log(f1(10));
    SUPER = f1;

    return f1;
}

// var result = f(900, 78);

// console.log(result(10));
// console.log(result(120));
// console.log(result(34510));
// console.log(result(13450));
// console.log(f1(10)); // error




// -----------------------------

// z = 200;

// outerF(800);


// function outerF(a) {
//     var c = 70;
//     inner(67676);

//     function inner(b) {
//         console.log(b, z);
//         superInner();

//         function superInner() {
//             console.log(a)
//             // debugger;
//         }
//     }
// }



// ----------------------------------------


function factory(list) {
    var index = 0;
 
    // return function(cb){
    //     if(!cb) {
    //         return list[index++];
    //     }
    //     var calc = cb(list[index++]);
    //     return calc;
    // };
    return function(cb){
        var value = list[index++];
       return cb ? cb(value) : value;
    };
}

var next = factory([1,7,8,8,67,64,46,64,634,64,46,46]);

console.log(next(div)); // 1
console.log(next(fact)); // 7
console.log(next(div)); // 8
factory = undefined;
console.log(next());
console.log(next());

function div(x) {
    return x/10;
}

function fact(n) {
    var res = 1;
    for(var i = 1; i <= n; i++){
        res *= i;
    }

    return res;
}