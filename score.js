const userScoreDisplay = document.querySelector("#userScoreDisplay");

function getScores(){
	// var storage = window.localStorage;
	// for(let i = 0 ; i < storage.length; i++){
	// 	console.log(storage.key(i));
	// }
	var nameGet = JSON.parse(localStorage.getItem("name"));
	var scoreGet = JSON.parse(localStorage.getItem("score"));

	for(var i = 0; i<nameGet.length; i++){
	var nameli = document.createElement("li");
	var scoreli = document.createElement("li");

	nameli.textContent = nameGet[i];
	scoreli.textContent = scoreGet[i];

	userScoreDisplay.appendChild(nameli);
    userScoreDisplay.appendChild(scoreli);
    }
}

getScores();