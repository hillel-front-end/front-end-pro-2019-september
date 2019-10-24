// "use strict"
console.log('Lection_9');

// this


function example() {
    console.log(this);
    // inner();
    // function inner() {
    //     console.log(this)
    // }
}

var user = {z: 23};

user.example = example;

example();
user.example();

// -------------------------------

function getSumOfAllProperties() {
    var self = this;
    var sum = 0;
    for(var key in self){
        if(typeof self[key] != 'number') {
            continue;
        }
        sum += this[key];
    }

    return sum;
}
var res = window.getSumOfAllProperties();

var data = {
    x: 10,
    y: 20,
    list: [],
    f: getSumOfAllProperties
}

console.log(data.f());