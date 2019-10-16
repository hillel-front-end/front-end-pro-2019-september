# Изучить материал
+ https://drive.google.com/open?id=0B121aJ52ADuLRW5vblBwYnlROG8 (страницы 185-214)
+ http://learn.javascript.ru/function-declaration-expression
+ https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
+ https://myrusakov.ru/javascript-closures.html


# Практика


# Лекция

1) Адаптировать итератор из задания под такой функционал: `step(callback);`, где callback - функция с 1 аргументом.

        `var step = factory([2, 8, 9, 2, 4]);`

        step(sqr); // 4
        step(sqr); // 64
        step(sqr); // 81


        function sqr(x) {
            return x*x;
        }

2) Написать функцию `getMaxs(args)`, где args - любое количество массивов. Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель `, `.

  