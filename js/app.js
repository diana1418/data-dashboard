
/* Declarando variables */

/* var dataSedes = data; */
var arequipa = data.AQP; // {2016-2: {…}, 2017-1: {…}}
var mexico = data.CDMX;
var lima = data.LIM;
var santiago = data.SCL;

/* suma de todas las estudiantes de las 2 promos de Arequipa */
 var allStudentsForSede = (Object.keys(data.AQP['2016-2'].students)).length + (Object.keys(data.AQP['2017-1'].students)).length;


add
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


