/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game Values 
let min = 1,
	max = 10,
	winingNum = getRandomNum(min , max),
	gussesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      playAgain = document.querySelector('#playagian-btn'),
      guessInput = document.querySelector('#guess-input'),
      guessMsg = document.querySelector('.message');

//Assign Ui min And Max
minNum.textContent = min;
maxNum.textContent = max;





//Add Event to Play Again Button
playAgain.addEventListener('mousedown',function(){
  window.location.reload();
});



//Listen for Guess
guessBtn.addEventListener('click',function (e) {
	let guess = parseInt(guessInput.value);

	//Validate
	if (isNaN(guess) || guess < min || guess > max ) {
		setMessage(`Please Enter A Number ${min} And ${max}`,'alert alert-danger');
	}
	//Check if won
	else if(guess == winingNum) {
		//Disabled Input
		guessInput.disabled = true;
		//Change Border
		guessInput.className = 'border border-success form-control';
		//Set Message
		setMessage(`${winingNum} is Correct...Congratss You Won!!!`,'alert alert-info');

		//Show Play Again
		playAgain.setAttribute('type','submit');
		
        
	}else{
        //Wrong Num
        gussesLeft -= 1;
        if (gussesLeft === 0) {
            //Disabled Input
			guessInput.disabled = true;
			//Change Border
			guessInput.className = 'border border-danger form-control';
			//Clear Input
			guessInput.value = '';	
           setMessage(`Soory Game Over Correct Number was ${winingNum}....Try Aganin`,'alert alert-danger');
           
          //Show Play Again
		  playAgain.setAttribute('type','submit');
           
          
        }else{
        	//Change Border
			guessInput.className = 'border border-warning form-control';
			//Clear Input
			guessInput.value = ''; 
            setMessage(`Sorry Your Choiche Is Not Correct You Have ${gussesLeft} Chance Left`,'alert alert-warning');
        }
       
	}
});


//Show Message
function setMessage (msg , className) {
	guessMsg.className = className;
	guessMsg.textContent = msg;
}

//getRandomNum
function getRandomNum (min , max) {
	return Math.floor(Math.random() * (max -min + 1) + min); 
}
