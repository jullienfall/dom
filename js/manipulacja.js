console.log(document.getElementById('header').innerHTML);

// za pomoca innerHTML mozemy zamieniac znaczniki
document.getElementById('header').innerHTML = '<p class="nowa_klasa">jakis tekst</p>';

var new_par = document.querySelector('#header p');
console.log(new_par.className);

//inner text - tylko tekst
new_par.innerText = '<span>jakis konkretny tekst</span>';

//outer - zamienia cialy element

document.getElementById('header').outerHTML = '<div id="header">ss</div>';

// set/get klasy - za pomoca .className
document.getElementById('header').className = 'nowa_klasa nowa-klasa2';
document.getElementById('header').id = 'header2';

var linki = document.getElementsByClassName('link');
console.log(linki);
linki[2].href = 'http://google.com';

for(var i=0; i<linki.length; i++) {
    linki[i].style.color = 'red';
}