var pngStringify = require('terminal-image');
var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
console.log(chalk.bold.cyanBright('Cli Quiz Application'));

var userName = readlineSync.question('Enter Your Name: ');

console.log('\nNamaste ' + chalk.yellowBright.bold(userName) + "! Can you identify the given images Correctly ?");


var high_score = {
  name: 'Dheeraj',
  score: 12
};

function play_quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.greenBright.bold('Correct!'));
    score = score + 3;
  } else {
    console.log(chalk.redBright.bold("Incorrect!"));
    score = score - 1;
  }

  console.log(chalk.underline.bold.yellowBright("Your Score:" + score));
  console.log(chalk.cyanBright("\n---------------------------------------------------------------"));
};



// arrQuestion = [{question:'What is nodejs?',answer:'node'},{question:'who are you', answer: 'student'}]


// for(var i=0; i<arrQuestion.length; i++){
//   play_quiz(arrQuestion[i].question, arrQuestion[i].answer);
// };




async function run() {



  console.log(await pngStringify.file('apple.png', { width: '70%', height: '50%', preserveAspectRatio: true }));

  // question one
  play_quiz("\ngive your answer in abc format\na)Apple\nb)Apple.Inc\nc)Mapple\nanswer:", 'a');


  console.log(await pngStringify.file('shell.png', { width: '70%', height: '50%', preserveAspectRatio: true }));

  // question two
  play_quiz('\ngive your answer in abc format\na)Castrol\nb)Shell\nc)Rotella\nanswer:', 'b');

  console.log(await pngStringify.file('xerox.png', { width: '70%', height: '50%', preserveAspectRatio: true }));

  // question three
  play_quiz('\ngive your answer in abc format\na)Konica Minolta Bizhub C754e\nb)Xerox D95A\nc)Xerox\nanswer:', 'c');

  console.log(await pngStringify.file('pepsi.png', { width: '70%', height: '50%', preserveAspectRatio: true }));

  // question four
  play_quiz('\ngive your answer in abc format\na)Pepsi\nb)Vsm \nc)Tennex\nanswer:', 'a');

  console.log(await pngStringify.file('firfox.png', { width: '70%', height: '50%', preserveAspectRatio: true }));

  // question five
  play_quiz('\ngive your answer in abc format\na)V8\nb)Spidermonkey \nc)Firefox\nanswer:', 'c');


  console.log("Yay You SCORED: " + score);
  if (score > high_score.score) {
    console.log('High Score!!!');
    console.log('Send me screen shot of your score to add your name to the list! WELL PLAYED :) ')
  }
}

run()

