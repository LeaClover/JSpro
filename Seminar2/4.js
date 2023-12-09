/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/
 
const num = document.querySelector('.user-input');
const button = document.querySelector('.add-button');
const list = document.querySelector('.item-list');
const message = document.querySelector('.error-message');
button.addEventListener('click', addElement);
 
function addElement() {
    try {
        if (num.value.length >= 3 && num.value.length <= 10) {
            list.innerHTML += `<li>${num.value}</li>`;
        } else {
            throw new Error('Число не корректно');
        }
    } catch (error) {
        message.textContent = error.message;
    } finally {
        console.log('Попытка добавления элемента завершена');
    }
}
 
class Helper {
    static count = 0;
    static sayHello(name) {
        console.log(`Hello ${name}`);
        console.log(this);
        this.ttttt = name;
    }
    constructor() {
        Helper.count++;
    }
}
 
// console.log(Helper.ttttt);
// Helper.sayHello('Константин')
// console.log(Helper.ttttt);
const help = new Helper();
const help2 = new Helper();
// help.sayHello('Макс')
console.log(help.ttttt);
console.log(help);
// help.sayHello
 
console.log(Helper.count);