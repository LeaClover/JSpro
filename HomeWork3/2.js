// 2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" 
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются 
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв 
// из localstorage и со страницы. 
// Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из 
// localstorage, так и со страницы.

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
        <h3 class="product_heading">${product}</h3><button class="product__button-show" type="button">Показать отзывы</button>
        <ul class="product__reviews" style="display: none;">
        </ul>
      </div>
      `;
      cont.insertAdjacentHTML('beforeend', cartEl);
      reviews.forEach(review => {
        const ul = document.querySelectorAll('.product__reviews');
        const liBlock = document.createElement('div')
        const li = document.createElement('li');
        const buttonDel = document.createElement('button');
        buttonDel.className = 'product__button-del';
        buttonDel.textContent = 'X';
        li.className = 'product__review';
        li.textContent = review.text;
        liBlock.appendChild(li);
        liBlock.appendChild(buttonDel);
        ul[ul.length-1].appendChild(liBlock);
      });
    });
    const buttons = document.querySelectorAll('.product__button-show');
    const btnDel = document.querySelectorAll('.product__button-del');

    buttons.forEach(button => {
        button.addEventListener('click', showRewies);
    });
    btnDel.forEach(btn => {
        btn.addEventListener('click', deleteReviewTarget);
    })
}

function showRewies(event) {
    // showCards(products.allProducts)
    const reviews = event.target.parentNode.querySelector('.product__reviews');
    const button = event.target;
    const actualDisplay = getComputedStyle(reviews).display;
    if (actualDisplay === 'none') {
        reviews.style.display = 'block';
        button.textContent = 'Скрыть отзывы'
    } else {
        reviews.style.display = 'none';
        button.textContent = 'Показать отзывы'
    }
}

// function addNewReview() {
//     const
// }

function deleteReviewTarget(event) {
     const trgt = event.target.parentNode.firstChild.textContent;
     products.deleteReview(trgt)
     showCards(products.allProducts)
}

class Products {
    #products = []
    constructor(productList) {
      this.#products = productList
    }
  
    get allProducts() {
      return this.#products;
    }
  
    addReview() {
        let idEl = this.findMaxID()
        const data = localStorage.getItem('product-data')
        let flag = false;
        if (data) {
            const parseLocalStor = JSON.parse(data);
            this.#products.forEach(({product, reviews}) => {
                if(product.includes(parseLocalStor.name)) {
                    flag = true
                    reviews.push({id: idEl, text: parseLocalStor.review}); 
                }
            });
            if(!flag) {
                this.#products.push({product: parseLocalStor.name, reviews: [{ id: idEl, text: parseLocalStor.review}]})
            }
        }
        localStorage.removeItem('product-data');
    }

    deleteReview(name) {
        this.#products.forEach(({product, reviews}) => {
            let index = this.#products.findIndex(prod => prod.product === product);
            let prompt = reviews
            let revIndex = prompt.findIndex(review => review.text === name)
            if(revIndex !== -1) {
                if(prompt.length === 1) {
                    this.#products.splice(index, 1);
                } else {
                    prompt.splice(revIndex, 1);
                }
            }
            showCards(products.allProducts)
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
products.addReview()
console.log(products.allProducts);
showCards(products.allProducts);

