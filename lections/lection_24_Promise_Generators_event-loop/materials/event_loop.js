let x = 10;

function f() {
    f1();
    f2();

    function f1() {
        // debugger;
        
        f2();
    }
}

function f2() {
    // debugger;
    console.log('f2');
}

setTimeout(function(){
    console.log('timer');
}, 0);
console.log('init');
f();

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
        // debugger;
    }, 1000*i*2);

}

document.onclick = function(){
    console.log('on click');
}

sleep(2000);





function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }