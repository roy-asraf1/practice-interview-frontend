let randomNumber1, randomNumber2;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

let source1 = `images/dice${randomNumber1}.png`;
let source2 = `images/dice${randomNumber2}.png`;

let dicess = document.getElementsByClassName('dicePhoto');
let winnerString;

dicess[0].src = source1;
dicess[1].src = source2;
if (randomNumber1 === randomNumber2) {
    winnerString = `Draw`;
}
else if (randomNumber1 > randomNumber2) {
    
    winnerString = `The winner is player1`;
}
else {
    winnerString = `The winner is player2`;
}
document.getElementById('title').innerText = winnerString;


