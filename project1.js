
var readlineSync = require("readline-sync");
 var score = 0;
console.log("                            WELCOME TO IN QUIZ GAME  ")
 var userName = readlineSync.question("what's your name ? :");
console.log("                          Hello "+ userName+" Welcome");
console.log( " ")
console.log(" ")
console.log(" There are 5 questions in this game, each question is of 2 marks and if wrong, one  number will be decrease from it, so play carefully.")
console.log("")
console.log(" ")
  console.log(" let's see how much you know about general knowledge");
  var questions = [{question: "Who invented Computer? :-",
  answer: "Charles Babbage"},
  {question: "what is full form of OTP?:- ",
  answer: "One time possword" } , 
  {
   question: "Name the National fruit of India?:- ",
  answer: "Mango"
}, {
  question: "Name the national flower of India? :- ",
  answer: "Lotus"
},
{
  question: "what is full form of IT  :-",
  answer: "Information Technology"
}]
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) { 
    console.log("ohhh..you are right! ");
    score = score + 2;
  } else {
    console.log("sorry your ans is wrong! PLAY CEARFULLY");
    score=score-1;
  }
  console.log("your score: ", score);
}

  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }

function first() 
  
{ console.log(" ")
  console.log("YOUR TOTALE SCORE  10 / ", score);

}
first();
console.log(" ")
console.log(" ")
console.log( "                            THANKS FOR PLAYING")

