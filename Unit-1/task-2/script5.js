// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
// Пример: "Номер вашей карты: **********1245"

// let userCardNumber = prompt("Номер вашей карты?");
// console.log("Номер вашей карты: " + userCardNumber.replace(/\d(?=\d{4})/g, "*"));
// document.write("Номер вашей карты: " + userCardNumber.replace(/\d(?=\d{4})/g, "*"));


let name = "Altynbek Kasymov",
  mail = "altynbek.kasymov.sss@gmail.com";
document.write(
  `3. Hello world! My name is ${name} and my e'mail is ${mail} <br>`
);