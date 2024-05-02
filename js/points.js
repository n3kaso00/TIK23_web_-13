
let vikingPoints = 0;
let romePoints = 0;
let industrialPoints = 0;

displayVikingPoints()
displayRomeMaxPoints()
displayIndustrialPoints()


function displayVikingPoints() {
    vikingPoints = parseInt(localStorage.getItem('vikingQuizMaxPoints'));
    const vikingScoreTable = document.getElementById('viking_score');
    vikingScoreTable.innerText = vikingPoints;
}

function displayRomeMaxPoints() {
    romePoints = parseInt(localStorage.getItem('rome_points')) ;
    const romeScoreTable = document.getElementById('rome_score');
    romeScoreTable.innerText = romePoints;
}

<<<<<<< HEAD
=======
function displayIndustrialPoints() {
    industrialPoints = parseInt(localStorage.getItem('industrial_points')) || 0;
    const industrialScoreTable = document.getElementById('industrial_score');
    industrialScoreTable.innerText = industrialPoints;
}

/*pistehaku päättyy*/
>>>>>>> c6da7d471db30e4db80aab424ed9cedb0b579430

