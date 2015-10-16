
//starts on turn 1 with player 1 to play. when updatePlayer is called, it
// updates the "whose turn is it" indicator on the main page with the player.
// this will be later
var turn = 1
var currentPlayer = "Player 1"
var updatePlayer= function(){
  if (turn % 2 == 0){
    currentPlayer = "Player 2"
  }
  else {
    currentPlayer = "Player 1"
  }
  document.getElementById("player").innerHTML = (currentPlayer +", choose a letter")
}

//gives the game words to check.
var dictionary=["abe", "bear", "bead", "rabies", "babe", "abed"]
// setting up the buttons to be clickable.
window.onload= function() {
  document.querySelector("#before").addEventListener("click", addLetterBefore);
  document.querySelector("#after").addEventListener("click", addLetterAfter);
  document.querySelector("#challenge").addEventListener("click", challenge);
  document.querySelector("#startButton").addEventListener("click", startNewGame)
}
// checks to make sure the play is valid, then puts the letter at the end of the current word.
// then calls the function that checks the dictionary.  after all of that, it increments the turn counter.
var addLetterAfter = function(){
  var play = document.querySelector("#field").value
  if((play.length === 1)) {
    if (play.search(/\D+/i) != -1 ){
      (document.getElementById("chalkboard").innerHTML) += play
      document.getElementById('field').value=''
      checkWin()
      turn++
      updatePlayer()
    }
  }
}
// same as above, but adds the letter to the front of the word.
var addLetterBefore = function(){
  var play = document.querySelector("#field").value
  if((play.length === 1)) {
    if (play.search(/\D+/i) != -1 ){
      (document.getElementById("chalkboard").innerHTML)= play + (document.getElementById("chalkboard").innerHTML)
      document.getElementById('field').value=''
      checkWin()
      turn++
      updatePlayer()
    }
  }
}
// will in the future allow for the challenge mechanic.
var challenge = function(){

}

var startNewGame = function () {
document.location.reload ()
}

// checks if the word on the board is a valid word to trigger a loss condition.
// if so, alerts the players
var checkWin = function(x) {
  var word = document.getElementById("chalkboard").innerHTML
  if (word.length>3 && (dictionary.indexOf((word)) !=-1)){
      alert (currentPlayer + ', you lose')
  }
}
