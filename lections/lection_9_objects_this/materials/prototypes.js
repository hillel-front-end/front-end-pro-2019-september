
var user = {
    x: 10,
    y: 20
}

// var data = {
//     ss: 64756,
//     flag: false
// }    

user.__proto__.Z = 'Hello Z!';
// console.log(user)
// console.log(data)

// var list = [];

// console.log(list);  

// function f(){

// }

// -------------------------


var Parent = {
    first: 10,
    last: 20,
    getLast() {
        return this.last;
    }
}

var Child = Object.create(Parent);
var Child3 = Object.create(Parent);

Child.last = 0;
Child.fofo = 'Fofo!';

Child3.last = 670;

console.log(Child);
console.log(Parent.getLast());
console.log(Child.getLast());
console.log(Child3.getLast());


// var list = [1, 6, 7]
// var list2 = [15, 62, 71]
// list.push(23);
// list2.push(78);
Array.prototype.myPush = function(){
    for(var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
    }

    return this.length;
}
// list.myPush(100, 200)
// console.log(list)