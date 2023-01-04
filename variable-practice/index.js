// // Create two variables, firstName and lastName
// let firstName = "Tsogtoo"
// let lastName = "Ganzorig"
// // Concatenate the two variables into a third variable called fullName

// let fullName = firstName + " " + lastName

// //log fullName to the console

// console.log(fullName);



// let name = "Linda"
// let greeting = "Hi there"

// // Create a function that logs out "Hi the, Linda!" when called 


// function greetLinda() {
//     console.log(greeting + " " + name + "!");
    
// }

// greetLinda()


// let myPoints = 3 

// // Create two function, add3Points() and removePoints(), and have them

// function add3Points() {
//     myPoints += 3
// }
// add3Points()
// add3Points()
// add3Points()
// function removePoints(){
//     myPoints -= 1
// }
// removePoints()
// removePoints()


// console.log(myPoints);




// // Try to predict what each of the lines will log out
// console.log("2" + 2);  //"22"
// console.log(11 + 7);  // 18
// console.log(6 + "5");  //"65"
// console.log("My points:" + 5 + 9);  // My points 59
// console.log("11" + "14");  //"1114"


// // When the user clicks the purchase button, render out
// // "Something went wrong, please try again" in the paragraph
// // that has the id="error"

// let errorParagraph = document.getElementById("error");
// console.log(errorParagraph);;


// function purchaseEl(){
//     console.log("button clicked");
//     errorParagraph.textContent = "Something went wrong, please try again"
// }
// purchaseEl()





let num1 = 8 ;
let num2 = 2 ;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


// Create four function: add(), substract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum:: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl =document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum:" + result
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum:" + result
}

function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum:" + result
}


function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum:" + result
}