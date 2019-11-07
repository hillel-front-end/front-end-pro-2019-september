/*

+ Глобальные обьекты Window, Document, Navigator, Location
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className

*/
    

window.onload = function() {
    // document.getElementById('form')
    // document.getElementsByClassName('example');
    var block = document.querySelector('#form');
    var blocks = document.querySelectorAll('.example');
    // if(!block) {
    //     return;
    // }
    // block && block.classList.add('fofo-bar');
    block.style.backgroundColor = 'rgb('+getRand(0, 255)+', '+getRand(0, 255)+', '+getRand(0, 255)+')';
    console.dir(block)
    console.log(blocks)

    for(var i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = 'rgb('+getRand(0, 255)+', '+getRand(0, 255)+', '+getRand(0, 255)+')';
    }
}

function getRand(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}
