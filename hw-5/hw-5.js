//задание №1
function minNum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNum(8, 4));
console.log(minNum(6, 6));

//задание №2
function determinesParity(q) {
    if (q % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(determinesParity(2));
console.log(determinesParity(3));

//задание №3
function square(num) {
    const result = num * num;
    console.log(result);
}

square(4);
function square(num) {
    return num * num;
}

const result = square(5);
console.log(result);        

//задание №4
function askAge() {
   let howOld =  prompt('Сколько вам лет?');
   howOld = Number(howOld);
   if (howOld < 0) {
    alert('Вы ввели неправильное значение');
   }
   else if (howOld >= 0 && howOld <= 12) {
    alert('Привет, друг!');
   }
   else if (howOld >= 13) {
    alert('Добро пожаловать!');
   }
}

askAge();

//задание №5
function multiplyNumbers(f, g) {
    const num1 = Number(f);
    const num2 = Number(g);
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }
    return num1 * num2;
}

console.log(multiplyNumbers(1, 2));      
console.log(multiplyNumbers('3', '4'));  
console.log(multiplyNumbers(5, 'привет')); 

//задание №6 
function cubeNumber() {
    const input = prompt('Введите число:');

    if (isNaN(input) || input === '' || input === null) {
        const errorMessage = 'Переданный параметр не является числом';
        console.log(errorMessage);
        return errorMessage;
    }

    const number = Number(input);
    const cube = number ** 3;

    const resultMessage = `n в кубе равняется ${cube}`;
    console.log(resultMessage);
    return resultMessage;
}

function testCubeNumber(num) {
    if (isNaN(num) || num === '' || num === null) {
        const errorMessage = 'Переданный параметр не является числом';
        console.log(errorMessage);
        return errorMessage;
    }
    const number = Number(num);
    const cube = number ** 3;
    const resultMessage = `n в кубе равняется ${cube}`;
    console.log(resultMessage);
    return resultMessage;
}

console.log('=== ВЫЗОВ ФУНКЦИИ С ВВОДОМ ОТ ПОЛЬЗОВАТЕЛЯ ===');
const userResult = cubeNumber();
console.log('Результат интерактивного вызова:', userResult);
console.log('\n=== ПРОВЕРКА ФУНКЦИИ ЧИСЛАМИ ОТ 0 ДО 10 ===');
for (let i = 0; i <= 10; i++) {
    console.log(`Проверка для числа ${i}:`);
    const testResult = testCubeNumber(i);
    console.log('Результат тестового вызова:', testResult);
}

//задание №7
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

console.log('Круг 1:');
console.log('Площадь:', circle1.getArea().toFixed(2));    
console.log('Периметр:', circle1.getPerimeter().toFixed(2)); 
console.log('\nКруг 2:');
console.log('Площадь:', circle2.getArea().toFixed(2));     
console.log('Периметр:', circle2.getPerimeter().toFixed(2)); 