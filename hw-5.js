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