// let 
// const

// const PI = Math.PI;
// console.log(PI);


// Math
// let myFloat = 4.23244;
// let mySecondFloat = 5.23345342444;
// console.log(myFloat + mySecondFloat);


// let myFloat = 4.9;
// let rounded =  Math.ceil(myFloat);  // Потолог. Возвращает наименьшее целое число, большее или равное своему числовому аргументу.
// console.log(rounded); // => 5;

// let myFloat = 4.9;
// let rounded =  Math.floor(myFloat);  // Пол . Возвращает наибольшее целое число, меньшее или равное его числовому аргументу.
// console.log(rounded); // => 4;

// let myFloat = 4.454353453453;
// let rounded =  Math.round(myFloat);  // Возвращает числовое выражение, округленное до ближайшего целого числа. Если выше 5 - ceil, если меньше - floor
// console.log(rounded); // => 4;

// let myFloat = 4.454353453453;
// let rounded = Math.trunc(myFloat);  // Возвращает интегральную часть числового выражения x, удаляя все дробные цифры. Если x уже является целым числом, результатом будет x.
// console.log(rounded); // => 4;


// let myFloat = -5765656;
// let rounded = Math.abs(myFloat);  // Возвращает абсолютное значение числа (значение без учета того, является ли оно положительным или отрицательным). Например, абсолютное значение -5 равно абсолютному значению 5.
// console.log(rounded); // => 4;


// console.log(Math.max(1, 34, 454, -5657)); // Возвращает большее из набора числовых выражений.


// console.log(Math.min(1, 34, 454, -5657)); // Возвращает меньшее из множества числовых выражений.


// console.log(Math.pow(2, 4)); // Возвращает значение базового выражения, возведенного в степень.


// console.log(Math.random()); // Возвращает псевдослучайное число в диапазоне от 0 до 1.


// let myRandom = Math.floor(Math.random() * 10 + 1);
// console.log(myRandom); // Возвращает псевдослучайное число в диапазоне от 0 до 1.


// console.log(Math.sqrt(25));  // => 5;  // Возвращает квадратный корень из числа.



// String
//  let str = "\"It's great.\" he said."
// console.log(str);

// let str = "\"It's great.\" \n he said."  // Перевод строки
// console.log(str);


// let str = "mir"; 
// console.log(str[0]);
// console.log(str[str.length -1]); //var 1

// let lastSymbol = str[str.length -1] // var 2
// console.log(lastSymbol); 


// let firstName = "Jonh";
// let secondName = "Depp";
// let fullName = firstName.concat(' ', secondName) // => Jonh Depp

// console.log(firstName.repeat(2))  // =>JonhJonh;

// let sentence = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты."
// let word = "стране";
// console.log(sentence.includes(word));


// let sentence = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты."
// let word = "state";
// console.log(sentence.replace("стране", word));


// let sentence = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты."
// console.log(sentence.slice(5, 15));
// console.log(sentence.substring(5, 15));


// let firstName = "jonh";
// let firstChar = firstName[0].toUpperCase();
// let theRest = firstName.slice(1)
// let formattedFirstName = firstChar + theRest;
// console.log(formattedFirstName);

// let firstName = "JONH";
// let formattedFirstName = firstName.toLowerCase();
// console.log(formattedFirstName);


// let firstName = "    Jonh   ";
// let formattedFirstName = firstName.trim(); //Удаляет из строки ведущие и последующие пробелы и символы терминатора строки.
// console.log(formattedFirstName);


// let userName = "di";
// let message = `Hello, ${userName}`;
// console.log(message);


// let friends = ["jonh", "vasya", "marry"];
// friends.push("pete"); // Добавляет новые элементы в конец массива и возвращает новую длину массива.
// console.log(friends);
// friends.pop(); // Удаляет последний элемент из массива и возвращает его. Если массив пуст, возвращается undefined, и массив не изменяется.
// console.log(friends);














