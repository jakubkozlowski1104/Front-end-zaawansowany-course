const firstDiv = document.querySelector('.s1');
const secoundDiv = document.querySelector('.s2');

function changeColor() {
    firstDiv.classList.toggle('red');
    secoundDiv.classList.toggle('red');
}
firstDiv.addEventListener('click', changeColor);
