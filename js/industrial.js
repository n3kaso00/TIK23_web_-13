const words = ['Rautatie', 'Rautatie', 'Höyrylaiva', 'Höyrylaiva', 'Kutomakone', 'Kutomakone', 'Tehdas', 'Tehdas', 'Höyrytraktori', 'Höyrytraktori', 'Paperikone', 'Paperikone', 'Lennätin', 'Lennätin', 'Höyrykone', 'Höyrykone']

var shuf_words = words.sort(() => (Math.random() > .5) ? 2 : -1);

var gameContainer = document.querySelector('.game');
var tries = 0;
var points = 0;



for ( var i = 0; i< words.length; i++){

    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_words[i]

    box.onclick = function() {
        this.classList.add('boxOpen')
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    if(document.querySelectorAll('.boxMatch').length == words.length){
                        alert('win')
                    }
                    
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        },500)
    }

let popup = document.getElementById("popup");

function openPopup(modal1){
    popup.classList.add("open-popup");
}

function closePopup(modal1){
    popup.classList.remove("open-popup");
}

function openPopup(modal2){
    popup.classList.add("open-popup");
}

function closePopup(modal2){
    popup.classList.remove("open-popup");
}

function openPopup(modal3){
    popup.classList.add("open-popup");
}

function closePopup(modal3){
    popup.classList.remove("open-popup");
}   

function openPopup(modal4){
    popup.classList.add("open-popup");
}

function closePopup(modal4){
    popup.classList.remove("open-popup");
}

function openPopup(modal5){
    popup.classList.add("open-popup");
}

function closePopup(modal5){
    popup.classList.remove("open-popup");
}

function openPopup(modal6){
    popup.classList.add("open-popup");
}

function closePopup(modal6){
    popup.classList.remove("open-popup");
}

function openPopup(modal7){
    popup.classList.add("open-popup");
}

function closePopup(modal7){
    popup.classList.remove("open-popup");
}

function openPopup(modal6){
    popup.classList.add("open-popup");
}

function closePopup(modal8){
    popup.classList.remove("open-popup");
}

    document.querySelector('.game').appendChild(box);

}


