// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле 
// для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не 
// так, необходимо выводить ошибку пользователю.

const form = document.querySelector('.product__form')
const button = document.querySelector('.product__button');
const inputName = document.querySelector('.product__input-name');
const inputReview = document.querySelector('.product__input-review');
const errorP = document.querySelector('.product__error');
const key = 'product-data'

button.addEventListener('click', handleSubmit)

function handleSubmit(event) {
    try {
        event.preventDefault(); 
        if(inputName.value < 1 || inputReview.value < 1) {
            throw new Error('Оба поля ввода должны быть заполнены!!!')
        } else {
            errorP.textContent = '';
            console.log(JSON.stringify({ name: inputName.value, review: inputReview.value }));
            localStorage.setItem(key, JSON.stringify({ name: inputName.value, review: inputReview.value }));
        }
    } catch (error) {
        errorP.textContent = error.message;
        errorP.style.color = 'red';
    }
}