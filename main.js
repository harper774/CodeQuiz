//


//Get the dom objects
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

const initialPage = document.querySelector("#initial");
const quizTestPage = document.querySelector("#quizTest");
const scoreDisplayPage = document.querySelector("#scoreDisplay");


const timerCount = document.querySelector("#timerCount");

const questionDisp = document.querySelector("#questionDisp");
const select1 = document.querySelector("#selection1");
const select2 = document.querySelector("#selection2");
const select3 = document.querySelector("#selection3");
const select4 = document.querySelector("#selection4");



//init
function initPage(e){
	initialPage.style.display = "block";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "none";	
}

//test page is for diaplaying questions
function quizPage(e){
	initialPage.style.display = "none";
	quizTestPage.style.display = "block";
	scoreDisplayPage.style.display = "none";
	timer();//start the timer
	questionDisplay(seq[questionCount]);
}

//
function ScoreDisplay(e){
	initialPage.style.display = "none";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "block";	
}

//fot timer to decrease with time
function timer(){
	var count = 60;
	setInterval(function(e){
		count--;
		if(count>=0){
			timerDisplay(count);
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
	var seq = ['0','1','2','3','4','5','6','7','8','9'];
	var temp = 0;//to store the temporay data
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
	var question = questionSet1[number];
	var selection = [
						selectionSet1[(number*4)],
						selectionSet1[(number*4+1)],
						selectionSet1[(number*4+2)],
						selectionSet1[(number*4+3)]
					];
	return{
		question:question,
		selection1:selection[0],
		selection2:selection[1],
		selection3:selection[2],
		selection4:selection[3]
	}
}

//main process
initPage();
var seq = random();
var questionCount = 0;
//press the button to begin the test
btnStartQuiz.addEventListener("click", quizPage);
//
btnNextQuestion.addEventListener("click",function(e){
	if(questionCount<9){
	questionCount++;
	questionDisplay(seq[questionCount]);
	}
	else{
		ScoreDisplay();
	}
});






