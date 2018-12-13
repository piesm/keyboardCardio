const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let Offgame = false;
let currentKey;
let score;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomKey() {
    index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index];
    if (key === lastKey) {
        console.log('The same key!!!')
        return getRandomKey()
    };
    lastKey = key;
    return key;
};


function peep(){
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
    key.classList.add('fire-key');
    currentKey = key;
    //setTimeout(function(){
     //   peep();
   // }, time);
    setTimeout(() => {
        key.classList.remove('fire-key')
        if (!Offgame) peep();
    }, time);
};
function endGame(){
    Offgame = true;
};

function startGame(){
    window.addEventListener('keydown', checkKey)
    //Live, Universe and everything
    Offgame = false;
    peep();
    score = 0;
};

function checkKey(event) {
    if (event.keyCode == currentKey.attributes[0].value) {
        console.log('42');
        score ++;
        console.log(score)
    } else {
        score --;
        console.log(score)
    }
};
