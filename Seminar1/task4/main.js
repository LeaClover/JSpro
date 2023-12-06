/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/
const ivan = {
    name: "Иван",
 };
  
 const petya = {
    name: "Петя",
 };
 const alex = {
    name: "Алекс",
 };
  
 const lessonsTeacher = new Map();
 lessonsTeacher.set('JS', "Vasia");
 lessonsTeacher.set('Java', "Alex");
 lessonsTeacher.set('HTML', "Ivan");
  
 const studentLessons = new Map([
    [ivan, new Set(["JS", "HTML"])],
    [petya, new Set(["Java", "HTML"])],
    [alex, new Set(["JS", "HTML", "Java"])],
 ]);
  
 // Преподаватель по Математике: Смирнов.
 console.log(`Преподаватель по JS: ${lessonsTeacher.get("JS")}`);
 // Уроки Ивана: Математика, История.
 console.log(`Уроки Ивана: ${[...studentLessons.get(ivan)].join(', ')}`);