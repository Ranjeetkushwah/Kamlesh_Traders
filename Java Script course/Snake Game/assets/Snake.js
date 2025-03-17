// game constant and variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('./assets/pow-90398.mp3');
const gameOverSound = new Audio('./assets/hit-deep-snake-270755.mp3');
const moveSound = new Audio('./assets/key-press-263640.mp3');
const musicSound = new Audio('./assets/nature-birds-singing-217212.mp3');
let speed = 5;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let score = 0;


food = { x: 6, y: 7 };

let highScoreBox=document.getElementById("highScoreBox")
//Game functions 
function main(ctime) {   //ctime means current time
    window.requestAnimationFrame(main);  //run a main and call  specific function and update the animatin for next reprint.
    musicSound.play();
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // if you bump into yourself;
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;

        }
    }

    // if you bump into the wall

    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }

}

function gameEngine() {
    // part 1 : updating the snake array and food ;
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any key to play again!!!;");
        snakeArr = [{ x: 13, y: 15 }];
        musicSound.play();
        score = 0;
        speed = 5;

    }


    // if you have eaten the food, increment the score and regentrate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        if (score > highScoreValue) {
            highScoreValue=score;
            localStorage.setItem('highScoreBox', JSON.stringify(highScoreValue));
            highScoreBox.innerHTML = "HighScore: " + highScoreValue;
        }

        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }    // x:Math.round(a+(b-a)*Math.random()) this is used to genrate the random number 

        // increse the speed A.T.S
        if (score >= 10) { speed = 8 };
        if (score >= 20) { speed = 10 };
        if (score >= 30) { speed = 15 };

    }



    // Moving the snake 
    for (let i = snakeArr.length - 2; i >= 0; i--) {

        snakeArr[i + 1] = { ...snakeArr[i] };


    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;



    // part 2: Display: render the snake;

    //       Display: render the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');  //used to create element in html 
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snakeHead')
        if (index === 0) {
            snakeElement.classList.add('snakeHead')
        } else {
            snakeElement.classList.add('snake')

        }
        board.appendChild(snakeElement);
    })


    // Display: render the food
    foodElement = document.createElement('div');  //used to create element in html 
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);


}





// main logic start here
let highScore = localStorage.getItem('highScoreBox')
if (highScore === null) {
    highScoreValue = 0;
    localStorage.setItem('highScoreBox', JSON.stringify(highScoreValue))
}
else {
    highScoreValue = JSON.parse(highScore);
    highScoreBox.innerHTML = "HighScore: " + highScore
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }  //start the game
    moveSound.play();
    switch (e.key) {

        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }

})












