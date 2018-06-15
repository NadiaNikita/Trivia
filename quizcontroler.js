function Quiz(questions) {
    this.score = 0;
    this.questions=questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex= function() {
     return this.questionIndex[this.questionIndex];
}
Quiz.prototype.guess = function(answer) {
   if(this.getQuestionIndex().isCorrectAnwser(answer)) {
       this.score++;
   }
   this.getQuestionIndex++;
}
Quiz.prototype.isEnded = function()  {
    return this.questionIndex===this.questions.length;

}
