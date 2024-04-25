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

    document.querySelector('.game').appendChild(box);

}

var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'block';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest('.modal').style.display = 'none';
    };
});

window.onclick = function(e){
    if(e.target.classList.constains('modal')){
        e.target.style.display = 'none';
    }
};


