let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let w = window.innerWidth;
let h = window.innerHeight;
let errorCount = 0;

// The Riddler's Riddles
let myQuestions = [
{
    question: 'Riddle me this... I am as light as a feather, yet no one can hold me for long. What am I?',
    answer: 'breath'
},
{
    question: 'Riddle me this... I am not alive, but I grow; I do not have lungs, but I need air; I do not have a mouth, but water kills me. What am I?',
    answer: 'fire'
},
{
    question: 'Riddle me this... Where does today come BEFORE both yesterday and tomorrow?',
    answer: 'a dictionary'
},
{
    question: 'Riddle me this... I am something people love or hate. I change appearances and thoughts. If a person takes care of them self I will go up even higher. To some people, I will fool them. To others, I am a mystery. Some people might want to try and hide me but I will show. No matter how hard people try I will Never go down. What am I?',
    answer: 'age'
},
{
    question: 'Riddle me this... How do you make the number 7 even without addition, subtraction, multiplication, or division?',
    answer: 'remove the s'
}
];
//You Win/Lose Function
function next() {
    if(myQuestions.length < 1) {
        response = 'YOU WIN!    ...this time...';
        responseColor = 'limegreen';
        return;
    } else if(errorCount > 4) {
        response = 'HA, HA! YOU LOSE!!!';
        responseColor = 'red';
    }
    const randomIndex = Math.ceil(Math.random() * myQuestions.length - 1);
    return myQuestions[randomIndex];
}
   
//correct and incorrect conditions
function checkQuestion() {
    if(currentQuestion.answer === questionInput.value()) {
        myQuestions = myQuestions.filter(myQuestionsObj => {
            return currentQuestion.answer != myQuestionsObj.answer;
        });
        response = 'Lucky Guess... Next Riddle...';
        responseColor = 'limegreen';
        } else  
        {
            errorCount++;
            response = 'OOPS! How about another try?';
            responseColor = 'red';
            questionInput.value('');
        }
        currentQuestion = next();
        questionInput.value('');
        
        if(currentQuestion) {
            message = currentQuestion.question;
        }
}
// Give Answer Function
function hint() {
    response = 'HA, HA, HA! The answer is ' + currentQuestion.answer + '.';
    responseColor = 'white';
}
//next Question
currentQuestion = next();
let message = currentQuestion.question;
// Reset Wrong Answer Count
function resetCounter() {
    errorCount = 0;
}
// setup canvas
function setup() {
    createCanvas(w, h);
    heading = createElement('h1', ['Riddle Me This Quiz']);
    heading.position((w / 2) - 152, 50);
    questionInput = createInput('');
    questionInput.position((w / 2) - 160, 350);
    questionInput.size(320, 42);
    submitAnswerButton = createButton('Submit Answer');
    submitAnswerButton.size(320, 36);
    submitAnswerButton.mousePressed(checkQuestion)
    submitAnswerButton.position((w / 2) - 160, 410);
    showAnswerButton = createButton('Give Up?');
    showAnswerButton.size(320, 36);
    showAnswerButton.mousePressed(hint);
    showAnswerButton.position((w / 2) - 160, 500);
    resetButton = createButton('Restart Quiz');
    resetButton.size(320, 36);
    resetButton.position((w / 2) - 160, 650);
    resetButton.mousePressed(resetCounter);
}
//Draw
function draw() {
    background('indigo');
    fill('white');
    textSize(16);
    text('(Please use all LOWERCASE Characters)', (w / 2) - 150, 325);
    textSize(24);
    text(message, (w / 2) - 500, 125, 1000);
    fill(responseColor);
    text(response, (w / 2) - 160, 300);
    fill('limegreen');
    imageMode(CENTER);
    text('Incorrect Answers: ' + errorCount + '/5', (w / 2) - 125, 610, 250);
}



