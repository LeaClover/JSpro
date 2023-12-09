/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/
class BankAccount {
    #balance = 0;
    // getBalance() {
    //    return this.#balance;
    // };
    get balance() {
        return this.#balance;
    }
    deposit(amount) {
        checkMoney(amount);
        this.#balance += amount;
 
    }
    withdraw(amount) {
        checkMoney(amount);
        if (amount > this.#balance) throw new Error("Средства не хватает");
        this.#balance -= amount;
    }
 
}
function checkMoney(money) {
    if (money < 0) throw new Error("Число не может быть отрицательным");
    if (!Number.isFinite(money)) throw new Error("Число должно быть нормальным");
    if (String(money).split('.')[1]?.length > 2) throw new Error("Дробная часть не корректная");
}
 
 
const account = new BankAccount();
 
// account.deposit(-1);
// account.deposit(NaN);
// account.deposit(45.566);
account.deposit(1001);
console.log(account.balance);
 
// account.withdraw(-1);
// account.withdraw(NaN);
// account.withdraw(45.566);
account.withdraw(34);
console.log(account.balance);
 