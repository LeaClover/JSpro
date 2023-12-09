"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function showCards(cartList) {
    const cont = document.querySelector('.conteiner');
    while (cont.firstChild) {
      cont.removeChild(cont.firstChild);
    }
    cartList.forEach(({product, reviews}) => {
      const cartEl = `
      <div class="product__cart">
        <h3 class="product__heading">${product}</h3>
        <ul class="product__reviews">
        </ul>
        <form class="product__form">
          <input class="product__input" type="text" placeholder="Оставить отзыв">
          <div class="product__error-message"></div>
          <button class="product__button" type="button">Отправить</button>
        </form>
      </div>
      `;
      cont.insertAdjacentHTML('beforeend', cartEl);
      reviews.forEach(review => {
        const ul = document.querySelectorAll('.product__reviews');
        const li = document.createElement('li');
        li.className = 'product__review';
        li.textContent = review.text;
        ul[ul.length-1].appendChild(li);
      });
    });
    const buttons = document.querySelectorAll('.product__button')

    buttons.forEach(button => {
    button.addEventListener('click', handleSubmit)
});
}

function handleSubmit(event) {
    const message = event.target.parentNode.querySelector('.product__error-message');
    try {
        event.preventDefault(); 
        // console.log(event.target.parentNode.parentNode.querySelector('input').value);
        if(event.target.parentNode.parentNode.querySelector('input').value.length < 50) {
            throw new Error('Отзыв должен быть не менее 50 символов')
        } else if (event.target.parentNode.parentNode.querySelector('input').value.length > 500) {
            throw new Error('Отзыв должен быть не более 500 символов')
        } else {
            products.addReview(event.target.parentNode.parentNode.querySelector('h3').textContent, 
                event.target.parentNode.parentNode.querySelector('input').value);
            showCards(products.allProducts);
            event.target.parentNode.parentNode.querySelector('input').value = '';
        }
    } catch(error) {
        message.textContent = error.message;
        message.style.color = 'red';
    }
}
  
class Products {
    #products = []
    constructor(productList) {
      this.#products = productList
    }
  
    get allProducts() {
      return this.#products;
    }
  
    addReview(name, review) {
        let idEl = this.findMaxID()
        this.#products.forEach(({product, reviews}) => {
            if(product.includes(name)) {
                // console.log(reviews);
                reviews.push({id: idEl, text: review}); ///
            }
        });
    }

    findMaxID() {
        let maxId = 0;
        this.#products.forEach(({product, reviews}) => {
            reviews.forEach(({id, text}) => {
                if(maxId < id) {
                    maxId = id;
                }
            });
        });
        return maxId + 1;
    }
}

const products = new Products(initialData);
showCards(products.allProducts);

