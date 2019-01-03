const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let currentKey;
let score;
let endScore = 20;
let OffGame = false;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomKey() {
    index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index];
    if (key === lastKey) {
        console.log('The same key!!!')
        return getRandomKey()
    }
    lastKey = key;
    return key;
};


function peep() {
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
    addClassToElement('fire-key', key);
    currentKey = key;
    // console.log(currentKey.attributes[0].value)
    setTimeout(() => {
       
        if (!OffGame) peep();
    }, time);
};

function endGame() {
    OffGame = true;
    window.removeEventListener('keydown', checkKey)
    menu.innerHTML = `<div class="bober1">Victory! Yours score is: ${score}</div> <button onclic="startGame()"><b>Start</b>`
};

 function addClassToElement(className, element) {
    element.classList.add(className);
    const time = getRandomNumber(1000, 2000);
    setTimeout(() => {
        removeClassFromElement(className, element);
    }, time);
 }  

 function removeClassFromElement(className, element) {
    element.classList.remove(className);
 }  



function showScore() {
    menu = document.querySelector('.game-menu');
    // console.log(menu);
    menu.innerHTML = `<div class="scoreBoard">Score: ${score}</div>`; 
    // if (score = 100){
    //     menu.innerHTML = `<div class="scoreBoard">Score: Warp!</div>`;  
    // };
};

function startGame() {
    score = 0;
    showScore();
    window.addEventListener('keydown', checkKey)
    peep();
    OffGame = false;
    scoreBoard = document.querySelector('.scoreBoard');
};

function checkKey(event) {
    if (event.keyCode == currentKey.attributes[0].value) {
        score ++;
        removeClassFromElement('fire-key', currentKey);
        addClassToElement('correct-key-down', currentKey);
        console.log(score);
    } else {
        score --;
        let wrongKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
        addClassToElement('wrong-key-down', wrongKey);
        console.log(score);
    }
    scoreBoard.innerHTML = `Score: ${score}`;
    if (score == endScore) {
        endGame()
    }
}
