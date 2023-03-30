'use strict'

let userScore = 0

let userTrys = 4

let bonusTrys = 6

let quizzies = [{Q:'what is my name?', A:'noah'}, {Q:'where was my the first country i visited?', A:'italy'}, {Q:'what is my favourite food?', A:'pasta'}, {Q:'what does not belong on pizza?', A:'mushroom'}, {Q:'who is my favourite roman', A:'juluis caesar'} ]

function quiz() {

    let zzzzz = prompt('what is my name?');

    if (zzzzz.toLowerCase() === 'noah') {

        alert('correct');

        userScore ++

    } else {
        
        alert('wrong');
    }

    let secondAnswer = prompt('where was my the first country i visited?');

    if (secondAnswer.toLowerCase() === 'italy') {

        alert('correct');

        userScore ++

    } else {
        
        alert('wrong');
    }

    let thirdAnswer = prompt('whats my favourite food');

    if (thirdAnswer.toLowerCase() === 'pasta') {

        alert('correct');

        userScore ++

    } else {
        
        alert('wrong');
    }

    let fourthAnswer = prompt('what food do i not like on pizza');

    if (fourthAnswer.toLowerCase() === 'mushroom' || fourthAnswer.toLowerCase() === 'mushrooms') {

        alert('correct');

        userScore ++

    } else {
        
        alert('wrong');
    }

    let fiththAnswer = prompt('who was my favourite roman');

    if (fiththAnswer.toLowerCase() === 'juluis caesar' || fiththAnswer.toLowerCase() === 'caesar') {

        alert('correct');

        userScore ++

    } else {
        
        alert('wrong');
    }

    console.log(userScore)

    randomNumber = Math.floor((Math.random() * 10) + 1);

    numberGame()

    userTrys = 4
        
}
let randomNumber = Math.floor((Math.random() * 10) + 1);

function numberGame(){


    console.log(randomNumber)

    if (userTrys == 0) {

        alert('no more trys remaining!')

        console.log("your score is " + userScore + ' so far')

        bonusRound()

        return
    }

    let numberGuess = prompt('can you guess my favourite number? you have ' + userTrys + ' remaining');

    console.log(numberGuess)

    if (numberGuess > randomNumber) {

        alert('too high!');

        userTrys --

        numberGame()

    } else if (numberGuess < randomNumber) {
        
        alert('too low!');

        userTrys --

        numberGame()

    } else if (numberGuess == randomNumber) {

        userScore ++

        console.log("your score is " + userScore + ' so far')

        alert('great number') 

        bonusRound()

    }

}

function bonusRound() {

    if (bonusTrys == 0) {

        alert("no more trys remaining! your final score is " + userScore + ' out of 7')

        console.log()

        return
    }


    let chelseaPlayers = ['zola', 'lampard', 'terry']

    let finalAnswer = prompt('for a bonus point can you name any of my favourite chelsea players? you have ' + bonusTrys + ' remaining');

    if (finalAnswer.toLowerCase() === chelseaPlayers[0] || finalAnswer.toLowerCase() === chelseaPlayers[1] || finalAnswer.toLowerCase() === chelseaPlayers[2]) {

        userScore ++

        alert('correct, your final score is ' + userScore + ' out of 7');

        bonusTrys == 6

    } else {
        
        alert('wrong');

        bonusTrys --

        bonusRound()
    }

}

function newQuiz() {

    userScore == 0

    for(let i = 0; i < quizzies.length; i++) {

        let quizzQuiz = prompt(quizzies[i].Q);

        if (quizzQuiz.toLowerCase() === quizzies[i].A) {
    
            alert('correct');
    
            userScore ++
    
        } else {
            
            alert('wrong');
        }

    }

    alert('your final score is ' + userScore + ' out of 5');

    numberGame()

}