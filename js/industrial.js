
// Define an array of words
const words = ['Rautatie', 'Rautatie', 'Höyrylaiva', 'Höyrylaiva', 'Kutomakone', 'Kutomakone', 'Tehdas', 'Tehdas', 'Höyrytraktori', 'Höyrytraktori', 'Paperikone', 'Paperikone', 'Lennätin', 'Lennätin', 'Höyrykone', 'Höyrykone']


// Shuffle the words randomly
var shuf_words = words.sort(() => (Math.random() > .5) ? 2 : -1);


// Select the container for the game
var gameContainer = document.querySelector('.game');

// Initialize variables for tracking points
var industrial_points = 0;

// Loop through each word
for ( var i = 0; i< words.length; i++){

    // Create a div element for each word
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_words[i]

    // Add click event listener to each word
    box.onclick = function() {


        // Add a class to visually indicate that the word is clicked
        this.classList.add('boxOpen')
        
        // Check for matching pairs after a short delay
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                
                // If two words are opened, check if they match
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){

                    // Increment points and update the display
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    const maxScoreKey2 = 'industrial_points';

                    industrial_points++,
                    updatePoints();

                    localStorage.setItem(maxScoreKey2, industrial_points)

                    // Remove the 'boxOpen' class from matched words
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    // If all words are matched, show a winning alert
                    if(document.querySelectorAll('.boxMatch').length == words.length){
                        alert('Voitit pelin! Pisteesi: ' + points)
                    }
                    
                } else {

                    // If the words don't match, remove the 'boxOpen' class
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        },500)
    }

    // Function to update the display of points
    function updatePoints() {
        document.getElementById('pointsDisplay').innerHTML = 'Pisteesi: ' + industrial_points;
    }

    // Append the word div to the game container
    document.querySelector('.game').appendChild(box);

}

// Select all elements with the class 'modal-open' and add click event listeners
var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
    btn.onclick = function(){

        // Get the ID of the modal to open
        var modal = btn.getAttribute('data-modal');

        // Display the modal
        document.getElementById(modal).style.display = 'block';
    };
});


// Select all elements with the class 'modal-Open' and add click event listeners
var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        // Find the closest modal and hide it
        var modal = btn.closest('.modal').style.display = 'none';
    };
});

// Add a click event listener to the window to close modals when clicked outside
window.onclick = function(e){
    if(e.target.classList.contains('modal')){
        e.target.style.display = 'none';
    }
};




