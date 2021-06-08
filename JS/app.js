let d = 0;
let var1 = prompt('please enter your name ?');
console.log(var1);
alert('Hello ' + var1);


let var2 = prompt ('Did i achieve my dream??').toLowerCase();
console.log(var2);
if (var2==='yes'|| var2=== 'y') {
    alert('not correct ') ;
}
if (var2==='no'|| var2==="n"){
    alert(' correct');
    d++;
}
else {  console.log(var2)
};

let var3 = prompt ('do i still styding??').toLowerCase();
console.log(var3);
if (var3==='yes'|| var3=== 'y') {
    alert(' not correct ') ;
}
if (var3==='no'|| var3==="n"){
    alert(' correct');
    d++;
} else {
    console.log(var3);
}



let var4 = prompt ('do i have brothers??').toLowerCase();
console.log(var4);
if (var4==='yes'|| var4=== 'y') {
    alert(' correct i have two ') ;
    d++;
}
if (var4==='no'|| var4==="n"){
    alert('not correct' );
} else {
    console.log(var4);
}

let var5 = prompt ('am i funny person??').toLowerCase();
console.log(var5);
if (var5==='yes'|| var5=== 'y') {
    alert(' correct ' + var1 ) ;
    d++;
}
if (var5==='no'|| var5==="n"){
    alert( var1 + '!!  not correct ');
} else {
    console.log(var5);
}


let var6 = prompt ('am i winter lover??').toLowerCase();
console.log(var6);
if (var6==='yes'|| var6=== 'y') {
    alert(' not correct^_^ ' + var1) ;
}
if (var6==='no'|| var6==="n"){
    alert(var1 + ' correct!');
    d++;
} else {
    console.log(var6);
}

let var7 = prompt('can you guess the number i liked ?');

let k;
let number_of_tries = 4;
for (k = 1; k < 4; k++) {
    if (var7== 3) {
        console.log(var7);
        alert('Correct Answer');
        d++;
        break;
    } else if (var7 > 3) {
        var7 = prompt('too high please try again ,Number of tries Left: ' + (number_of_tries - k));

    } else
    if (var7 < 3) {
        var7 = prompt('too low please try again ,Number of tries Left: ' + (number_of_tries - k));
    }
    if (k == 3) {
        alert('sorry you have reached the limit of tries - correct answer is 3');
    }

}




let a;
let var8= prompt('What is the color of Apple??');
let color = ['red', 'yellow', 'green'];
let number_of_tries_postive = 6;
for (a = 1; a < 6; a++) {

    if (var8 === 'red' || var8 === 'yellow' || var8 === "green") {
        console.log('correct');
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

alert('your score is : ' + d)
