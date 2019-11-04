//Get the dom objects
const timerCount = document.querySelector("#timerCount");

const ifQuizSet1 = document.querySelector("#quizSet1");
const ifQuizSet2 = document.querySelector("#quizSet2");
const ifQuizSet3 = document.querySelector("#quizSet3");
const ifQuizSet4 = document.querySelector("#quizSet4");
const quizSetSelect = document.querySelector("#quizSetSelect");

const ifStartQuiz = document.querySelector("#startYourQuiz");
const ifViewHighScores = document.querySelector("#viewHighScores");
const ifContactMe = document.querySelector("#contactMe");

const btnStartQuiz = document.querySelector("#startQuiz");
const btnNextQuestion = document.querySelector("#nextQuestion");
const btnReStartQuiz = document.querySelector("#reStartQuiz");
const btnSubmit = document.querySelector("#saveScore");
const btnClear = document.querySelector("#clear");

const cardHeader = document.querySelector(".card-header");
const initialPage = document.querySelector("#initial");
const quizTestPage = document.querySelector("#quizTest");
const scoreDisplayPage = document.querySelector("#scoreDisplay");

const userName = document.querySelector("#nameUser");
const userScoreDisplay = document.querySelector("#userScoreDisplay");
const highscoreDisp = document.querySelector("#highscoreDisp");
const contactPageDisp = document.querySelector("#contactPage");

// const quesExtraDisp = document.querySelector("#quesExtraDisp");
const questionDisp = document.querySelector("#questionDisp");
const select1 = document.querySelector("#selection1");
const select2 = document.querySelector("#selection2");
const select3 = document.querySelector("#selection3");
const select4 = document.querySelector("#selection4");

const selectBox1 = document.querySelector("#boxCheckedBox1");
const selectBox2 = document.querySelector("#boxCheckedBox2");
const selectBox3 = document.querySelector("#boxCheckedBox3");
const selectBox4 = document.querySelector("#boxCheckedBox4");

const submitMsg = document.querySelector("#displayMsg");
const msgDis = document.querySelector("#msgDis");
const userScoreDis = document.querySelector("#userScore");

//init
function initPage(e){
	// timerDisplay(countTimer);
	highscoreDisp.style.display = "none";
	contactPageDisp.style.display = "none";
	initialPage.style.display = "block";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "none";	
}

//test page is for diaplaying questions
function quizPage(e){
	highscoreDisp.style.display = "none";
	contactPageDisp.style.display = "none";
	initialPage.style.display = "none";
	quizTestPage.style.display = "block";
	scoreDisplayPage.style.display = "none";
	timer();//start the timer
	nextQuestion();
	initNext();
}

//
function ScorePage(e){
	highscoreDisp.style.display = "none";
	contactPageDisp.style.display = "none";
	countTimer = 0;
	initialPage.style.display = "none";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "block";	
	setTimeout(userName.focus(), 50);//doesnot work
}

function highscorePage(){
	highscoreDisp.style.display = "block";
	contactPageDisp.style.display = "none";
	initialPage.style.display = "none";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "none";	
}

function contactPage(){
	highscoreDisp.style.display = "none";
	contactPageDisp.style.display = "block";
	initialPage.style.display = "none";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "none";	
}

//fot timer to decrease with time//why timer could not be terminated?
function timer(){
	setInterval(function(e){
		countTimer--;
		if(countTimer>=0){
			timerDisplay(countTimer);
		}
	},1000);
}

//for timer display
function timerDisplay(count){
	timerCount.textContent = count;
}

function questionDisplay(seq){
	questionDisp.textContent = questionSelect(seq).question;
	select1.textContent = questionSelect(seq).selection1;
	select2.textContent = questionSelect(seq).selection2;
	select3.textContent = questionSelect(seq).selection3;
	select4.textContent = questionSelect(seq).selection4;
}

function random() {
	var seq = ['0','1','2','3','4'];
	var temp = 0;
	var j= 0;

    for (var i = seq.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
	}
	return seq;	
}

function questionSelect(number){
	var question = quizSelect().question(number);
	var selection = [
		quizSelect().selection((number*4)),
		quizSelect().selection((number*4+1)),
		quizSelect().selection((number*4+2)),
		quizSelect().selection((number*4+3))
					];
	return{
		question:question,
		selection1:selection[0],
		selection2:selection[1],
		selection3:selection[2],
		selection4:selection[3]
	}
}

