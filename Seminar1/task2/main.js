/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/

// Список книг:
const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
 ];
 // const iterator = books[Symbol.iterator]()
 // console.log(iterator.next());
 // console.log(iterator.next());
 // console.log(iterator.next());
 // console.log(iterator.next());
  
 const library = {
    books,
    // [Symbol.iterator] () {
    //    let index = 0;
    //    return {
    //       next: () => {
    //          if (index < this.books.length) {
    //             return {
    //                value: this.books[index++],
    //                done: false
    //             }
    //          }
    //          return {
    //             done: true
    //          }
    //       }
    //    };
    // }
    *[Symbol.iterator] () {
       for (let i = 0; i < this.books.length; i++) {
          yield this.books[i];
       }
    }
 };
  
 for (const book of library) {
    console.log(book);
 }
 