let d = 0;
let var1 = prompt('please enter your name ?');

alert('Hello ' + var1);

let arrQuestion = ['Did i achieve my dream??', 'do i still styding??', 'do i have brothers??', 'am i funny person??', 'am i winter lover??'];

function userQuestion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let userInput = prompt(arr[i]).toLowerCase();
        while (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n') {
            userInput = prompt('please enter yes or no || y or n').toLowerCase();
        }
        if ((arr[i] === 'do i have brothers??' || arr[i] === 'am i funny person??') && (userInput === 'yes' || userInput === 'y')) {
            alert('correct answer');
            d++;
        } else if ((arr[i] === 'Did i achieve my dream??' || arr[i] === 'do i still styding??' || arr[i] === 'am i winter lover??') && (userInput === 'no' || userInput === 'n')) {
            alert('correct answer');
            d++;
        } else {
            alert('incorrect answer');
        }
    }
}
userQuestion(arrQuestion);


function guessNumber() {
    let var7 = prompt('can you guess the number i liked ?');
    let k;
    let number_of_tries = 4;
    for (k = 1; k < 4; k++) {
        if (var7 === 3) {
           
            alert('Correct Answer');
            d++;
            break;
        } else if (var7 > 3) {
            var7 = prompt('too high please try again ,Number of tries Left: ' + (number_of_tries - k));

        } else
            if (var7 < 3) {
                var7 = prompt('too low please try again ,Number of tries Left: ' + (number_of_tries - k));
            }
        if (k !== 3) {
            alert('sorry you have reached the limit of tries - correct answer is 3');
        }
    }
}
guessNumber();

function appleQuestion() {
    let a;
    let var8 = prompt('What is the color of Apple??');
    let number_of_tries_postive = 6;
    for (a = 1; a < 6; a++) {

        if (var8 === 'red' || var8 === 'yellow' || var8 === "green") {
            
            alert('correct!');
            d++;
            break;
        } else {
            var8 = prompt('that is wrong try again! ,Number of tries Left :' + (number_of_tries_postive - a));
        }
        if (a == 5) {
            alert('sorry  The correct answer is red or yellow or green');

        }
    }
}
appleQuestion();
alert('your score is : ' + d);
