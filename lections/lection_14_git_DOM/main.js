window.onload = function() {

    var block = document.querySelector('.block');

   

    function eventHandler(ev) {
        console.log(ev.type, ev);
        // this.onclick = null;
    }
    // DOM Level 0
    // 
    // block.onmouseover = eventHandler;
    // block.onmousemove = eventHandler;
    // block.onmouseout = eventHandler;

    // block.onmouseenter = eventHandler;
    // block.onmouseleave = eventHandler;

    // click
    // block.onclick = eventHandler;
    // block.onclick = function(){
    //     console.log('another one handler');
    // }
    // block.onmousedown = eventHandler;
    // block.onmouseup = eventHandler;
    // block.ondblclick = eventHandler;
    // block.oncontextmenu = eventHandler;

    var list = document.querySelectorAll('.list li');
    var counter;
    for(let i = 0; i < list.length; i++){
        counter = i + 1;
        list[i].dataset.id = counter;

        // list[i].onclick = function(){
        //     console.log(this, +this.dataset.id);
        //     // this.remove();
        // }

        list[i].addEventListener('click', function(ev){
            console.log(this, +this.dataset.id);
            // this.remove();
        })
    }


    // DOM Level 2

    // block.onclick = eventHandler;

    block.addEventListener('click', eventHandler);
    block.addEventListener('click', function(){
        console.log('another one')
    });


    // block.removeEventListener('click', eventHandler);

    console.dir(block);
}