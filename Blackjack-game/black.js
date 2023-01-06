// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = getRandomCard() ;
let secondCard = getRandomCard() ;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard  ;
let hasBlackJack = false ;
let isAlive = false ;
let message = ""
let player = {
    name: "per",
    chips: 145 ,
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")


let cardsEl = document.getElementById("cards-el")


function startGame(){
    isAlive = true
    renderGame()
}




function renderGame(){

    cardsEl.textContent = "Cards:" 

    for ( let i = 0; i < cards.length ; i++ ){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true 
    } else {
        message = "You're out of the game!"
        isAlive = false 
    }

    messageEl.textContent = message

}
function newCard () {
    if (isAlive === true && hasBlackJack === false) {
        
        let card = getRandomCard()
        sum += card
        cards.push(card)
        
        startGame()
    }
    
}


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) +1 ;
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 1
    }else{
        return randomNumber
    }
}









// CASH OUT!
console.log(hasBlackJack);
console.log(isAlive)