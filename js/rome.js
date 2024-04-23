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

let parent = document.getElementById('drag');
let frag = document.createDocumentFragment();
while (parent.children.lenght){
    frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.lenght)])
}
parent.appendChild(frag);

document.querySelector('.reset').addEventListener('click', function() {
    window.location.reload ()
});