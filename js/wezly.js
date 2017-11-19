var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

// zwroci element rodzica
console.log(pierwszyDiv.parentElement);

// zwroci wezle rodzica
console.log(pierwszyDiv.parentNode);

//tablica wezlow dzieci
console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[0]);

//tylko dzieci - bez 'text'
console.log(pierwszyDiv.children);

console.log(pierwszyDiv.lastChild);
console.log(pierwszyDiv.firstChild);

//kolejny i poprzedni elementy rodzenstwa
var link = document.getElementById('id-for-link');
console.log(link.nextSibling);
console.log(link.previousSibling);

