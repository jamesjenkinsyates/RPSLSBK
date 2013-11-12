function Player(name) {
  // initialize method
  this.name = name
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
  // alert(this.name + ' picks' + ' ' + pick)
}

Player.prototype.picksAI = function() {
  var AISelection = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'blair', 'ketchup'];
  this.pick = AISelection[Math.floor(Math.random() * AISelection.length)];
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  var pairs_hash = { 'rock': { 'beats': ['scissors', 'lizard', 'ketchup'] },
                     'paper': { 'beats': ['rock', 'spock', 'blair'] },
                     'scissors': { 'beats': ['paper', 'lizard', 'ketchup'] }, 
                     'lizard': { 'beats': ['paper', 'spock', 'blair'] },
                     'spock': { 'beats': ['rock', 'scissors', 'ketchup'] },
                     'blair': { 'beats': ['rock', 'scissors', 'spock'] },
                     'ketchup': { 'beats': ['blair', 'paper', 'lizard'] } };

  if(this.player1.pick == this.player2.pick) {
    return null }
  else if(pairs_hash[this.player1.pick]['beats'][0] == this.player2.pick) {
    return this.player1 }
  else if(pairs_hash[this.player1.pick]['beats'][1] == this.player2.pick) {
    return this.player1 }
  else if(pairs_hash[this.player1.pick]['beats'][2] == this.player2.pick) {
    return this.player1 }
  else {
    return this.player2 };
}