//this is to make sure that only one box could be ticked
//at one time
//check if the id of last event equals to this one
//if not, then this one = true, last one = false
//if the same, then this one = false
//record everytime's event target's id
function checkBoxOne(e){
	if(count){
		tempCheck = e.target.id;;
		count = 0;
	}
	else{
		if(e.target.id !== tempCheck){
			document.getElementById(tempCheck).checked = false;
			e.target.checked = true;
			tempCheck = e.target.id;
		}
		else{
			document.getElementById(tempCheck).checked = false;
			tempCheck = e.target.id;
		}
	}
}

function nextQuestion(){
	// quesExtraDisp.textContent = "";
	if(questionCount<5){	
		// countTimer -= 10;	
		questionDisplay(seq[questionCount]);
		// extraQuestionDisplay();
	}
	else if (questionCount === 5){
		if(userScore === 0){
			userScoreDis.innerHTML = 0;
			ScorePage();
			timerDisplay(0);
		}else{
			userScore = userScore + countTimer;
			userScoreDis.innerHTML = userScore;
			ScorePage();
			timerDisplay(0);
		}
	}
	questionCount++;
}

function initNext(){
	msgDis.innerHTML = "";
	selectBox1.checked = false;
	selectBox2.checked = false;
	selectBox3.checked = false;
	selectBox4.checked = false;
	tempCheck = "";
	count = 1;
}

function checkABCD(boxId){
	var k;

	console.log(boxId);
	switch (boxId){
		case "boxcheckedbox1":
			k = "a";
			break;
		case "boxcheckedbox2":
			k = "b";
			break;
		case "boxcheckedbox3":
			k = "c";
			break;
		case "boxcheckedbox4":
			k = "d";
			break;
	}
	return k;
}

function checkScore(boxId){
	
	boxId = boxId.toLowerCase();
	var t = checkABCD(boxId);
	var flag = 0;
	console.log(t);
	var answer = quizSelect().answer(seq[questionCount-1]);//retrieving the anwer
	console.log(answer);
	if(t === answer){
		// setTimeout("msgDis.innerHTML = 'Congratulations you are right!'",2000);
		msgDis.innerHTML = "Congratulations you are right!"
		userScore++;//increase the user score
		document.querySelector("#correctSound").play();
		flag = 1;
	}
	else{
		// setTimeout("msgDis.innerHTML = 'Sorry your are wrong!'",2000);
		msgDis.innerHTML = "Sorry your are wrong!"
		countTimer = countTimer-10;//timer penalty
		document.querySelector("#inCorrectSound").play();
		flag = 0;
	}
	// return userScore;
	return flag;
}

function checkFourBox(e){
	var check;
	if(e.target.id === "boxCheckedBox1"){
		check = true;
	}
	else if(e.target.id === "boxCheckedBox2"){
		check = true;
	}
	else if(e.target.id === "boxCheckedBox3"){
		check = true;
	}
	else if(e.target.id === "boxCheckedBox4"){
		check = true;
	}
	else{
		check = false;
	}
	return check;
}

function quizSelect(){
	var t = quizSetSelect.value.toLowerCase();
	var select;
	switch(t){
		case "quiz set 1":
		select = quizSet1;//choose the object
		break;
		case "quiz set 2":
		select = quizSet2;
		break;
		case "quiz set 3":
		select = quizSet3;
		break;
		case "quiz set 4":
		select = quizSet4;
		break;
	}
	return select;
}

//this is to be used by hightolow to sort the score array
function sortNum(a, b){
	return b - a;
}

//this is to be used by hightolow to get the index of the array
function indexValue(arr1, a){
	for(var i = 0; i<arr1.length; i++){
		if(arr1[i] === a){
			return i;
		}
	}
}

//this is to sort the scores from high to low
function highToLow(){
	var nameGet = JSON.parse(localStorage.getItem("name"));
	var scoreGet = JSON.parse(localStorage.getItem("score"));
	var scoreGet3 = JSON.parse(localStorage.getItem("score"));
	var temp = [];

	if(scoreGet !== null && nameGet !== null){
		scoreGet2 = scoreGet.sort(sortNum);
		for (var i = 0; i<nameGet.length; i++){

			var j = indexValue(scoreGet3, scoreGet2[i]);
			temp[i] = nameGet[j];
		}
	}

	return {
		nameGet:temp,
		scoreGet:scoreGet
	}
}

