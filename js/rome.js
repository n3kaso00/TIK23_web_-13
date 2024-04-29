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




function calculateScore() {
    let score = 0;

    const pieces = document.querySelectorAll('.images');

    pieces.forEach(piece => {
        const pieceId = piece.id;
        const dropBox = document.querySelector(`.dropBox[data-box="${pieceId}"]`);
        if( piece.parentElement.getAttribute('data-box') === pieceId) {
            score++;
        }
    });

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Pisteet: ${score}`;
}