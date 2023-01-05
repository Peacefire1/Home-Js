// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 6 ;
let secondCard = 9 ;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard  ;
let hasBlackJack = false ;
let isAlive = true ;


let message = ""


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")


let cardsEl = document.getElementById("cards-el")


function startGame(){
    renderGame()
}




function renderGame(){

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
    console.log("Drawing a new card from the deck!");

    let card = 6

    sum += card

    startGame()
}








// CASH OUT!
console.log(hasBlackJack);
console.log(isAlive)