//4.  Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
const souvenirWeight = 75,
    baubleWeight = 112;
let souvenirAmount = prompt("Cколько сувениров купили?"),
    baubleAmount = prompt("Cколько безделушек купили?");

let sum = (souvenirWeight * souvenirAmount + baubleWeight * baubleAmount);
let sumKg = sum / 1000;
alert("Oбщий вес посылки " + sum + "г" + " или " + sumKg + "кг");
document.write(`Oбщий вес посылки ${sum}г или ${sumKg}кг`);
console.log(`Oбщий вес посылки ${sum}г или ${sumKg}кг`);
