let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');

let score = document.getElementById('score')
let scoreCounter = 0;

// cactus move
let startBtn = document.getElementById('start-btn');

startBtn.addEventListener('mousedown', () => {
	cactus.classList.toggle('cactus-move');
	unshowGameOver();
})

// dino jump
document.addEventListener('keydown', (event) => {
if (event.code == 'Space') {
  jump();
}
});

function jump () {
	if (dino.classList != "jump")
		dino.classList.add("jump");

	setTimeout(() =>  {
		dino.classList.remove("jump")
	}, 300)
}

// 
let isAlive = setInterval ( function() {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
		showGameOver();
		cactus.classList.remove('cactus-move');
		scoreCounter = 0;
	}

	// score update
	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop <= 140) {
		scoreCounter += 1;
	}
	score.innerHTML = `<span><img src='./img/score.png'>  ${scoreCounter}</span>`;

}, 10);

// game over
let gameOver = document.getElementById('game-over');

function showGameOver() {
	gameOver.innerHTML = '<img src="./img/game-over.png">';
	gameOver.classList.add('show-game-over');
}

function unshowGameOver() {
	gameOver.innerHTML = '';
	gameOver.classList.remove('show-game-over');
}
