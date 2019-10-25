var quizSet1 = {
	question:function questionSelect(num){
					var question = questionSet1[num];
					return question;
				},
	selection:function selectionSelect(num){
					var selection = selectionSet1[num];
					return selection;
				},
	answer:function answerSelect(num){
					var answer = answerSet1[num];
					return answer;
				},
	special:function special(num){
					var special = specialSet1[num];
					return special;					
	}
};

var quizSet2 = {
	question:function questionSelect(num){
					var question = questionSet2[num];
					return question;
				},
	selection:function selectionSelect(num){
					var selection = selectionSet2[num];
					return selection;
				},
	answer:function answerSelect(num){
					var answer = answerSet2[num];
					return answer;
				},
	special:function special(num){
					var special = specialSet2[num];
					return special;					
	}				
};

var quizSet3 = {
	question:function questionSelect(num){
					var question = questionSet3[num];
					return question;
				},
	selection:function selectionSelect(num){
					var selection = selectionSet3[num];
					return selection;
				},
	answer:function answerSelect(num){
					var answer = answerSet3[num];
					return answer;
				},
	special:function special(num){
					var special = specialSet3[num];
					return special;					
	}				
};

var quizSet4 = {
	question:function questionSelect(num){
					var question = questionSet4[num];
					return question;
				},
	selection:function selectionSelect(num){
					var selection = selectionSet4[num];
					return selection;
				},
	answer:function answerSelect(num){
					var answer = answerSet4[num];
					return answer;
				},
	special:function special(num){
					var special = specialSet4[num];
					return special;					
	}				
};

//for quiz set 1
var questionSet1 = [
						'What is the HTML tag under which one can write the JavaScript code?',
						'Choose the correct JavaScript syntax to change the content of the following HTML code.',
						'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
						'What is the correct syntax for referring to an external script called “geek.js”?',
						'The external JavaScript file must contain <script> tag. True or False?',
						'Predict the output of the following JavaScript code.',
						'Predict the output of the following JavaScript code.',
						'Which of the following is not a reserved word in JavaScript?',
						'Predict the output of the following JavaScript code.',
						'Predict the output of the following JavaScript code.'
];

var selectionSet1 = [
					'<javascript>','<scripted>','<script>','<js>',
					'document.getElement(“geek”).innerHTML=”I am a Geek”;','document.getElementById(“geek”).innerHTML=”I am a Geek”;','document.getId(“geek”)=”I am a Geek”;','document.getElementById(“geek”).innerHTML=I am a Geek;',
					'alertbox(“GeeksforGeeks”);','msg(“GeeksforGeeks”);','msgbox(“GeeksforGeeks”);','alert(“GeeksforGeeks”);',
					'<script src=”geek.js”>','<script href=”geek.js”>','<script ref=”geek.js”>','<script name=”geek.js”>',
					'True','False','Not Sure','Let Coins Decide',
					'16','Complilation Error','88','Run Time Error',
					'8','0','9','Error',
					'interface','throws','program','short',
					'sf','ks','s','k',
					'“30”','30','5*6','“5*6”'
];

var answerSet1 = [
					'c',
					'b',
					'd',
					'a',
					'b',
					'c',
					'a',
					'c',
					'c',
					'b'
];

//for quiz set 2
var questionSet2 = [
						'What is the syntax for creating a function in JavaScript named as Geekfunc?',
						'How is the function called in JavaScript?',
						'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?How to write an ‘if’ statement for executing some code.If “i” is NOT equal to 8?',
						'What is the correct syntax for adding comments in JavaScript?',
						'How to insert a multi-line comment in JavaScript?',//can rplace this one
						'What is the JavaScript syntax for printing values in Console?',
						'How to initialize an array in JavaScript?',
						'What will be the output of the following code?',
						'What will be the command to print the number of characters in the string “GeeksforGeeks”?',
						'What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?'
];

var selectionSet2 = [
					'function = Geekfunc()',' function Geekfunc()',' function := Geekfunc()','function : Geekfunc()',
					'call Geekfunc();','call function GeekFunc();','Geekfunc();','function Geekfunc();',
					'if(i<>5)','if i<>5','if(i!=5)','if i!=5',
					'<!–This is a comment–&gt','//This is a comment','–This is a comment','**This is a comment**',
					'<!–This is comment line 1<br>This is comment line 2–&gt','//This is comment line 1<br>This is comment line 2//',' /*This is comment line 1<br>This is comment line 2*/',' **This is comment line 1<br>This is comment line 2**',
					'print(5)',' console.log(5);',' console.print(5);','print.console(5);',
					'var Geeks= “Geek1”, “Geek2”, “Geek3”','var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)','var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)','var Geeks=[“Geek1”, “Geek2”, “Geek3”]',
					'float','number',' integer','double',
					'document.write(“GeeksforGeeks”.len);','document.write(sizeof(“GeeksforGeeks”));',' document.write(“GeeksforGeeks”.length);','document.write(lenof(“GeeksforGeeks”));',
					'strip()','trim()','stripped()','trimmed()'
];

