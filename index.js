// // 1) Задачка "угадай число"!
let guessNumber = () => {
  let number = Math.round(1 - 0.5 + Math.random() * (100 - 1 + 1));
  let userNumber = +prompt("Введите число от 1 до 100 включительн", "");
  if (number === userNumber) {
    alert("Поздравляю, попал");
  } else {
    alert(`Ты ошибся, было загадано число ${number} `);
  }
};
// guessNumber();

// // 2) Создать 20 случайных целых чисел и если они чётные, тогда записывать их в массив, который является полем объекта myObj.
let myObj = {
  arr: [],
};

for (let i = 0; i < 20; i++) {
  let number = (Math.random() * 100).toFixed(0);
  if (number % 2 === 0) {
    myObj.arr.push(number);
  }
}
console.log(myObj.arr);
// // 3) Проверить массив на повторения и вывести в консоль повторяющиеся элементы!

let a = [1, 2, 3, 4, 4, 4];
let repeated = (arr) => {
  let repeat = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !repeat.includes(arr[i])) {
        repeat.push(arr[i]);
      }
    }
  }
  return repeat;
};
console.log(repeated(a));

// // Дан текст. Вывести слова текста с количеством повторений в данном тексте.
let test =
  "Пошла Катя утром за грибами. Она взяла сестру Машу. Маша была мала. На пути была речка. Катя взяла сестру на руки и перешла речку. Катя любит свою сестру.";

let findeelement = (str) => {
  let ar = str.split(" ");
  let obj = {};
  ar.forEach((item) => (item in obj ? (obj[item] += 1) : (obj[item] = 1)));
  const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  console.log(entries);
};

findeelement(test);

// // Если слово в тексте используется только 1 раз - выводить в консоль "ваше слово" - не повторяется в тексте.
// // 1) Написать функцию, которая вычисляет квадратный корень числа, полученного методом Math.random().
let getSquare = () => {
  // return Math.random() ** (1 / 2);
  return Math.sqrt(Math.random());
};
console.log(getSquare());

// // 2) Написать функцию, которая генерирует дату рождения пользователя. Пример (12 октября, 2002 год). Месяц тоже должен выбираться случайно.
let birthday = () => {
  let a = Math.round(1 - 0.5 + Math.random() * (31 - 1 + 1));
  let mounth = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  let b = mounth[Math.round(0 - 0.5 + Math.random() * (12 - 0 + 1))];
  let c = Math.round(1920 - 0.5 + Math.random() * (2021 - 1920 + 1));
  let bes = `${a} ${b} ${c}`;
  return console.log(bes);
};
birthday();
// // 3) Придумать тест. Захардкодить вопросы. Сделать так, чтобы при каждом запуске программы, вопросы в тесте перемешивались

let quiz = () => {
  let questions = [
    "Какой самый короткий день года",
    "Сколько областей в Беларуси",
    "Сколько цветов у светофора",
  ];
  let index = Math.round(
    0 - 0.5 + Math.random() * (questions.length - 1 - 0 + 1)
  );
  return console.log(questions[index]);
};
quiz();
