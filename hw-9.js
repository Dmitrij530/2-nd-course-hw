function playGamesOne() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let guessNum = prompt('Угадай число от 1 до 100');
        if (guessNum === null) {
            alert('Игра окончена');
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

//игра №3
function generateTask() {
    const operators = ['+', '-', '*', '/'];
    const opIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[opIndex];

    let a, b;

    if (operator === '/') {
        b = Math.floor(Math.random() * 9) + 1;
        const multiplier = Math.floor(Math.random() * 10) + 1;
        a = b * multiplier;
    } else {
        a = Math.floor(Math.random() * 20) + 1;
        b = Math.floor(Math.random() * 20) + 1;
    }

    return { a, b, operator };
}

function calculateResult(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return null;
    }
}

function playGamesFree() {
    let keepPlaying = true;
    let correctCount = 0;
    let totalCount = 0;

    while (keepPlaying) {
        const { a, b, operator } = generateTask();
        const correctAnswer = calculateResult(a, b, operator);

        const userInput = prompt(`Реши пример: ${a} ${operator} ${b}`);

        if (userInput === null) {
            console.log('Игра завершена.');
            alert(`Всего решено: ${totalCount}, верно: ${correctCount}`);
            keepPlaying = false;
            break;
        }

        const userAnswer = Number(userInput);

        if (Number.isNaN(userAnswer)) {
            alert('Пожалуйста, введите число.');
            continue;
        }

        totalCount++;

        if (userAnswer === correctAnswer) {
            correctCount++;
            alert('Верно! Молодец!');
        } else {
            alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
        }
    }
}

//игра №4
function reverseText(text) {
    return text
        .split('')
        .reverse()
        .join('');
}

function playGamesFo() {
    while (true) {
        const userInput = prompt('Введите текст, который нужно перевернуть (или нажмите Отмена, чтобы выйти):');

        if (userInput === null) {
            console.log('Игра завершена.');
            alert('До свидания!');
            break;
        }

        if (userInput.trim() === '') {
            alert('Вы не ввели текст. Попробуйте ещё раз.');
            continue;
        }

        const reversed = reverseText(userInput);
        alert(`Перевёрнутый текст: ${reversed}`);
    }
}

//игра №5
function playGamesFive() {
const options = ["камень", "ножницы", "бумага"];

let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

if (!options.includes(userChoice)) {
  alert("Неверный ввод! Пожалуйста, выберите: камень, ножницы или бумага.");
} else {
  const computerIndex = Math.floor(Math.random() * options.length);
  const computerChoice = options[computerIndex];

  let result;

  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы победили!";
  } else {
    result = "Компьютер победил!";
  }

  console.log(`Ваш выбор: ${userChoice}`);
  console.log(`Выбор компьютера: ${computerChoice}`);
  console.log(result);

  alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
}
}