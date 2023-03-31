'use strict'

let userScore = 0

let userTrys = 4

let bonusTrys = 6

let questions = [['what is my name?'],['where was my the first country i visited?'],['what is my favourite food?'],['what does not belong on pizza?'],['who is my favourite roman']]

let answers = [['noah'],['italy'],['pasta'],['mushroom', 'pineapple'],['caesar', 'juluis caesar']]

let responses = [['thats my name dont wear it out'],['la dolce vita'],['oodles of noodles'],['yuck, gross'],['great guy']]

let chelseaPlayers = ['zola', 'lampard', 'terry']

let randomNumber = Math.floor((Math.random() * 10) + 1);


function newQuiz() {

    userScore = 0

    for(let i = 0; i < questions.length; i++) {

        let quiz = prompt(questions[i]).toLowerCase();

        if (answers[i].includes(quiz))  {
    
            alert(responses[i])
    
            userScore ++
    
        } else {
            
            alert('wrong')
        }

    }

    alert('your final score is ' + userScore + ' out of 5')

    numberGame()

}


function numberGame(){

    if (userTrys == 0) {

        alert('no more trys remaining!')

        console.log("your score is " + userScore + ' so far')

        bonusRound()

        return
    }

    let numberGuess = prompt('can you guess a random number? you have ' + userTrys + ' trys remaining');

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

        alert('justttt right!') 

        bonusRound()

    }

}

function bonusRound() {

    if (bonusTrys == 0) {

        alert("no more trys remaining! your final score is " + userScore + ' out of 7')

        return
    }


    let finalAnswer = prompt('for a bonus point can you name any of my favourite chelsea players? you have ' + bonusTrys + ' trys remaining').toLowerCase();

    if (chelseaPlayers.includes(finalAnswer)) {

        userScore ++

        alert('correct, your final score is ' + userScore + ' out of 7');

        bonusTrys == 6

    } else {
        
        alert('wrong');

        bonusTrys --

        bonusRound()
    }

}