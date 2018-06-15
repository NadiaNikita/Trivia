
   function Question(text, choices, anwser) {
        this.text = text;
        this.choices = choices;
        this.answer = anwser;
   }


Question.prototype.isCorrectAnwser= function(choice) {
    return this.answer === choice;

}