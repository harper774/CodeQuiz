# CodeQuiz

This application is for the user to test their javascript basic language.

On the test begin page, the user could choose between three different quiz sets.

Then during the quiz, the user has 50 seconds to finish the quiz. If the user got the right answer, then he should be rewarded with extra score and there will be a victory sound playing; if the user got the wrong answer, then he should get punishment of decreasing timercount by 10s and there will be a punishing sound playing.

Also, there is a next button on each question display page, which could be used to skip to the next question. But by skipping the question, the user will also be punished with 10 seconds.

Then in the score submit page, the user can input his name and saved with his score to the local storage. It is stored in object and use stringify and parse for saving and getting the key-value pair.

THere is another page called view your highest scores. The local user data will be retrieved from the local storage. Then they will be displayed from the highest score to the lowest score. 

Hoswever, there is still a bug I have not fixed on the highest score page. When two users has the same score, then the user will not be changed. This is caused by my methods of displaying the scores in order but up untill now, I have not come up with a better idea. Still working on it.

