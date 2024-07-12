//Задание 
// Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
console.log("Задание 1");
const superLinkElement = document.getElementById("super_link");
console.log(superLinkElement);

// Задание 2
// Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка"
//console.log("Задание 2");
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach(link => {
    link.innerText = "ссылка";
});

// Задание 3
// Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body"
// и вывести полученную коллекцию в консоль.
console.log("Задание 3");
const cardLinksInCardBody = document.querySelectorAll(".card-body .card-link");
console.log(cardLinksInCardBody);

// Задание 4
//  Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50
// и вывести его в консоль.
console.log("Задание 4");
const elementWithDataNumber50 = document.querySelector("[data-number='50']");
console.log(elementWithDataNumber50);

// Задание 5
// Выведите содержимое тега title в консоль.
console.log("Задание 5");
const pageTitle = document.title;
console.log(pageTitle);

// Задание 6
// Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
console.log("Задание 6");
const cardTitleElement = document.querySelector(".card-title");
console.log(cardTitleElement.parentNode);

// Задание 7
// Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента,
// который имеет класс "card".
console.log("Задание 7");
const cardElement = document.querySelector('.card');
const newElement = document.createElement(`p`);
newElement.textContent = 'Привет';
cardElement.insertBefore(newElement, cardElement.firstChild);

// Задание 8
// Удалите тег h6 на странице.
 h6Element = document.querySelector("h6");
h6Element.remove();