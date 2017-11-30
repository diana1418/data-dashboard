
/* Declarando variables */

var containerTotalStudents = document.getElementsByClassName('container-total');
var subSelectPromo = null;

/* var dataSedes = data; */
var arequipa = data.AQP; // {2016-2: {…}, 2017-1: {…}}
var mexico = data.CDMX;
var lima = data.LIM;
var santiago = data.SCL;

 /* Arreglo de las promociones por sede */
var promosAQP = Object.keys(arequipa); // ["2016-2", "2017-1"]
var promosCDMX = Object.keys(mexico); // ["2017-1", "2017-2"]
var promosLIM = Object.keys(lima); // ["2016-2", "2017-1", "2017-2"]
var promosSCL = Object.keys(santiago); // ["2016-2", "2017-1", "2017-2"]

/* suma de todas las estudiantes de las 2 promos de Arequipa */
var suma = (Object.keys(data.AQP['2016-2'].students)).length + (Object.keys(data.AQP['2017-1'].students)).length;



    // subSelectPromo = document.createElement('div');
  // imagesContainer.appendChild(subSelectPromo);
 
  // for (var i = 0; i < arrayPromo.length; i++)
  //   createImage(arrayPromo[i], sede);

/*
 * Funcionalidad de tu producto
 */
window.addEventListener('load', function() {
  // Obteniendo los datos
  var tabs = document.querySelectorAll('.tabs');
  var paragraphs = document.querySelectorAll('.paragraphs');
  // Muestra los contenedores
  function toggleTab(elem) {
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener('click', showContainers);
    }
  }
  function showContainers() {
    for (var j = 0; j < parrafos.length; j++) {
      if (this.dataset.text === parrafos[j].dataset.name) {
        if (paragraphs[j].classList.contains('hidden')) {
          paragraphs[j].classList.remove('hidden');
        } 
      } else {
        paragraphs[j].classList.add('hidden');
      }
    }
  }

  toggleTab(tabs);
});

/* window.addEventListener('load', function() {


  
  var selectSede = document.getElementById('sede');

  /*
  //var subSelectSede = null;
  sede.addEventListener('change', function() {
    if (option.value) {
      prom.addEventListener('change', function() {
        data['option.value'];
      });
    }
  });
 }) */


