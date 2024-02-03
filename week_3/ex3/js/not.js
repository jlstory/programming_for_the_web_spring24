  let questionInput;
  let currentQuestion;
  let response;
  let responseColor = 'pink';
  let heading;
  let incorrectCount = 0;
  let incorrectResponse = 'Incorrect: 0';
  // statement questions and answers
  const statementDefault = [
    {
        question: "How many legs does a spider have?",
        answer: 'eight'
    }, 
    {
        question: 'Which ocean is off the California coast?',
        answer: 'pacific'
    },
    {
        question: 'How many continents are there in the world?',
        answer: 'seven'
    },
    {
        question: 'What do caterpillars turn into?',
        answer: 'butterflies'
    },
    {
        question: 'What is the color of a school bus?',
        answer: 'yellow'
    },
    {
        question: 'How many pairs of wings do bees have?',
        answer: 'two'
    },
    {
        question: 'What do bees make?',
        answer: 'honey'
    },
    {
        question: 'How many sides does a triangle have?',
        answer: 'three'
    } 
  ];

  let statements = statementDefault;

  function next() {
    if(statements.length < 1) {
        alert('YOU WON!!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() *
    statements.length - 1);
    return statements[randomIndex];
  }

  function checkQuestion () {
    if (currentQuestion.answer === questionInput.value ()) {
        // remove correct answer from array 
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // this is the correct condition
        response = 'Correct! Next Question..';
        responseColor = 'green';
    } else {
        // this is the wrong answer condition 

        // add an incorrect count
        incorrectCount += 1;
        incorrectResponse = `Incorrect: ${incorrectCount}`

        if (incorrectCount >= 5) {
            response = 'You Lost!';
            responseColor = 'red';
        } else {
            response = 'oops, that was not quite right! Try again!';
            responseColor = 'red';
        }
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
  }

  currentQuestion = next();
  let message = currentQuestion.question;

  function restart() {
    statements = statementDefault;
    incorrectCount = 0;
    incorrectResponse = 'Incorrect: 0';
    response = '';
    currentQuestion = next();
    message = currentQuestion.question;
    questionInput.value('');
  }

  function setup() {
    createCanvas(1420,1000);
    // heading 
    heading = createElement('h1', ['Trivia Questions']);
    heading.position(400,100);
    // question
    questionInput = createInput('');
    questionInput.size(300, 30);
    questionInput.position(400, 220);
    // submit button
    submitAnswerButton = createButton('submit');
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(400, 260);
    // reset button
    resetButton = createButton('reset');
    resetButton.size(80, 24);
    resetButton.mousePressed(restart);
    resetButton.position(660, 260);
  }

  function draw() {
    //background
    background('aliceblue');
    fill('black');

    // incorrect count
    text(incorrectResponse, 400, 400);

    //question
    fill('mediumpurple');
    textSize(24);
    text(message, 400, 200);

    fill(responseColor);
    text(response, 400, 350);

  }