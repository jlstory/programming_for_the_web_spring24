const game1 = {
    title: 'Destiny',
    type: 'First Person Shooter',
    numberOfPlayers: '1 to 12',
    rating: '9/10',
    shortDescription: 'Destiny is a sci-fi based first person shooter with a semi open world gameplay style. It has both PVP and PVE play modes.'
};

const game2 = {
    title: 'The Elder Scrolls Online',
    type: 'MMORPG',
    numberOfPlayers: '1 to 12',
    rating: '9/10',
    shortDescription: 'ESO is a fantasy based open world rpg with several expansions and play modes.'
} 

const game3 = {
    title: 'Diablo',
    type: 'RPG',
    numberOfPlayers: '1 to 4',
    rating: '8/10',
    shortDescription: 'Diablo is a fantasy/horror based action rpg with a robust storyline and entertaining cut sequences.'
} 

const games = [game1, game2, game3];
console.log(games);

const numb = Number(window.prompt('I have 3 games in my collection. Pick a number between 1 and 3, and I will tell you about that game', 'as 1, 2, or 3'));

if (numb === 1){
window.alert('You have selected ' + game1.title + ', this game type is ' + game1.type + ', allowing for ' + game1.numberOfPlayers + ' players. ' + 'I would rate this game ' + game1.rating + '. To summarize, ' + game1.shortDescription )
} else if (numb === 2){
window.alert('You have selected ' + game2.title + ', this game type is ' + game2.type + ', allowing for ' + game2.numberOfPlayers + ' players. ' + 'I would rate this game ' + game2.rating + '. To summarize, ' + game2.shortDescription )
} else if (numb === 3){
window.alert('You have selected ' + game3.title + ', this game type is ' + game3.type + ', allowing for ' + game3.numberOfPlayers + ' players. ' + 'I would rate this game ' + game3.rating + '. To summarize, ' + game3.shortDescription )
} else {
    window.alert('Please reload the page and enter a number between 1 and 3 as an interger.')
};