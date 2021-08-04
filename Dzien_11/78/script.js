const firstDiv = document.querySelector('.s1');
const secoundDiv = document.querySelector('.s2');

function changeColor() {
    this.classList.toggle('red');
}
firstDiv.addEventListener('click', changeColor);
secoundDiv.addEventListener('click', changeColor);
