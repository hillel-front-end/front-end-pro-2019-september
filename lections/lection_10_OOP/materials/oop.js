function Parent() {}
Parent.prototype.m1 = function(){
    console.log('m1');
} 

function Child() {}
Child.prototype = Object.create(Parent.prototype);

Child.prototype.m3 = function(){
     console.log('m3');
} 
var p = new Child();

console.log(p);

// -----------------------------------------------

// class Parent {
//     m1(){
//          console.log('m1');
//     }
// }

// class Child extends Parent {
//     constructor(name, age){
//         super();
//         this.name = name;
//         this.age = age;
//     }

//     m3(){
//          console.log('m3');
//     }
// }

// var p = new Child('Vasya', 26);

// console.log(p);