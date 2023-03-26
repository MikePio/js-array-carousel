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

let containerCircles = document.getElementById('circles-collection');

const circleClass = document.getElementsByClassName('circle');

console.log('images', images);
console.log('images.length', images.length); //in base al numero generato (in questo caso 5) si stabilisce il numero dell'ultimo elemento nell'array (in questo caso 4) per poi richiamarlo

// VALORE DI DEFAULT
containerImages.innerHTML =  `<img src="${images[0]}" alt="img">`;
let c = 0;

buttonUp.addEventListener('click', function(){
  // * soluzione 1 senza loop e quando si è a conoscenza degli elementi contenuti negli array
  if (c > 0){
    c = c - 1;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);

    // * genera e rimuove la classe active ai pallini bianchi
    circleClass[c + 1].classList.remove('active');
    circleClass[c].classList.add('active');
  }  
  else if(c = -1){
    c = 4;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);

    // * genera e rimuove la classe active ai pallini bianchi
    circleClass[c = 0].classList.remove('active');
    circleClass[c = 4].classList.add('active');
  }
  // * OPPURE solo else AL POSTO DI  else if(c = -1){
  // else{
  //   c = 4;
  //   containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
  //   console.log(c);
  // }

});

buttonDown.addEventListener('click', function(){
  // * soluzione 1 senza loop e quando si è a conoscenza degli elementi contenuti negli array
  if (c < 4){
    c = c + 1;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);

    // * genera e rimuove la classe active ai pallini bianchi
    circleClass[c - 1].classList.remove('active');
    circleClass[c].classList.add('active');
  }  
  else if(c = 4){
    c = 0;
    containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
    console.log(c);
    
    // * genera e rimuove la classe active ai pallini bianchi
    circleClass[c = 4].classList.remove('active');
    circleClass[c = 0].classList.add('active');
  }

});

// pallini bianchi
for(let i = 0; i < images.length; i++){
  // for(let i = 0; i = images.length; i++){ //loop infinito

  // * genera i pallini
  containerCircles.innerHTML +=  `<div class="circle ${images[i]} ${[i]}"></div>`;
  // stessa cosa
  // containerCircles.innerHTML +=  `<div class="circle ${images[c]} ${[c]}"></div>`;
  
  // * genera la classe active ai pallini bianchi
  circleClass[c].classList.add('active');
  
}



















