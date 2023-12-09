/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/
 
class User {
    constructor(name, surname,) {
        this.name = name;
        this.surname = surname;
    }
}
class PremiumUser extends User {
    constructor(name, surname, expiration) {
        super(name, surname);
        this.premiumExpiration = expiration;
    }
}
class RegularUser extends User {
 
}
function getAccountInfo(user) {
 
    if (user instanceof PremiumUser) {
        console.log(`Есть премиум аккаунт, срок действия ${user.premiumExpiration}`);
    } else { console.log('Нет премиум аккаунта') };
}
 
const user = new User('Иван', 'Иванов');
const userP = new PremiumUser('Петр', 'Петров', '20251212');
const userR = new RegularUser('Николай', 'Иванов');
 
getAccountInfo(user);
getAccountInfo(userP);
getAccountInfo(userR); 