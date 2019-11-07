/*
    + Глобальные обьекты Window, Document, Navigator, Location
    + JS обращение в html
    + html коллекция
    + html элемент
    + Обьекты classList, className
*/

window.onload = function() {

    var form = document.querySelector('#form');

    // form.classList.add('Kofaret');

    // form.setAttribute('fofo-baba', 'tata-dodo');
    // form.removeAttribute('fofo-baba');

    // form.remove();


    // setInterval(function() {
    //     form.classList.toggle('example-fofo');
    //     // psyh();
    // }, 2000);
}

function psyh() {
    var blocks = document.querySelectorAll('.example');

    for(var i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = 'rgb('+getRand(0, 255)+', '+getRand(0, 255)+', '+getRand(0, 255)+')';
    }
}

function getRand(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function toggleFormClass() {
    document
        .querySelector('#form')
        .classList
        .toggle('active');
}
