let data = {
    x: 10,
    y: 20,
    info: {
        z: 600,
        p: 'hello',
        x: 900
    },
    longNameFullName: 'Vasya Petya'
};

// let {x, y, info, info: { z }} = data;
// console.log(x, y, info, z)

// let {x: superX, example:uniqueE = 'empty', longNameFullName: vp} = data;
// console.log(superX, uniqueE, vp);

// ------------------------------------------

// ... -> rest operator 

let struct = {a: 1, b: 2, c: 3, d: 4, e: 4};

// let {...other, d} = struct;
// console.log(d)
// console.log(other)
// console.log(struct === other)

let struct2 = [1,5,7,45,7,457,6,78,5,6,85,68,568,568,];

let [...newList] = struct2

console.log(newList);