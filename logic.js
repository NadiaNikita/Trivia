function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;
    

    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i< choices.lenght; i++) {
        var element=document.getElementById("choice"+i);
        element.innerHTML=choices[i];
        guess("btn"+i, choices[i]);
    }
    showProgress();
    }

};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }

};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1 ;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of"+ quiz.questions.lenght;
};

function showScores() {
vargameOverHTML = "<h1>Result</1>";
gameoverHTML += "<h2 id='score'> Your scores:"+quiz.showScore+"</h2>";
var element = getElementById ("quiz");
element.innerHTML = gameOverHTML;
}


var questions = [
    new Question("Which language apart from English is an official language of Canada?",["French","Chinese","Spanish","Hindi"],"French"),
    new Question("Okinawa is a volcano in which country?",["North Korea","South Korea","Japan","Indonesia"],"Japan"),
    new Question("What is the largest country in South America?",["Bolivia","Brazil","Colombia","Chile"],"Brazil"),
    new Question("Which US state is famous for Disneyland and the film industry?",["Florida","Washington","New York","California"],"California"),
    new Question("Ottawa is which country's capital?",["Canada","US","Ukraine","England"],"Canada")

];

var quiz = new Quiz(questions);

populate();

