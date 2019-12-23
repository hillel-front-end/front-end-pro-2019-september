// Arrow function

// function f(a, b) {
//     console.log(a);
//     return a + b;
// }

var f = (a, b) => {
    // debugger;
    console.log(this); 
    return a + b;
}


// console.log('global', this)
// f(2, 3); // this = window

let data = {
    x: 20,
    f,
    wrapper() {
        console.log('wrapper', this);
        this.f();
    }
}
// console.log(data)
// data.f(2, 3);

// data.wrapper();

// list
//     .map(item => item*2)
//     .map((item, pos) => pos % 2 === 0 ? item*4 : item)
//     .filter(item => item > 0);


// ---------------

// Generators
function f1(){

}

function f2(){}

function* factory(list) {
    for(let i = 0 ; i < list.length; i++){
        if(list[i] > 0) {
            yield list[i];
        }
    }
}

let step = factory([2,3,4,4,-5,6,-67,7]);

console.log(step.next());
console.log(step.next());
step.return();
// for(key in data){}

for(value of step){
    console.log(value);
}

// for(value of factory([2,3,4,4,-5,6,-67,7])){
//     console.log('test', value);
// }

console.log(step.next());
// if(step.next().done) {
//     Promise.resolve();
// }


// async/await

// async function getAllData() {
//     let d1 = await getFile('/data_1.json');
//     console.log('1');
//     let d2 = await getFile('/data_2.json');
//     let d3 = await getFile('/data_3.json');

//     // Promise.all([d1, d2, d3]).then()
//     // return d1.then((r1) => {
//     //     return d2.then((r2) => {
//     //         return d3.then((r3) => {
//     //             r3.concat(r1.concat(r2));
//     //         })
//     //     })
//     // }))

//     return d3.concat(d1.concat(d2));
// }
// let data = getAllData();
// getAllData().then(data => {
//     console.log(data);
// })





