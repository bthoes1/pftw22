
let instructions = 'Are you smarter than a Jeopardy champion? \n \n Ken Jennings, Amy Schneider, and Matt Amodio are the top-3 ranked Jeopardy players in terms of most consecutive wins. Can you solve the clues that ended their historic streaks? Remember to answer in the form of a question!';

console.log(instructions);

const overview = window.alert(instructions);

const questions = [
    { question: 'Most of this firm\'s 70,000 seasonal white-collor workers work only 4 months per year.', answer: 'What is H&R Block?', numberOfGames: '74', player: 'Ken Jennings' },

    { question: 'The only nation in the world whos name in English ends in H, it\'s also one of the 10 most populous?', answer: 'What is Bangladesh?', numberOfGames: '40', player: 'Amy Schneider' },

    { question: 'Nazi Germany annexed this nation and divided it into regions of the Alps and the Danube; the Allies later divided it into 4 sectors.', answer: 'What is Austria?', numberOfGames: '38', player: 'Matt Amodio' },
]

const randomIdx = Math.round(Math.random() * questions.length - 1);
console.log(questions[randomIdx].question);
const questionAttempt = window.prompt(questions[randomIdx].question);


const answerResult = 'You guessed \"' + questionAttempt + '\". The correct response is \"' + questions[randomIdx].answer + '\". This clue ended the ' + questions[randomIdx].numberOfGames + '-day winning streak of ' + questions[randomIdx].player + '.';
console.log(answerResult);
window.alert(answerResult);