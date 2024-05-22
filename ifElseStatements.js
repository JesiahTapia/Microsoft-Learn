let cold = true

if(cold) {
    console.log("Master is cold");
} // cold = true so code will run

if(true) {
    console.log( "Still cold!");
} // true = cold so code will run

let currentFunds = Math.floor(Math.random() * 100)
let neededFunds = Math.floor(Math.random() * 100)
let backupFunds = Math.floor(Math.random() * 60)


console.log(currentFunds)
console.log(neededFunds)// test lines
console.log(backupFunds);



if(currentFunds >= neededFunds || backupFunds >= neededFunds ) {
    console.log("You have enough breesh!") // if first variable is equal to or bigger than the second, code will run this statement
} else {
    console.log("Sorry champ go get some more bread!") // if first variable is less or not equal to the second, code will run this statement
}

//ternary operator pratice

let myWallet = Math.floor(Math.random() * 100)
let yourWallet = Math.floor(Math.random() * 100)
console.log("My wallet has " + myWallet + " dollars");
console.log("Your wallet has " + yourWallet + " dollars");

let biggerWallet = myWallet > yourWallet ? myWallet : yourWallet

console.log("The bigger wallet has " + biggerWallet + " dollars");

if(myWallet > yourWallet) {
    console.log("Haha jokes on you")
} if(myWallet < yourWallet) {
    console.log("Jokes on me :(")
} else {
    console.log("Money Twins?");
}
// blackjack practice module

let cardOne = 7
let cardTwo = 5
let sum = cardOne + cardTwo
let cardOneBank = 7
let cardTwoBank = 5
let cardThreeBank = 6
let cardFourBank = 4

let cardThree = 7
sum += cardThree
if (sum > 21) {
  console.log('You lose')
}
console.log(`You have ${sum} points`)

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank

if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
  console.log('You win')
  process.exit(1)
} else {
  console.log('Bank wins')
}

