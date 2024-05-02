
const maxScoreKey = 'vikingQuizMaxPoints';


function displayMaxPoints() {
    const maxPoints = parseInt(localStorage.getItem(maxScoreKey)) || 0;
    const vikingScoreTable = document.getElementById('viking_score');
    vikingScoreTable.innerText = maxPoints;
}


window.onload = displayMaxPoints;
