
let vikingPoints = 0;
let romePoints = 0;

displayVikingPoints()
displayRomeMaxPoints()

/*pistehaku*/

function displayVikingPoints() {
    vikingPoints = parseInt(localStorage.getItem('vikingQuizMaxPoints')) || 0;
    const vikingScoreTable = document.getElementById('viking_score');
    vikingScoreTable.innerText = vikingPoints;
}

function displayRomeMaxPoints() {
    romePoints = parseInt(localStorage.getItem('rome_points')) || 0;
    const romeScoreTable = document.getElementById('rome_score');
    romeScoreTable.innerText = romePoints;
}
/*pistehaku päättyy*/

