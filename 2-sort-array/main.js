'use strict';
var numbers = [3, 25, 12, 69, 63, 35, 51, 23, 54, 40, 45, 59, 28, 36, 60, 35, 18, 81, 64, 1, 35, 81, 16, 23, 5, 58, 18, 63, 45, 41];

var evenNumbers = []; //создаем новый пустой массив, куда положим все четные числа
for (var i = 0; i <= numbers.length; i++) { //перебираем  массив
    if ((numbers[i] % 2) == 0) { //проверяем на остаток от деления, если делится на 2 без остатка - значит четное
        evenNumbers.push( numbers[i] ); // помещаем результат проверки в массив
        evenNumbers.sort(); // сортируем по возрастанию
    }
}

var oddNumbers = []; //создаем новый пустой массив, куда положим все нечетные числа
for (var i = 0; i < numbers.length; i++) { //перебираем  массив
    if ((numbers[i] % 2) !== 0) { //проверяем на остаток от деления, если делится на 2 с остатком - значит нечетное
        oddNumbers.push( numbers[i] ); // помещаем результат проверки в массив
        oddNumbers.sort(compareReversed); // сортируем по убыванию
    }
}

function compareReversed(c, d) { //создадим функцию, которая отсортирует числа в массиве в обратном порядке
    return d - c;
}

console.log(evenNumbers); //проверяем, что приходит в массив в консоли
console.log(oddNumbers); //проверяем, что приходит в массив в консоли

function getEvenNumbers() { //создадим функцию, которая выведет массив evenNumbers в DOM-дерево
    var elem = document.getElementById('evenNumbers'); // выбираем элемент, в который хотим вывести массив
    elem.innerHTML = evenNumbers; // выводим в DOM массив четных чисел evenNumbers
}

function getOddNumbers() { //создадим функцию, которая выведет массив oddNumbers в DOM-дерево
    var elem = document.getElementById('oddNumbers'); // выбираем элемент, в который хотим вывести массив
    elem.innerHTML = oddNumbers; //выводим в DOM массив нечетных чисел oddNumbers
}

getEvenNumbers(); // выполним функцию
getOddNumbers(); // выполним функцию
