const guessNum = document.querySelector('.guessField')
const submit = document.querySelector('.guessSubmit')
let randomNum = Math.floor(Math.random()*100+1)
const guessRem = document.querySelector('.lastResult')
const guessAll = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const resultDisplay = document.querySelector('.resultParas')
const p = document.createElement('p')


let playGame = true
let prevGuess = []
let numGuess = 1
let message
let guessVal

if (playGame){
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    guessVal = parseInt(guessNum.value)
    validate(guessVal)
})
}

function validate(guess){
    if (isNaN(guess)){
        alert('Enter a number')
    }
    else if (guess < 1 || guess > 100){
        alert('Enter a number between 1 and 100')
    }
    else{
        guessNum.value = ''
        prevGuess.push(guess)
        numGuess += 1
        guessAll.innerHTML += `${guess} `
        guessRem.innerHTML = `${11-numGuess}`
        if (numGuess > 10){
            message = `Game Over. The correct number is ${guessVal}`
            displayMessage(message)
            endGame()
        }
        else{
            checkNum(guess)
        }
    }
}

function checkNum(guess){
    if (guess === randomNum){
        message = 'Congratulations! You guessed the number correctly'
        displayMessage(message)
        endGame()
    }else{
        if (guess>randomNum){
            displayMessage('You guessed high')
        }else{
            displayMessage('You guessed low')
        }
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = message
}

function endGame(){
    guessNum.setAttribute('disabled',' ')
    p.classList.add('button')
    p.innerHTML = 'Play Again'
    resultDisplay.appendChild(p)
    playGame = false
    newGame()

}

function newGame(){
    p.addEventListener('click',(e)=>
    {
        randomNum = Math.floor(Math.random()*100+1)
        playGame = true
        guessNum.removeAttribute('disabled')
        numGuess = 1
        prevGuess = []
        guessAll.innerHTML = ''
        lowOrHi.innerHTML = ''
        guessRem.innerHTML = ''
        resultDisplay.removeChild(p)

    })
}