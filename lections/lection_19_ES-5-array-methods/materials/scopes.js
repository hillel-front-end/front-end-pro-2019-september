

// es6 - let, const, var


let x = 10;

// console.log(x)

if(true){
    let z = 200;
    // console.log(z)
}
// console.log(z);

function f(){
    let y = 20, 
        x, 
        expression;

    if(true){
        expression
    }
}

f();

// const

const APU_EXAMPLE = 'ETST';

console.log(APU_EXAMPLE)


// bad
const DATA = {
    x: 10,
    y: 20
};

DATA.x = 800;
console.log(DATA);

const noop = function() {}

function pp(list = [], cb = noop) {
    var res = [];
    
    for(let i = 0; i < list.length; i++){
        res[i] = cb(list[i]);
    }

    return res;
}

let list = [3, 6, 7, 8, 5, 6, 7, 8, 34];
console.log(pp(list))