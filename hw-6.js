function playGamesOne() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  while(true) {
    let guessNum = prompt('Угадай число от 1 до 100');
     if (guessNum === null) {
      alert ('Игра окончена');
      break;
    }
    guessNum = Number(guessNum);
    if (guessNum === randomNumber) {
        alert('ты угадал число');
        break;
    }
    else if (guessNum > randomNumber) {
        alert('твое число больше загаданного');
    }
    else {
        alert('твое число меньше загаданного');
    }
  }
}

//игра №2
function playGamesTwo() {
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let correctCount = 0;
let isGameFinished = true; 

for (let i = 0; i < quiz.length; i++) {
    const questionText = quiz[i].question + "\n" + quiz[i].options.join("\n");
    const userAnswer = prompt(questionText);
    if (userAnswer === null) {
        alert("Игра окончена.");
        isGameFinished = false; 
        break; 
    }
    if (parseInt(userAnswer) === quiz[i].correctAnswer) {
        correctCount++;
    }
}
if (isGameFinished) {
    alert("Игра окончена! Ваше количество правильных ответов: " + correctCount + " из " + quiz.length);
}
}