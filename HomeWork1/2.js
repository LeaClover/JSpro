"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.ordersList = [];
    // this.ordersMap = new Map();
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor() {
    this.chefs = new Map();
    this.chefs.set("Пицца", "Олег");
    this.chefs.set("Суши", "Андрей");
    this.chefs.set("Десерт", "Анна");
  }

  newOrder(client, ...orders) {
    // const pizza = { name: "Пицца"};
    // const sushi = { name: "Суши" };
    // const desert = { name: "Десерт" }   

    const menu = new Map([
      ["Пицца", new Set(["Маргарита", "Пепперони", "Три сыра"])],
      ["Суши", new Set(["Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки"])],
      ["Десерт", new Set(["Тирамису", "Чизкейк"])]
    ]);

    console.log(`Клиент ${client.firstname} ${client.lastname} заказал:`);

    let clientOrders = new Map();
    let flag = true;
    let prompt = [];

    if (client.orders) {
      clientOrders = client.ordersMap;
    }

    orders.forEach(order => {
      const { name, quantity, type } = order;
      const chef = this.chefs.get(type);

      if (chef) {
        if ([...menu.get(type)].includes(name)) {
          if (client.ordersList.some(o => o.name === name)) {
            prompt.push({
              type: type, 
              name: name, 
              chef: chef,
              quantity: client.ordersList.find(order => order.name === name).quantity + quantity
            });
            let index = client.ordersList.indexOf(name);
            client.ordersList.splice(index, 1);
          } else {
            prompt.push({
              type, name, chef, quantity
            });
          }
        } else {
          flag = false;
          console.log(`Блюдо "${name}" не существует.`);
          prompt.splice(0, prompt.length);
        }
      } 
    });
    if (flag) {
      client.ordersList = client.ordersList.concat(prompt);
      client.ordersList.forEach(ord => {
        console.log(`${ord.type} "${ord.name}" - ${ord.quantity}; готовит повар ${ord.chef}`);
      });
    } else {
      prompt.splice(0, prompt.length);
    }
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"), 
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);


// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel, 
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.