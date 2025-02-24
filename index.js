const team = {
    _players: [
        {firstName: '', lastName: '', age: 0}, 
        {firstName: '', lastName: '', age: 0}, 
        {firstName: '', lastName: '', age: 0}
    ],
    _games: [
        {opponent: '', teamPoints: 0, opponentPoints: 0},
        {opponent: '', teamPoints: 0, opponentPoints: 0},
        {opponent: '', teamPoints: 0, opponentPoints: 0}
    ],

    get players() {
        return this._players;
    },
    
    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        team.players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        team.games.push(game);
    }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team._players);
console.log(team._games);