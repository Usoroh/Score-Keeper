var a = 0;
var b = 0;

var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var reset = document.querySelector("#reset");

var leftScore = document.querySelector("#leftScore");
var rightScore = document.querySelector("#rightScore");
var playingTo = document.querySelector("#playTo");
var numToPlay = document.querySelector("#numToPlay");
numToPlay.value = 0;

function addPoint(x,y,z) {
	x++;
	y.textContent = x;
	if(x == playingTo.textContent){
		y.style.color = "green";
		alert("Game over! " + z + " won");
		window.location.reload();
	}
	return x;
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

reset.addEventListener("click", function refresh() {
	a = 0;
	b = 0;
	leftScore.textContent = 0;
	rightScore.textContent = 0;
	numToPlay.value = 0;
	playingTo.textContent = 0;
});
