
let vikingPoints = 0;
let romePoints = 0;

displayVikingPoints()
displayRomeMaxPoints()


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


