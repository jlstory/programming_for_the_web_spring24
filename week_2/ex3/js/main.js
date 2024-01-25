const myQuestions = [
{
    question: 'Riddle me this... I am as light as a feather, yet no one can hold me for long. What am I?',
    answer: 'Breath'
},
{
    question: 'Riddle me this... I am not alive, but I grow; I do not have lungs, but I need air; I do not have a mouth, but water kills me. What am I?',
    answer: 'Fire'
},
{
    question: 'Riddle me this... Where does today come BEFORE both yesterday and tomorrow?',
    answer: 'In a Dictionary'
},
{
    question: 'Riddle me this... I am something people love or hate. I change appearances and thoughts. If a person takes care of them self I will go up even higher. To some people, I will fool them. To others, I am a mystery. Some people might want to try and hide me but I will show. No matter how hard people try I will Never go down. What am I?',
    answer: 'Age'
},
{
    question: 'Riddle me this... How do you make the number 7 even without addition, subtraction, multiplication, or division?',
    answer: 'Remove the "S"'
}
];

const randomQuestion = (Math.floor(Math.random() * myQuestions.length)); 
console.log(myQuestions[randomQuestion].question);

const input = window.prompt(myQuestions[randomQuestion].question);

const ans = window.alert('Your answer was ' + input + '. The correct answer is ' + myQuestions[randomQuestion].answer +'.');
