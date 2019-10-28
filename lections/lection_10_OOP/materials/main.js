console.log('Lection 10');

var parent = {}

if(true) {
    parent.x = 10;
}

var child = Object.create(parent);
// console.log(child);

// --------------------------

function Parent(Tname, age, speed = 10) {
    this.name = Tname;
    if(age <= 100 && age >= 0) {
        this.age = age;
    }
    this.speed = speed;
    this.country = 'Ukraine';
}

Parent.prototype.run = function(){
    console.log('Я ' + this.name + ', бегу со скоростью - ' + (this.speed || 0) + 'км/ч');
}

// very bad
// Parent.prototype.example = 1231;


var C1 = new Parent('Vasya', 20, 16);
var C2 = new Parent('Petya', 27);
var C3 = new Parent('Olya', 56);

// C1.__proto__.XYZ = 'HELLO';
// console.log(C1, C2, C3);
// console.dir(Parent);
// console.log(C2.__proto__ == Parent.prototype);

C1.run();
C2.run();   
C3.run();   
// var coco = C1.run;
// coco();