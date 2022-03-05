// 1) Написать функцию, которая выводит все чётные числа от 0 до 100.
getNumbers = (min, max) => {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 !== 0) continue;
    numbers.push(i);
  }
  return numbers;
};
console.log(getNumbers(0, 100));
// 2) Написать функцию, которая выводит все числа кратные 4-ём от 0 до 100.
getNumber4 = (min4, max4) => {
  let numbers4 = [];
  for (let j = min4; j <= max4; j++) {
    if (j % 4 !== 0) continue;
    numbers4.push(j);
  }
  return numbers4;
};
console.log(getNumber4(0, 100));

// 3) Написать функцию, которая реверсирует порядок элементов массива, не используя вообще никаких методов массива.
reverse = (arr) => {
  newarr = [];
  for (let item = 0; item < arr.length; item++) {
    newarr[arr.length - item - 1] = arr[item];
  }
  return newarr;
};
let a = [1, 2, 3, 4, 5];
console.log(reverse(a));
// 4) Написать функцию, которая принимает пустой объект, в своём теле она заполняет объект информацией и возвращает полученный объект. Функция должна быть чистой!
let EmptyObj = (obj) => {
  (obj.name = "Катя"), (obj.age = 13);
};
// 5) Найти сумму первых 10 цифр числа - 3710728753390210279879799822083759024651013574025046376937677490009712648124896970078050417018260538743249861995247410594742333043
let number1 = 3710728753390210279879799822083759024651013574025046376937677490009712648124896970078050417018260538743249861995247410594742333043;
let number2 = String(number1);
number2 = number2.substr(0, 11);
let number3 = +number2 * 1e9;
let number4 = String(number3).split("");
console.log(number4);
let number5 = number4.map((item) => +item);
let result = number5.reduce((sum, current) => sum + current);
console.log(result);

// 6) Найти количество цифр 2, используемых в массиве: [235432, 56564, 223521, 10, 0 ,0 ,3413, 1232, 987122, 243, 6,5,4, 213,6,78,1,2,3,5].
const num = [
  235432, 56564, 223521, 10, 0, 0, 3413, 1232, 987122, 243, 6, 5, 4, 213, 6, 78,
  1, 2, 3, 5,
];

function colonOdd(num) {
  let str = num.toString();
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 2) {
      result++;
    }
  }
  return result;
}
console.log(colonOdd(num));
// Поменять чётные и нечетные буквы в слове -  "Разработчик"  местами.
let b = "Разработчик";
function changePlace(word) {
  let result1 = [];
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result1.push(i - 1);
    } else {
      result1.push(i + 1);
    }
  }

  return result1.join("");
}
console.log(changePlace(b));
// 1) Посчитать количество букв - "з", использущихся в массиве.

// 2) Вычислить факториал числа 20922789888000.
let o = 10;
function factoriaa(p) {
  return p != 1 ? p * factoriaa(p - 1) : 1;
}
alert(factoriaa(o));
// 3) Написать фунцию, которая решает квадратное уравнение.
// ПРИМЕЧАНИЕ: не пренебрегайте частью уравнения после равно.
// 1) Вывести на экран все элементы массива, являющиеся простыми числами.
let m = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 23, 45, 67, 88];

function getSimple(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let arrSimple = [];

  for (let r = sortArr[0]; r <= sortArr[sortArr.length - 1]; r++) {
    for (let w = sortArr[0]; w < sortArr[sortArr.length - 1]; w++) {
      if (r % w == 0);
      arrSimple.push[r];
    }
  }
  return arrSimple;
}
console.log(getSimple(m));
