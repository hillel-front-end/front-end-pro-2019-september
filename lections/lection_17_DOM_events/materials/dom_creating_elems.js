var step = 5;
var target;
var logic = {
    "65": function(origin, h = step){
        origin.target.style.left = origin.x - h + "px";
    },
    "87": function(origin, h = step){
        origin.target.style.top = origin.y - h + "px";
    },
    "68": function(origin, h = step){
        origin.target.style.left = origin.x + h + "px";
    },
    "83": function(origin = {y: 0}, h = step){
        origin.target.style.top = origin.y + h + "px";
    }
};

function removeAllMovers() {
    document.addEventListener('keydown', onMover);
}


function setMover() {
    document.addEventListener('keydown', onMover);
}

function onMover(event){
    logic[event.keyCode] && logic[event.keyCode]({
        x: target.offsetLeft,
        y: target.offsetTop,
        target: target
    });
}

window.addEventListener('load', function() {
    var blocks = document.querySelectorAll('.block');
    var input;

    for(let i = 0; i < blocks.length; i++){
        input = document.createElement('input');
        input.type = 'radio';
        input.name = 'blocks';
        input.value = blocks[i].dataset.id;
        document.querySelector('.container').appendChild(input);

        input.addEventListener('change', function(ev) {
            target = document.querySelector('[data-id="'+this.value+'"]');
            removeAllMovers();
            setMover();
        })

        blocks[i].addEventListener('click', function() {
            target = this;
            removeAllMovers();
            setMover();
        });
    }
});