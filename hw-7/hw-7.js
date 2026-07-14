//задание №1
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);

//задание №2
function filterByPrefix(arr, prefix) {
  const lowerPrefix = prefix.toLowerCase();

  return arr.filter(str => {
    if (typeof str !== 'string') return false;
    return str.toLowerCase().startsWith(lowerPrefix);
  });
}

const words = ['Apple', 'apricot', 'Banana', 'avocado', 'Cherry', 'application'];
const result = filterByPrefix(words, 'ap');
console.log(result);

//задание №3
const num = 32.58884;

const floorValue = Math.floor(num);
const ceilValue = Math.ceil(num);
const roundValue = Math.round(num);

console.log('До меньшего целого:', floorValue);
console.log('До большего целого:', ceilValue);
console.log('До ближайшего целого:', roundValue)

//задание №4
const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers); // 21
const max = Math.max(...numbers); // 77

console.log('Минимальное значение:', min);
console.log('Максимальное значение:', max);

//задание №5
function printRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

printRandomNumber();

//задание №6
function generateRandomArray(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Аргумент должен быть неотрицательным целым числом');
  }

  const length = Math.floor(n / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (n + 1));
    result.push(randomNum);
  }

  return result;
}

console.log(generateRandomArray(10));
console.log(generateRandomArray(7));
console.log(generateRandomArray(1));

//задание №7
function getRandomInt(min, max) {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);

  if (lower > upper) {
    throw new Error('Минимальное значение не может быть больше максимального');
  }

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(-5, 5));
console.log(getRandomInt(7, 7));    


const now = new Date();
console.log(now);

//задание №9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log('Текущая дата:', currentDate.toLocaleDateString());
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());

//задание №10
function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Передан некорректный объект Date');
  }

  const monthsRu = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const daysRu = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = monthsRu[date.getMonth()];
  const year = date.getFullYear();
  const weekday = daysRu[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const currentDate = new Date();
console.log(formatDate(currentDate));