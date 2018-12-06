// do domu: stwóż funkcje która losowo do klawisza dodaje klasę FireKey

const buttonsKey = document.getElementsByClassName("key");
let lastkey;


function GetRandomNumber(min, max){
	return Math.floor(Math.random() * (max-min) + min);
};

function getRandomKey () {
    index = Math.floor((Math.random()) * buttonsKey.length);
    const key =  buttonsKey[index]
    if (key === lastkey) {
        console.log('the same key!!!');
        return getRandomKey();
    }
    lastkey = key;
    return key;
};

console.log(getRandomKey())