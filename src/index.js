const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)

game.start()

window.onload = () => {

	// const preLoad = new Image ();
	// preLoad.src = "./img/Arkanoid-Cover.jpg";
	
	
    // preLoad.onload = () => {
	// 	ctx.drawImage(preLoad, 0, 0, 700, 500);
		
	// }

	// document.getElementById("score").style.display = "none";
	
	// document.getElementById("start-button").onclick = () => {
	// 	startGame();
	// 	document.getElementById("start-button").innerHTML = "Pause Game";
	// }
	
	// function startGame() {
	// 	const newGame = new Game(ctx)
	// 	newGame.start();
		
	// 	document.getElementById("start-button").onclick = () => {
	// 		newGame.pause();
	// 		document.getElementById("start-button").onclick = () => {
	// 			newGame.resume();
	// 		}
	// 	}
	// }
};