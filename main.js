
var image = document.querySelector(".image-c");

var arrayImages = ["https://gansoapk.github.io/img/image.jpg", 
                   "https://gansoapk.github.io/img/image2.jpg", 
                   "https://gansoapk.github.io/img/image3.jpg", 
                   "https://gansoapk.github.io/img/image4.jpg", 
                   "https://gansoapk.github.io/img/image5.jpg"];
                   
var cantidadImages = arrayImages.length;
var position = crearAleatorio(1, cantidadImages);

image.setAttribute("href", arrayImages[position-1]);


//Generar números aleatorios
function crearAleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
}


var image = document.querySelector(".image-c");

var arrayImages = ["https://gansoapk.github.io/img/image.jpg", 

                   "https://gansoapk.github.io/img/image2.jpg", 

                   "https://gansoapk.github.io/img/image3.jpg", 

                   "https://gansoapk.github.io/img/image4.jpg", 

                   "https://gansoapk.github.io/img/image5.jpg"];

                   

var cantidadImages = arrayImages.length;

var position = crearAleatorio(1, cantidadImages);

image.setAttribute("href", arrayImages[position-1]);

//Generar números aleatorios

function crearAleatorio(inferior, superior) {

  var numPosibilidades = superior - inferior;

  var aleatorio = Math.random() * (numPosibilidades + 1);

  aleatorio = Math.floor(aleatorio);

  return inferior + aleatorio;

}

function newPage() {

  window.open("https://www.mediafire.com/file/5xw7s37dvj9jrl0/MediaFire_-_Getting_Started.pdf/file", "_self");

}

newPage();
