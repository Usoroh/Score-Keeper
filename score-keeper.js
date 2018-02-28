var a = 0;
var b = 0;
var gameOver = false;

var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var resetButton = document.querySelector("#reset");

var leftScore = document.querySelector("#leftScore");
var rightScore = document.querySelector("#rightScore");
var playingTo = document.querySelector("#playTo");
var numToPlay = document.querySelector("#numToPlay");
numToPlay.value = 0;

function addPoint(x,y,z) {
	if(!gameOver){
		x++;
		y.textContent = x;
		if(x == playingTo.textContent){
			gameOver = true;
			y.classList.add("winner");
			alert(z + " won!");
		}
		return x;
	}
}

function reset() {
	a = 0;
	b = 0;
	leftScore.textContent = 0;
	rightScore.textContent = 0;
	gameOver = false;
	leftScore.classList.remove("winner");
	rightScore.classList.remove("winner");
}


//add point to player one when clicked and check if won
playerOne.addEventListener("click", function() {
	a = addPoint(a, leftScore, "Player One")
});


playerTwo.addEventListener("click", function() {
	b = addPoint(b, rightScore, "Player Two")
});

numToPlay.addEventListener("change", function() {
	playingTo.textContent = this.value;
	reset();
});

resetButton.addEventListener("click", function() {
	reset();
});
