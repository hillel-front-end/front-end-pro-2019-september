# Изучить материал
    + https://cli.vuejs.org/ru/guide/installation.html
    + https://ru.vuejs.org/v2/guide/single-file-components.html
    + https://ru.vuejs.org/v2/guide/components-props.html
    + https://ru.vuejs.org/v2/guide/components-custom-events.html
# Практика
    
1) Создать компоненту FormGenerator. Которая будет выдавать шаблон для ввода значений.
Пример использования: <FormGenerator :form="['input[type=text]', 'input[type=email]', 'input[type=button]', 'input[type=text]']">

2) Добавляем props с названием model <FormGenerator :form="['input[type=text]', 'input[type=email]', 'input[type=button]', 'input[type=text]']" :model="inputData">. В model свойство будет сохранятся результат введенных значений во все поля, которые генерируются.


# Лекция

1) Создать компоненту Modal. При использовании компоненты отображается белый блок по середине экрана размером 400 на 500 px. Задний фон всей страницы - тёмно серый. У модалки должна быть кнопка "Закрыть" - в виде крестика в правом верхнем углу.
Внутрь модалки мы можем передать любой контент через slots.
Появление модалки происходит через props. Название props-ы которая открывает модалку - visible.
Пример использования - `
<Modal visible="IsVisible">
    Inner Text 
    <button>CLick me</button>
</Modal>
`