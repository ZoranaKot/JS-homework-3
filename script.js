//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

 /*const fruits = [
   { id: 0, name: "Apple" },
   { id: 1, name: "Tomat" },
   { id: 2, name: "Cherry" },
   { id: 3, name: "Orange" },
];
console.log(fruits);

let names = fruits.map((item) => item.name);
console.log(names); */

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

/* for (let a = 2; a < 10; a +=2){ 
    console.log(a);
} */

//  -- 3 --
//Замініть цикл "for" на "while"
 /*for (let i = 0; i < 5; i++) {
     console.log( `цифра ${i}!` );
   };*/

   /*let i = 0;
   while (i < 5){
    console.log( `цифра ${i}!` );
    i++;
   };*/

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній  //("" - порожній рядок).

/*let num //обовязково виносити спочатку, навіть якщо значення нема, бо не буде виконувати
do {
    num = prompt("Введіть число більше за 100");
}
while (num < 100 && num !=="" && num !==null);

if (num > 100) {
    alert("Дякую!");
};*/

//  -- 5 --
// Вирахуйте середній вік

/* const girls = [
   { age: 23, name: "Оля" },
   { age: 29, name: "Аня" },
   { age: 10, name: "Юля" },
   { age: 20, name: "Катя" },
 ];

 let ages = girls.map((item)=>item.age);
console.log(ages);

let sum = ages.reduce((summ, item) => summ + item) / ages.length
console.log(sum);*/


