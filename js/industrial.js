const words = ['Rautatie', 'Rautatie', 'Höyrylaiva', 'Höyrylaiva', 'Kutomakone', 'Kutomakone', 'Tehdas', 'Tehdas', 'Höyrytraktori', 'Höyrytraktori', 'Paperikone', 'Paperikone', 'Lennätin', 'Lennätin', 'Höyrykone', 'Höyrykone']

var shuf_words = words.sort(() => (Math.random() > .5) ? 2 : -1);

var gameContainer = document.querySelector('.game');

for ( var i = 0; i< words.length; i++){

    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_words[i]
    document.querySelector('.game').appendChild(box);

}


