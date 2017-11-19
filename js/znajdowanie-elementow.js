//wyszukiwanie elementow po id
var parFirst = document.getElementById('parFirst');
console.log(parFirst);

//wyszukiwaniepo klasie
var linki = document.getElementsByClassName('link');
console.log(linki);
console.log(linki[5]);

//wyszukiwanie po znaczniku
var paragraf = document.getElementsByTagName('p');
console.log(paragraf);


//po znaczniku css
var selector = document.querySelectorAll('#parFirst .link');
console.log(selector);

//pierwszy element
var selectorCss = document.querySelector('#parFirst .link');
console.log(selectorCss);