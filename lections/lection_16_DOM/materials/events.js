window.onload = function () {
    init && init()
    var block = document.querySelector('.block');
    email = document.querySelector('#email');

    function handler(ev) {
        console.log(ev.type, ev);
    } 

    function getRand(min, max) {
        return Math.floor(Math.random()*(max - min + 1) + min);
    }
    
    // block.addEventListener('click', handler);
    // block.addEventListener('keypress', handler);

    // document.addEventListener('keypress', handler);
    // document.addEventListener('keydown', handler);
    // document.addEventListener('keyup', handler);

    // email.addEventListener('click', handler);

    // form events
    // email.addEventListener('input', handler);

    // email.addEventListener('focus', handler);
    // email.addEventListener('blur', handler);
    // email.addEventListener('change', handler);
    // email.value ="asdasdsdasd"
    var step = 5;

    var logic = {
        "37": function(origin, h = step){
            origin.target.style.left = origin.x - h + "px";
        },
        "38": function(origin, h = step){
            origin.target.style.top = origin.y - h + "px";
        },
        "39": function(origin, h = step){
            origin.target.style.left = origin.x + h + "px";
        },
        "40": function(origin = {y: 0}, h = step){
            origin.target.style.top = origin.y + h + "px";
        },
        "8": function(origin){
            origin.target.style.backgroundColor = "rgb("+getRand(0, 255)+","+getRand(0, 255)+","+getRand(0, 255)+")"
        }
    };

    document.addEventListener('keydown', function(event){
        logic[event.keyCode] && logic[event.keyCode]({
            x: target.offsetLeft,
            y: target.offsetTop,
            target: target
        });
    });
}

function init(){
    target = document.querySelector('.block');
}