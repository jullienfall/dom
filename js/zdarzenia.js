document.addEventListener('DOMContentLoaded', function(){
// nazwa funkcji, odpalana przy danym zdarzeniu
    changeColor();
    hoverLinks();
    resizePage();
    wcisnijPodnies();
    zmienBackground();
    wypiszZInputa();
})

window.addEventListener('resize', function(){
    resizePage();
})

window.addEventListener('scroll', function(){
    
})



function changeColor() {
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].style.color = 'red';
    }
}

function hoverLinks() {
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].style.transition = 'all 0.4s';
        
        linki[i].addEventListener('mouseover', function() {
            this.style.color = 'blue';
        })
      
         linki[i].addEventListener('mouseout', function() {
            this.style.color = 'red';
        })
        
        linki[i].addEventListener('click', function(e) {
            e.preventDefault;
            this.style.fontSize = '25px';
        })
    }
}

function resizePage() {
   if (window.outerWidth < 768) {
       document.body.style.backgroundColor = 'black';
   } else {
       document.body.style.backgroundColor = 'initial';
   }
}

function wcisnijPodnies() {
    var inputs = document.querySelectorAll('#form input');
 
    for (var i=0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function(){
            this.style.background = 'green';            
         })
         inputs[i].addEventListener('keyup', function(){
            this.style.background = 'initial'; 
         })
    }
}

function zmienBackground() {
    document.body.addEventListener('touchmove', function(){
        this.style.background = 'pink';
    })
}

function wypiszZInputa() {
    var input = document.querySelectorAll('#form input');
    for(var i=0; i<input.length; i++) {
        input[i].addEventListener('change', function(){
            console.log(this.value);
        })
    }
}


function wypiszDoKonsoli() {
    console.log('123');
}
var form = document.getElementById('form');
form.addEventListener('click', wypiszDoKonsoli);
form.removeEventListener('click', wypiszDoKonsoli);


var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    console.log(e.type);
    e.stopPropagation();
})

document.body.addEventListener('click', function() {
    console.log('kliknieto body');
})

document.querySelector('button').addEventListener('click', function(e) {
    console.log('kliknales przycisk');
    e.stopPropagation();
})

document.body.addEventListener('click', function() {
    console.log('kliknieto body');
})




