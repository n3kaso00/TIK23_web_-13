
let vikingPoints = 0;
let romePoints = 0;
let industrialPoints = 0;

displayVikingPoints()
displayRomeMaxPoints()
displayIndustrialPoints()


function displayVikingPoints() {
    vikingPoints = parseInt(localStorage.getItem('vikingQuizMaxPoints')) || 0;
    const vikingScoreTable = document.getElementById('viking_score');
    vikingScoreTable.innerText = vikingPoints;
}

function displayRomeMaxPoints() {
    romePoints = parseInt(localStorage.getItem('rome_points')) || 0 ;
    const romeScoreTable = document.getElementById('rome_score');
    romeScoreTable.innerText = romePoints;
}

function displayIndustrialPoints() {
    industrialPoints = parseInt(localStorage.getItem('industrial_points')) || 0;
    const industrialScoreTable = document.getElementById('industrial_score');
    industrialScoreTable.innerText = industrialPoints;
}

/*pistehaku päättyy*/

