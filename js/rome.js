/*Kuvien raahaaminen ja pudottaminen*/
function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
/*päättyy*/

document.addEventListener('DOMContentLoaded', function() {
    let parent = document.getElementById('drag');
    let frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);

    document.querySelector('.reset').addEventListener('click', function() {
        window.location.reload();
    });
});


/*pisteenlasku*/

const maxScoreKey2 = 'rome_points';

function calculateScore() {
    let rome_points = 0;

    const pieces = document.querySelectorAll('.images');

    pieces.forEach(piece => {
        const pieceId = piece.id;
        const dropBox = document.querySelector(`.dropBox[data-box="${pieceId}"]`);
        if( piece.parentElement.getAttribute('data-box') === pieceId) {
            rome_points++;
        }
    });

    const scoreDisplay = document.getElementById('rome_points');
    scoreDisplay.textContent = `Pisteet: ${rome_points}`;

    localStorage.setItem(maxScoreKey2, rome_points)
}
/*pisteenlaku päättyy*/

