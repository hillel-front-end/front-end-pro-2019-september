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

function renderMenu(list) {
  var container = document.querySelector('.container');

  var ul = document.createElement('ul');

  for(var i = 0, li; i < list.length; i++){
    li = document.createElement('li');
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
