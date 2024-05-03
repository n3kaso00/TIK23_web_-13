
let vikingPoints = 0;
let romePoints = 0;
let industrialPoints = 0;
let middleagePoints = 0;
let egyptPoints = 0;


displayVikingPoints()
displayRomeMaxPoints()
displayIndustrialPoints()
displayMiddleagePoints()
displayEgyptPoints()
displayTotalPoints()


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


function displayMiddleagePoints() {
    middleagePoints = parseInt(localStorage.getItem('middleage_points')) || 0;
    const middleageScoreTable = document.getElementById('middleage_score');
    middleageScoreTable.innerText = middleagePoints;
}

/*yhteispisteet*/

function displayTotalPoints() {
    const totalPoints = vikingPoints + romePoints + industrialPoints + middleagePoints || 0;
    const totalScoreTable = document.getElementById('total_score');
    totalScoreTable.innerText = totalPoints;
}

/*yhteispisteet päättyy*/

/*pistehaku päättyy*/