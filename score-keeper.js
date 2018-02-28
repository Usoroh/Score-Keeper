var a = 0;
var b = 0;
var gameOver = false;

var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var reset = document.querySelector("#reset");

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
			y.style.color = "green";
			alert(z + " won!");
		}
		return x;
	}
}

//add point to player one when clicked and check if won
playerOne.addEventListener("click", function() {
	a = addPoint(a, leftScore, "Player One")
});


playerTwo.addEventListener("click", function() {
	b = addPoint(b, rightScore, "Player Two")
});

numToPlay.addEventListener("change", function() {
	playingTo.textContent = numToPlay.value;
});

reset.addEventListener("click", function() {
	a = 0;
	b = 0;
	leftScore.textContent = 0;
	rightScore.textContent = 0;
	numToPlay.value = 0;
	playingTo.textContent = 0;
	document.querySelector("h1").style.color = "black";
	gameOver = false;
});
