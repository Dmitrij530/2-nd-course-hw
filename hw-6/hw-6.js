//задание №1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break; 
  }
}

//задание №2
const number = [1, 5, 4, 10, 0, 3];
const index = number.indexOf(4);
console.log(index);

//задание №3
const ar = [1, 3, 5, 10, 20];
console.log(ar.join(' '));

//задание №4
const rows = 3;      
const cols = 3;        
const matrix = [];

for (let h = 0; h < rows; h++) {
  matrix[i] = [];            
  for (let j = 0; j < cols; j++) {
    matrix[h][j] = 1;    
  }
}
console.log(matrix);

//задание №5
const num = [1, 1, 1];
num.push(2, 2, 2);

console.log(num); 

//задание №6
const numbers = [9, 8, 7, 'a', 6, 5];

const filtered = numbers.filter(item => item !== 'a');
filtered.sort((a, b) => a - b);

console.log(filtered); 

//задание №7
const numbersSet = [9, 8, 7, 6, 5];

const userInput = prompt('Угадай число из массива [9, 8, 7, 6, 5]:');
const userNumber = Number(userInput);

if (numbersSet.includes(userNumber)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

//задание №8
const str = 'abcdef';

const reversed = str.split('').reverse().join('');

console.log(reversed);

//задание №9
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const merged = [...num1, ...num2];

console.log(merged); 

//задание №10
const setOffNum = [3, 7, 2, 9, 5]; 
let totalSum = 0;

for (let f = 0; f < arr.length - 1; f++) {
  const pairSum = setOffNum[f] + setOffNum[f + 1];     
  totalSum += pairSum;                      
  console.log(`Пара [${setOffNum[f]}, ${setOffNum[f + 1]}]: сумма = ${pairSum}`);
}

console.log('Общая сумма всех пар:', totalSum);

//задание №11
function getSquares(numbers) {
  return numbers.map(num => num * num);
}

const input = [1, 2, 3, 4, 5];
const result = getSquares(input);
console.log(result); 

//задание №12
function getWordLengths(words) {
  return words.map(word => word.length);
}

const input = ['кот', 'собака', 'черепаха', 'ёж'];
const result = getWordLengths(input);
console.log(result); 

//задание №13
function getNegativeNumbers(numbers) {
  return numbers.filter(num => num < 0);
}

const input = [3, -1, 0, -5, 7, -2, 10];
const result = getNegativeNumbers(input);
console.log(result); 

//задание №14
const originalArray = [];
for (let g = 0; g < 10; g++) {
  const randomNum = Math.floor(Math.random() * 11);
  originalArray.push(randomNum);
}

const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log('Исходный массив:', originalArray);
console.log('Массив с чётными значениями:', evenNumbers);

//задание №15
const massiv = [];
for (let s = 0; s < 6; s++) {
  const randomNum = Math.floor(Math.random() * 10) + 1; 
  massiv.push(randomNum);
}

const sum = massiv.reduce((acc, num) => acc + num, 0);

const average = sum / massiv.length;

console.log('Массив:', massiv);
console.log('Среднее арифметическое:', average);