function submitScore(){
	var nameGet = JSON.parse(localStorage.getItem("name"));
	var scoreGet = JSON.parse(localStorage.getItem("score"));
	if(nameGet !== null){
		var length = nameGet.length;
		nameGet[length] = userName.value.trim();
		scoreGet[length] = userScore;
	}else{
		nameGet = [];
		scoreGet = [];
		nameGet[0] = userName.value.trim();
		scoreGet[0] = userScore;		
	}
	localStorage.setItem("name",JSON.stringify(nameGet));
	localStorage.setItem("score",JSON.stringify(scoreGet));
	userName.value = "";
	submitMsg.textContent = "You have successfully submitted the scores!"
}

function getScores(){
	// var storage = window.localStorage;
	// for(let i = 0 ; i < storage.length; i++){
	// 	console.log(storage.key(i));
	// }
	var nameGet = highToLow().nameGet;
	var scoreGet = highToLow().scoreGet;
	var lis = document.getElementsByTagName("li").length;
	
	// for (var i = 0; i<lis+1; i++){
	// 	console.log(userScoreDisplay.firstChild);
	// 	userScoreDisplay.removeChild(userScoreDisplay.firstChild);
	// }
	userScoreDisplay.innerHTML = '';
	
	if(nameGet !== null){
		for(var i = 0; i<nameGet.length; i++){
			var nameli = document.createElement("li");
			// var scoreli = document.createElement("li");

			nameli.textContent = nameGet[i]+' '+scoreGet[i];
			// scoreli.textContent = scoreGet[i];

			userScoreDisplay.appendChild(nameli);
			// userScoreDisplay.appendChild(scoreli);
		}
	}
}

//main process
initPage();
var seq = random();//for randoming the question
var questionCount = 0;//for locating the question
var count = 1;//for that only one box could be checked
var tempCheck;
var userScore = 0;
var countTimer = 50;

//press the button to begin the test
btnStartQuiz.addEventListener("click", quizPage);

//next button
btnNextQuestion.addEventListener("click",function(e){
	countTimer -= 10;
	if(countTimer>0 && questionCount<9){
		nextQuestion();
		// extraQuestionDisplay();
		initNext();
	}
	else{
		userScoreDis.innerHTML = userScore;
		ScorePage();
		timerDisplay(0);
	}
});

//restart quiz button
btnReStartQuiz.addEventListener("click",function(e){
	location.reload();//use reload to initialize the page
});

//submit the score to local storage
btnSubmit.addEventListener("click",submitScore);

//clear button
btnClear.addEventListener("click",function(){
	userScoreDisplay.innerHTML = "";
	localStorage.clear();
});

cardHeader.addEventListener("click",function(e){
	console.log(e.target.getAttribute('id'));
	var event = e.target;
	var eventID = e.target.getAttribute('id');
	if(event.tagName === "BUTTON"){
		if(eventID === "startYourQuiz"){
			location.reload();
		}
		else if (eventID === "viewHighScores"){
			getScores();
			highscorePage();
		}
		else if (eventID === "contactMe"){
			contactPage();
		}
	}
});

// //displaying high score page
// ifViewHighScores.addEventListener("click",function(e){
// 	console.log(event.target);
// 	// e.preventDefault();
// 	highscorePage();
// });

// //displaying contact page
// ifContactMe.addEventListener("click",function(e){
// 	console.log(event.target);
// 	// e.preventDefault();
// 	contactPage();
// });

// //display the main page
// ifStartQuiz.addEventListener("click",function(e){
// 	console.log(event.target);
// 	// e.preventDefault();
// 	initPage();
// });

//answering the question
quizTestPage.addEventListener("click",function(e){	
	var boxClicked = e.target.id;
	if(countTimer>10 && questionCount<6){
		if(checkFourBox(e) && countTimer >10){
		checkBoxOne(e);		
		setTimeout("nextQuestion()",1000);	
		setTimeout("initNext()",1000);	
		checkScore(boxClicked);		
		}
		else if (countTimer <= 10){
			var flag = checkScore(boxClicked);
			if(flag){
				checkBoxOne(e);		
				setTimeout("nextQuestion()",1000);	
				setTimeout("initNext()",1000);	
				checkScore(boxClicked);	
			}
			else{
				checkBoxOne(e);	
				checkScore(boxClicked);
				userScoreDis.innerHTML = userScore;
				ScorePage();
				timerDisplay(0);
			}
		}
	}
	else{
		userScoreDis.innerHTML = userScore;
		ScorePage();
		timerDisplay(0);
	}	
});

