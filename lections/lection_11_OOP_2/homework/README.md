# Изучить материал

https://learn.javascript.ru/browser-environment
https://learn.javascript.ru/dom-nodes
https://learn.javascript.ru/dom-console
https://learn.javascript.ru/searching-elements-dom
https://learn.javascript.ru/basic-dom-node-properties

# Практика

1) В документе мы имеем иерархию ul.root>li*3>ul>li*5 (emmet pattern https://docs.emmet.io/abbreviations/syntax/)
Написать скрипт, который добавит класс `last` всем последним li в группах (необходимо почитать метод document.querySelectorAll())

Написать функцию setFirstItemClassName(level), где level - это номер уровня вложености, в котором нужно произвести изменения. Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`

* при добавлении классов - должен имзенится цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды