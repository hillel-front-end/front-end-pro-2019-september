var counter = 1;
function onBlockCLickCounting() {
  counter++;

  console.log(counter);
}

function someHandlerClick() {
  document.querySelector(".container").innerHTML = counter;
}

// render list

var menu = [
  {
    title: "T1",
    action: 'copy'
  },
  {
    title: "T2",
    action: 'paste'
  },
  {
    title: "T3",
    action: 'remove'
  }
];

function copy(){
    console.log('copy');
}

function paste(){
    console.log('paste');
}

function remove(){
    console.log('remove');
}

function renderMenu(list) {
  var container = document.querySelector('.container');

  var ul = document.createElement('ul');

  for(let i = 0, li; i < list.length; i++){
    li = document.createElement('li');
    li.addEventListener('click', function(){
        // var action = window[list[i].action];
        // if (!action) {
        //     return;
        // }

        // action();

        //very good
        window[list[i].action] && window[list[i].action]();

        // bad
        // if(list[i].action === 'copy'){
        //     copy && copy();
        // }

        // if(list[i].action === 'paste'){
        //     paste();
        // }

        // if(list[i].action === 'remove'){
        //     remove();
        // }
    })
    li.innerHTML = list[i].title;
    ul.appendChild(li);
  }

  container.appendChild(ul)
}

function onLoad() {
  var block = document.querySelector(".block");
  var block2 = document.querySelector(".block.b2");

  block.addEventListener("click", onBlockCLickCounting);
  block2.addEventListener("click", someHandlerClick);

  renderMenu(menu);
}

window.addEventListener("load", onLoad);
