// Con Vue, stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data.
var header = new Vue(
 {
   el: 'header',
   data: {
     title: "Hello Word!",
     myImage: "img/img01.jpg"
   },
 }
);

var main = new Vue(
 {
   el: 'main',
   data: {
     myImage: "img/img01.jpg"
   },
 }
);
