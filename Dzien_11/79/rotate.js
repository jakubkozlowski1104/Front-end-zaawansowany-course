  // parametry główne. Za pomocą zmiennych stwórz początkową wartość rotate (zero) i wartość o którą będziesz zmieniał stopnie (o 10 stopnii).

  // pobieramy elementy - pobierz przycisk i div

  // podpinamy nasłuchiwanie i umeiszczamy w nim funkcje anonimową. Pamiętaj zmieniamy własciwość transform. Za każdym razie obrót zwiększa się od 10 deg. 

  //Bonus dodaj właściwość transition dla div określoną na .5s.

const btn = document.querySelector('button');
const div = document.querySelector('div');

let rotate = 0;
let deg = 80;

btn.addEventListener('click', function() {
  deg += 10;
  div.style.transform = 'rotate('+deg+'deg)';
});
