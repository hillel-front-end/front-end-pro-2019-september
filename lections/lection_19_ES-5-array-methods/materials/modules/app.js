// // import {m1Example, x} from './m1.js';
// import * as ModuleM1 from './m1.js';
// import ModuleM2 from './m2.js';

// // ModuleM2 = {
// //     m2: m2,
// //     m3: m3
// // };

// // console.log(100);
// // console.log(ModuleM1);
// console.log(ModuleM2);
// // console.log(m1Example, x)
// // m1Example();

// -------------------------
import {Strtob64, b64toStr} from './m1.js';
import ModuleM2 from './m2.js';

var str = prompt();

var encodedStr = Strtob64(str);
console.log(encodedStr);


var decodedStr = b64toStr(encodedStr);
console.log(decodedStr);