var answerSet2 = [
					'b',
					'c',
					'c',
					'b',
					'c',
					'b',
					'd',
					'b',
					'c',
					'b'
];

//for quiz set 3
var questionSet3 = [
						'In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?',
						'Predict the output on the console for the following JavaScript code.',
						'Predict the output on the console for the following JavaScript code.',
						'Which of the following is an advantage of using JavaScript?',
						'Which function of an Array object calls a function for each element in the array?',
						'JavaScript is a ________ Side Scripting Language.',
						'Predict the output on the console for the following JavaScript code.',
						'JavaScript is ________ language.',
						'Predict the output of the following JavaScript Code.',
						'Which was the first browser to support JavaScript?'
];

var selectionSet3 = [
					'Integer(value)',' ifInteger(value)','isInteger(value)',' ifinteger(value)',
					'Compilation Error','My name is Geek. My favorite city is Geekistan.','My name is ${myName}.My favorite city is ${myCity}.','0',
					'string number','string string','null null','string integer',
					'Increased interactivity.',' Less server interaction.','Immediate feedback from the users.','All of the above.',
					'forEach()','every()',' forEvery()','each()',
					'Server','ISP',' Browser','None of the above',
					'Compilation Error','Nothing will be printed as output','5','Runtime error',
					'a compiled',' an interpreted','A and B','none of the above',
					'Nothing',' Compilation Error','Hello','<!–document.write(“Hello”);//–>',
					'Mozilla Firefox','Netscape','Google Chrome','IE'
];

var answerSet3 = [
					'c',
					'b',
					'a',
					'd',
					'a',
					'c',
					'c',
					'b',
					'c',
					'b'
];

//for quiz set 4
var questionSet4 = [
						'What is the HTML tag under which one can write the JavaScript code?',
						'Choose the correct JavaScript syntax to change the content of the following HTML code.',
						'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
						'What is the correct syntax for referring to an external script called “geek.js”?',
						'The external JavaScript file must contain <script> tag. True or False?',
						'Predict the output of the following JavaScript code.',
						'Predict the output of the following JavaScript code.',
						'Which of the following is not a reserved word in JavaScript?',
						'Predict the output of the following JavaScript code.',
						'Predict the output of the following JavaScript code.'
];

var selectionSet4 = [
					'<javascript>','<scripted>','<script>','<js>',
					'document.getElement(“geek”).innerHTML=”I am a Geek”;','document.getElementById(“geek”).innerHTML=”I am a Geek”;','document.getId(“geek”)=”I am a Geek”;','document.getElementById(“geek”).innerHTML=I am a Geek;',
					'alertbox(“GeeksforGeeks”);','msg(“GeeksforGeeks”);','msgbox(“GeeksforGeeks”);','alert(“GeeksforGeeks”);',
					'<script src=”geek.js”>','<script href=”geek.js”>','<script ref=”geek.js”>','<script name=”geek.js”>',
					'True','False','Not Sure','Let Coins Decide',
					'16','Complilation Error','88','Run Time Error',
					'8','0','9','Error',
					'interface','throws','program','short',
					'sf','ks','s','k',
					'“30”','30','5*6','“5*6”'
];

var answerSet4 = [
					'c',
					'b',
					'd',
					'a',
					'b',
					'c',
					'a',
					'c',
					'c',
					'b'
];

//for displaying codes in the question

var specialSet1 = [
				'<p id="geek">GeeksforGeeks</p> ',//2
				'<script type="text/javascript"><br>a = 8 + "8"; <br>document.write(a); <br></script>',//6
				'<script type="text/javascript"> <br>var a="GeeksforGeeks"; <br>var x=a.lastIndexOf("G"); <br>document.write(x); <br></script> ',//7
				'<script type="text/javascript" language="javascript"> <br>var a = "GeeksforGeeks"; <br>var result = a.substring(4, 5); <br>document.write(result); <br></script>',//9
				'<script type="text/javascript" language="javascript"> <br>var x=5; <br>var y=6; <br>var res=eval("x*y"); <br>document.write(res); <br></script>'//10
];

var specialSet2 = [
				'<p id="geek">GeeksforGeeks</p> ',
				'<script type="text/javascript"><br>a = 8 + "8"; <br>document.write(a); <br></script>',
				'<script type="text/javascript"> <br>var a="GeeksforGeeks"; <br>var x=a.lastIndexOf("G"); <br>document.write(x); <br></script> ',
				'<script type="text/javascript" language="javascript"> <br>var a = "GeeksforGeeks"; <br>var result = a.substring(4, 5); <br>document.write(result); <br></script>'
];

var specialSet3 = [
				'<p id="geek">GeeksforGeeks</p> ',
				'<script type="text/javascript"><br>a = 8 + "8"; <br>document.write(a); <br></script>',
				'<script type="text/javascript"> <br>var a="GeeksforGeeks"; <br>var x=a.lastIndexOf("G"); <br>document.write(x); <br></script> ',
				'<script type="text/javascript" language="javascript"> <br>var a = "GeeksforGeeks"; <br>var result = a.substring(4, 5); <br>document.write(result); <br></script>',
				'',
				'',
				'',
				'',
				'',
				'',
				''
];











