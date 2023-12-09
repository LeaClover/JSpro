/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/
 
const num = document.querySelector('.number-input')
const button = document.querySelector('.check-button')
const message = document.querySelector('.message')
 
button.addEventListener('click', () => {
    /* if (!Number.isFinite(+num.value)) {
        message.textContent = 'Введено не корректное число'
    } */
    try {
        if (!Number.isFinite(+num.value)) throw new Error('Введено не корректное число')
    } catch (error) {
        message.textContent = error.message;
    } finally {
        console.log('Код завершен');
    }
})