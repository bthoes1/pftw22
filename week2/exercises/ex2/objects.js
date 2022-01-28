let randomNumber = window.prompt('Enter a number between 1 and 3, and I will tell you which game you can try on your phone right now.');

const myGames = [
    { title: 'Wordle', type: 'word game', numberOfPlayers: '1', rating: 'everyone', shortDescription: 'guess the five-letter word of the day in six guesses or fewer.' },

    { title: 'Sudoku', type: 'number game', numberOfPlayers: '1', rating: 'everyone,', shortDescription: 'fill in this 9x9 grid without repeating any digits in column, row, or section.' },

    { title: 'Blockdoku', type: 'spatial reasoning game', numberOfPlayers: '1', rating: 'everyone', shortDescription: 'use Tetris methodology to fill in a Sudoku-like grid. When you fully fill in a row, column, or section, the blocks disappear, allowing gameplay to continue.' },
];
console.log('All of the games', myGames);

const randomIdx = Math.round(randomNumber - 1);
window.alert('Try playing ' + myGames[randomIdx].title + ', which is a ' + myGames[randomIdx].type + ' for ' + myGames[randomIdx].numberOfPlayers + ' player(s). This game is meant for ' + myGames[randomIdx].rating + '. All you have to do is ' + myGames[randomIdx].shortDescription);