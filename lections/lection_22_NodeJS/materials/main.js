// SystemJS
let http = require('http');

// ES6 Modules
// import http from 'http';

let data = {
    x: 10,
    y: 20,
    get fofo() {
        return this.x + this.y;
    }
}

console.log(data.fofo)
console.log(http)