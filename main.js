
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

const initialPage = document.querySelector("#initial");
const quizTestPage = document.querySelector("#quizTest");
const scoreDisplayPage = document.querySelector("#scoreDisplay");


const quesExtraDisp = document.querySelector("#quesExtraDisp");
const questionDisp = document.querySelector("#questionDisp");
const select1 = document.querySelector("#selection1");
const select2 = document.querySelector("#selection2");
const select3 = document.querySelector("#selection3");
const select4 = document.querySelector("#selection4");

const selectBox1 = document.querySelector("#boxCheckedBox1");
const selectBox2 = document.querySelector("#boxCheckedBox2");
const selectBox3 = document.querySelector("#boxCheckedBox3");
const selectBox4 = document.querySelector("#boxCheckedBox4");

const msgDis = document.querySelector("#msgDis");
const userScoreDis = document.querySelector("#userScore");

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
	nextQuestion();
	extraQuestionDisplay();
	initNext();
}

//
function ScorePage(e){
	countTimer = 0;
	initialPage.style.display = "none";
	quizTestPage.style.display = "none";
	scoreDisplayPage.style.display = "block";	
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
	quesExtraDisp.textContent = "";
	if(questionCount<9){		
		questionDisplay(seq[questionCount]);
		extraQuestionDisplay();
	}
	else{
		ScorePage();
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
	var answer = quizSelect().answer(seq[questionCount]);//retrieving the anwer
	console.log(answer);
	if(t === answer){
		// setTimeout("msgDis.innerHTML = 'Congratulations you are right!'",2000);
		msgDis.innerHTML = "Congratulations you are right!"
		userScore++;//increase the user score
		flag = 1;
	}
	else{
		// setTimeout("msgDis.innerHTML = 'Sorry your are wrong!'",2000);
		msgDis.innerHTML = "Sorry your are wrong!"
		countTimer = countTimer-10;//timer penalty
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

function extraQuestionDisplay(){
	var quizset = quizSetSelect.value.toLowerCase();
	console.log(quizset);
	switch(quizset){
		case "quiz set 1":
		if(seq[questionCount] === '1'){
			quesExtraDisp.textContent = quizSelect().special(0);
			console.log(quizSelect().special(0));
		}
		else if(seq[questionCount] === '5'){
			quesExtraDisp.textContent = quizSelect().special(1);
			console.log(quizSelect().special(1));
		}
		else if(seq[questionCount] === '6'){
			quesExtraDisp.textContent = quizSelect().special(2);
			console.log(quizSelect().special(2));
		}
		else if(seq[questionCount] === '8'){
			quesExtraDisp.textContent = quizSelect().special(3);
			console.log(quizSelect().special(3));
		}
		else if(seq[questionCount] === '9'){
			quesExtraDisp.textContent = quizSelect().special(4);
			console.log(quizSelect().special(4));
		}
		break;
	}
}

//try to expand the click area to span but failed

// function checkChecked(event){
// 	let eventT = event.target;
// 	console.log(eventT.tagName);
// 	console.log(eventT.classList);
// 	if(eventT.classList.contains("boxChecked")){
// 		switch(eventT.tagName.toLowerCase()){
// 			case "INPUT":
// 				console.log('hello');
// 				eventT.checked = true;
// 				break;
// 			case "SPAN":
// 				if(eventT.classList.contains("form-control")){
// 					eventT.siblings.elementChildren.elementChildren.checked = true;
// 				}
// 				else{
// 					eventT.parent.siblings.elementChildren.elementChildren.checked = true;
// 				}
// 		}
// 	}
// }

//main process
initPage();
var seq = random();//for randoming the question
var questionCount = 0;//for locating the question
var count = 1;//for that only one box could be checked
var tempCheck;
var userScore = 0;
var countTimer = 60;
//press the button to begin the test
btnStartQuiz.addEventListener("click", quizPage);

//next button
btnNextQuestion.addEventListener("click",function(e){
	if(countTimer>0 && questionCount<9){
		nextQuestion();
		extraQuestionDisplay();
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
	window.location.reload();//use reload to initialize the page
})

//answering the question
quizTestPage.addEventListener("click",function(e){	
	var boxClicked = e.target.id;
	if(countTimer>0 && questionCount<9){
		if(checkFourBox(e) && countTimer >10){
		checkBoxOne(e);		
		setTimeout("nextQuestion()",1000);	
		setTimeout("initNext()",1000);	
		checkScore(boxClicked);		
		}
		else if (checkFourBox(e) && countTimer <= 10){
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





