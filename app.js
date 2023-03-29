'use strict'

let openUp = 0

function userPrompt() {

    setTimeout(function() {

        let openingQuestion = prompt('oh hey didnt see you there, whats your name?');

        if (openingQuestion.toLowerCase() === 'yes' || openingQuestion.toLowerCase() === 'y') {
    
            alert('yes');
    
        } else {
    
            alert('no');
        }

        let firstAnswer = prompt('wait ' + openingQuestion + ' are you sure you want to enter?');

        if (firstAnswer.toLowerCase() === 'yes' || firstAnswer.toLowerCase() === 'y') {
    
            alert('sure sure?');
    
        } else {
    
            alert('ok maybe not');
        }

        document.getElementById('welcome-message').innerText = 'welcome ' + openingQuestion + ' what is going on'

        document.getElementById('body').style.visibility = 'visible'

    }, 2000);

    
}

userPrompt()

function menuOpen() {

    if (openUp == 0) {

        var list = document.getElementsByClassName('menuList');

        for(let i = 0; i < list.length; i++) {

            list[i].style.visibility = "visible"

        }

        openUp += 1

    } else {

        var list = document.getElementsByClassName('menuList');

        for(let i = 0; i < list.length; i++) {

            list[i].style.visibility = "hidden"

        }

        openUp -=1

    }

}

function quiz() {

    let secondAnswer = prompt('do you really want to find out?');

    if (secondAnswer.toLowerCase() === 'yes' || secondAnswer.toLowerCase() === 'y') {

        alert('1');

    } else {
        
        alert('2');
    }

    let thirdAnswer = prompt('do you really want to find out?');

    if (thirdAnswer.toLowerCase() === 'yes' || thirdAnswer.toLowerCase() === 'y') {

        alert('1');

    } else {
        
        alert('2');
    }

    let fourthAnswer = prompt('do you really want to find out?');

    if (fourthAnswer.toLowerCase() === 'yes' || fourthAnswer.toLowerCase() === 'y') {

        alert('1');

    } else {
        
        alert('2');
    }
    setTimeout(function() {

        alert('sorry i cant remember what it was now.. my bad')
        
        }, 1500)
        
}