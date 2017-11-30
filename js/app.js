/* DECLARANDO VARIABLES */
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

/* Número de estudiantes por sede y promo*/
var studentsPromo20162AQP = Object.keys(data.AQP['2016-2'].students);// arreglo con el nro de estudiantes
var studentsPromo20171AQP = Object.keys(data.AQP['2017-1'].students);
var studentsPromo20171CDMX = Object.keys(data.CDMX['2017-1'].students);
var studentsPromo20172CDMX = Object.keys(data.CDMX['2017-2'].students);
var studentsPromo20162LIM = Object.keys(data.LIM['2016-2'].students);
var studentsPromo20171LIM = Object.keys(data.LIM['2017-1'].students);
var studentsPromo20172LIM = Object.keys(data.LIM['2017-2'].students);
var studentsPromo20162SCL = Object.keys(data.SCL['2016-2'].students);
var studentsPromo20171SCL = Object.keys(data.SCL['2017-1'].students);
var studentsPromo20172SCL = Object.keys(data.SCL['2017-2'].students);

/* Sumatoria del nro de Estudiantes por sede y promo */
var sumAQP = studentsPromo20162AQP.length + studentsPromo20171AQP.length;
var sumCDMX = studentsPromo20171CDMX.length + studentsPromo20172CDMX.length;
var sumLIM = studentsPromo20162LIM.length + studentsPromo20171LIM.length + studentsPromo20172LIM.length;
var sumSCL = studentsPromo20162SCL.length + studentsPromo20171SCL.length + studentsPromo20172SCL.length;


/* Agregando funcionalidad */


/* window.addEventListener('load', function() {
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
}); */


