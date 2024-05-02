
let vikingPoints = 0;
let romePoints = 0;
let industrialPoints = 0;
let middleagePoints = 0;


displayVikingPoints()
displayRomeMaxPoints()
displayIndustrialPoints()
displayMiddleagePoints()


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

<<<<<<< HEAD

=======
function displayMiddleagePoints() {
    middleagePoints = parseInt(localStorage.getItem('middleage_points')) || 0;
    const middleageScoreTable = document.getElementById('middleage_score');
    middleageScoreTable.innerText = middleagePoints;
}
>>>>>>> 5114ba13a095571f8f4e42b6d23f8be2882ce0fb

/*pistehaku päättyy*/