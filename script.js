/*
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

*/

console.log('test');

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
]

const buttonUp = document.querySelector('.fa-chevron-up');
const buttonDown = document.querySelector('.fa-chevron-down');
let containerImages = document.getElementById('container-images');

console.log(images);

containerImages.innerHTML =  `<img src="${images[0]}" alt="img">`;
let c = 0;

buttonUp.addEventListener('click', function(){
  // * soluzione 1 senza loop
  if (c > 0){
    c = c - 1;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);
  }  
  else if(c = -1){
    c = 4;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);
  }
  // * OPPURE AL POSTO DI  else if(c = -1){
  // else{
  //   c = 4;
  //   containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
  //   console.log(c);
  // }

});

buttonDown.addEventListener('click', function(){
  // * soluzione 1 senza loop
  if (c < 4){
    c = c + 1;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);
  }  
  else if(c = 4){
    c = 0;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);
  }

});






















