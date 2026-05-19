//задание №1
let hi = 0;
while (hi < 2) {
    console.log("Привет");
    hi++;
}

//задание №2
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

//задание №3
let a = 7;
while (a <= 22) {
    console.log(a);
    a++;
}

//задание №4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//задание №5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
console.log("Результат:", n);
console.log("Итераций:", num);

//задание №6
const friday = 5;
const totalDays = 31;
for (let day = friday; day <= totalDays; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}


//Доп задания:
//задание №1
let k = 100;
let interations = 0;
while (k >= 0) {
    k -= 7;
    interations++;
}
console.log("Результат:", k);
console.log("Интераций:", interations);

//задание №2
const months = [
    "Январь", "Февраль", "Март", "Апрель",
    "Май", "Июнь", "Июль", "Август",
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
let c = 0;
while (c < months.length) {
    console.log(`${c + 1}-й месяц: ${months[c]}`);
    c++;
}

//задание №3
const description = {
название: "Ведьмак",
автор: "Анджей Сапковский",
год: 1993,
жанр: "фэнтези"
};
for (let key in description) {
    console.log(`${key}: ${description[key]}`);
}
