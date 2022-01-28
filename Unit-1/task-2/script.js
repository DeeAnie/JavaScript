//1. Дана строка 'ddd@bbb@ccc'. Замените все **@** на **'!'**
let text = 'ddd@bbb@ccc',
    replaceText = text.replace(/@/gi, '!');
document.write((text) + "<br>" + (replaceText));
console.log(text);
console.log(replaceText);