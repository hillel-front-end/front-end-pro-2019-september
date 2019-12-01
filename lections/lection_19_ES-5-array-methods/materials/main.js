console.log('Lection_19');


var list = [1, '-22', 0,  '-3', '4234asdfgsd', '5', -6, 9, '0',null,undefined,,10];
var res;

// forEach

list.forEach(function(item, pos, arr) {
    // console.log(item)
});

// filter

res = list.filter(function(item, pos, arr) {
    return typeof item == 'number' && item > 0; // to boolean
});
// console.log(list, res);

list = [1, 2, 3, 0]

// map
res = list.map(function(item, pos, arr) {
    return {
        val: item
    };
});

list = [
    {
        value: 10,
        title: 'Ex1'
    },
    {
        value: 20,
        title: 'Ex2'
    },
    {
        value: 13,
        title: 'Ex3'
    }
]

res = list.map(function(item, pos, arr) {
    return item.value
});

console.log(list, res);


// -------------------- Practice


var students = [
    {
        name: 'Ex1',
        mark: 4
    },
    {
        name: 'Ex2',
    },
    {
        mark: 4
    },
    {
        name: 'Ex3',
        mark: 4
    }
];

// students
//     .filter(function(stud){
//         return stud.name && stud.mark;
//     })
//     .map(function(stud){
//         return stud.name
//     })
//     .map(function(name){
//         return name.toUpperCase();
//     })
    // .forEach(function(names){
    //     console.log(names)
    // })

// document
//     .querySelectorAll('div')
//     .forEach(function(item){
//         item.addEventListener('click', function(){

//         })
//     })


// every | some -> true or false

list = [1, '-22', 0,  '-3', '4234asdfgsd', '5', -6, 9, '0',10];

// res = list.every(function(item){
//     return item;
// })

// res = list.some(function(item){
//     return item == undefined;
// })

// console.log(res);

// --------------

// list.some(function(item){
//     return item.value && item.calc && item.cb && item.x && item.znak;
// })


// ----------------------------

// reduce

list = [3, 6, 7, 8, 5, '67', 6, 7, 8, 34];
var sum
// sum = 0

sum = list.reduce(function(prev, item){
    if(typeof item != 'number') {
        return prev;
    }
    return prev + item;
});

console.log('reduce', sum);


sum = 0;
for(var i = 0; i < list.length; i++){
    if(typeof list[i] != 'number') {
        continue;
    }
    sum += list[i]
}
console.log('for',sum);



// ------------------

// arrays = [
//     [1, 2, 3, 6, 5],
//     [1, 2, 3, 6, 5],
//     [1, 2, 3, 6, 5],
//     [1, 2, 3, 6, 5]
// ];

// res = arrays
//     .reduce(function(flatList, list){
//         return flatList.concat(list);
//     }, [])
//     .reduce(function(sum, item) {
//         return sum + item;
//     })
// console.log(res);


// ------------------

// for(;;){
//     break;
// }