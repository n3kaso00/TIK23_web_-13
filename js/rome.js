let parent = document.getElementById('drag');
let frag = document.createDocumentFragment();
while (parent.children.lenght){
    frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.lenght)])
}
parent.appendChild(frag);

document.querySelector('.reset').addEventListener('click', function() {
    window.location.reload ()
});