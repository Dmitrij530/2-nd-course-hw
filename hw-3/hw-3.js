let password = 'пароль';
let inputPass = (prompt("введите пароль"));
if (inputPass === password) {
    alert('Пароль введён верно');
} else {
    alert('Пароль введён неправильно');
}

//задание №2 
let c = 8;
if (c > 0 && c < 10) {
    console.log("верно")
}
else {
    console.log("неверно")
};

//задание №3
let d = 89;
let e = 120;
if (d > 100 || e > 100) {
    console.log("верно")
}
else {
    console.log("неверно")
};

//задание №4
let a = '2';
let b = '3';
alert(+a + +b);

//задание №5
let monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
    console.log("Ошибка");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
    }
}

//доп задание №1
let input = (prompt("Пожалуйста, введите любое число"));
let myNumber = Number(input);
if (isNaN(myNumber) || input === null || input === '') {
    alert("Ошибка: введено не число");
} else {
    if (myNumber % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

//доп задание №2,№3
let clientOS = 0; // 0 — iOS, 1 — Android
let clientDeviceYear = 2015;

if (clientOS === 0) {
    if (clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для iOS по ссылке");
    } else {
        console.log("Установите версию приложения для iOS по ссылке");
    }
} else if (clientOS === 1) {
    if (clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else {
        console.log("Установите версию приложения для Android по ссылке");
    }
}