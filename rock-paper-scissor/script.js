let hand = [ "rock" , "paper" , "scissor"]

function getHand (){
    let randomIndex = Math.floor(Math.random()*3)
    return hand[randomIndex]
}
console.log(getHand());