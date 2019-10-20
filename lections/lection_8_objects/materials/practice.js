var info = {};
var value = 600;

function addRecordsToObject(source, stopSign = "!"){
    var key, value;
    do {
        key = prompt('key name');
        if(key == stopSign) {
            return;
        }
        value = +prompt('value in key ' + key );
        source[key] = value;
    } while(true);
}

// console.log(info, value);
// addRecordsToObject(info, "&");
// console.log(info, value);

// --------------------------------------------------
function sum(a, b){
    return a + b;
}
function div(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}


var math = {
    '+': sum,
    '-': div,
    '*': mul,
    'fact': function(a){
        var res = 1;
        for(var i = 1; i <= a; i++){
            res *= i;
        }

        return res;
    },
    calc(a, znak, b){
        return math[znak](a, b);
    }
};

var res = math.calc(2, '+', 8);
console.log(res);
var res = math.calc(8, 'fact');
console.log(res);
