const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinex',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]

    ],
    score: '4.0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};

let players1 = game.players[0];
let players2 = game.players[1];
let [team1Gk, ...team1Players] = players1;
let [team2Gk, ...team2Players] = players1;
let allPlayers = game.players;

let players1Final = players1.push('Thiago', 'Coutinho', 'Perisic');

let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

function printGoals(listOfPlayers) {
    console.log(...listOfPlayers);
}

function winner() {
    let smallOdd = Math.min(team1, team2, draw);
    let winner = getKeyByValue(game.odds, smallOdd);
    console.log(`Winner is ${game[winner]}`);
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] == value);
}

printGoals(['Davies', 'Muller', 'Lewandowski', 'Kimmich'])
printGoals(game.scored);
winner();