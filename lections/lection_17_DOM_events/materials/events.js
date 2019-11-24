window.addEventListener('load', function(){

    var block = document.querySelector('.block');


    var a, b, l, t;
    block.addEventListener('mousedown', function(event){
        a = event.clientX;
        b = event.clientY;
        l = event.target.offsetLeft;
        t = event.target.offsetTop;

        document.addEventListener('mousemove', onMouseMove);
    });

    document.addEventListener('mouseup', onMouseUp)

    function onMouseMove(event) {
        var a_ = event.clientX;
        var b_ = event.clientY;

        var diffA = a_ - a;
        var diffB = b_ - b;

        block.style.left = l + diffA + 'px';
        block.style.top = t + diffB + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove); 
    }

})