let playerOneTurn = true
let playerTwoTurn = false
let numberOfMoves = 0
let winner = null
let foundWinner = false


const btnOne = document.querySelector('#btn-1')
const btnTwo = document.querySelector('#btn-2')
const btnThree = document.querySelector('#btn-3')
const btnFour = document.querySelector('#btn-4')
const btnFive = document.querySelector('#btn-5')
const btnSix = document.querySelector('#btn-6')
const btnSeven = document.querySelector('#btn-7')
const btnEight = document.querySelector('#btn-8')
const btnNine = document.querySelector('#btn-9')
const allPlayBtns = document.querySelectorAll(".playBtn")
const winnerFoundDiv = document.querySelector('#winnerFound')
const winnerAnnounce = document.querySelector('#winnerAnounce')

document.addEventListener('click',handleClick)

function checkWinner(){
    let gameTied = 0 

    if(btnFive.innerText === btnOne.innerText && btnOne.innerText === btnNine.innerText){
        winner = btnFive.innerText
        foundWinner=true
    }
    if(btnFive.innerText === btnTwo.innerText && btnTwo.innerText === btnEight.innerText){
        winner = btnFive.innerText
        foundWinner=true
    }
    if(btnFive.innerText === btnThree.innerText && btnThree.innerText === btnSeven.innerText){
        winner = btnFive.innerText
        foundWinner=true
    }
    if(btnFive.innerText === btnFour.innerText && btnFour.innerText === btnSix.innerText){
        winner = btnFive.innerText
        foundWinner=true
    }
    if(btnOne.innerText === btnTwo.innerText && btnTwo.innerText === btnThree.innerText){
        winner = btnOne.innerText
        foundWinner=true
    }
    if(btnOne.innerText === btnFour.innerText && btnFour.innerText === btnSeven.innerText){
        winner = btnOne.innerText
        foundWinner=true
    }
    if(btnNine.innerText === btnSix.innerText && btnSix.innerText === btnThree.innerText){
        winner = btnNine.innerText
        foundWinner=true
    }
    if(btnNine.innerText === btnEight.innerText && btnEight.innerText === btnSeven.innerText){
        winner = btnNine.innerText
        foundWinner=true
    }
    if(foundWinner){
        winnerFoundDiv.style.display = 'block'
        winnerAnnounce.textContent = `${winner} wins the game`
    }
    for(el of allPlayBtns){
        if(el.disabled){
            gameTied++
        }
    }

    if(gameTied===9 && !foundWinner){
        winnerFoundDiv.style.display = 'flex'
        winnerAnnounce.textContent = `The game is tied`
    }  
}

function newGame(){
    window.location.reload()
}

function handleClick(e){
    const button = e.target
        if(button.id === 'reset-Btn' || button.id === 'playAgain'){
            newGame()
            return
        }
    
    if(button.id){
            if(playerOneTurn){
                
                button.style.backgroundColor = '#a2d2ff'
                button.innerText = 'Player 1'
                button.disabled = true
                playerOneTurn = false
                playerTwoTurn = true
                numberOfMoves++
                checkWinner()
                
            } else if(playerTwoTurn){
                e.target.style.backgroundColor = '#ffafcc'
                e.target.innerText = 'Player 2'
                button.disabled = true
                playerTwoTurn = false
                playerOneTurn = true
                numberOfMoves++
                checkWinner()
        }
    }

}