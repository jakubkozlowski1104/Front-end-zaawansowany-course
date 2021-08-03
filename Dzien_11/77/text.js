
const btnIncrease = document.querySelector('bigger');
const btnDecrease = document.querySelector('smaller');
const text = document.querySelector('p');

let textSize = 16;


function textIncrease() {
    text.style.fontSize = "30px";
}


btnIncrease.addEventListener('click', textIncrease);
