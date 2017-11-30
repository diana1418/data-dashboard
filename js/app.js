// // window.onload = start;

// /* Declarando variables */

// // var dataSedes = data;
// var arequipa = data.AQP; // {2016-2: {…}, 2017-1: {…}}
// var mexico = data.CDMX;
// var lima = data.LIM;
// var santiago = data.SCL;

// // var selectSede = document.getElementById('sede');
// // var selectPromo = document.getElementById('prom');
//  var contenedor = document.getElementById('container-students');

// /* DATOS DE LAS ESTUDIANTES */
// /* Arreglo de las promociones por sede */
// var promosAQP = Object.keys(arequipa); // ["2016-2", "2017-1"]
// var promosCDMX = Object.keys(mexico); // ["2017-1", "2017-2"]
// var promosLIM = Object.keys(lima); // ["2016-2", "2017-1", "2017-2"]
// var promosSCL = Object.keys(santiago); // ["2016-2", "2017-1", "2017-2"]

// /* suma de todas las estudiantes de las 2 promos de Arequipa */
// var allStudentsForSede = (Object.keys(data.AQP['2016-2'].students)).length + (Object.keys(data.AQP['2017-1'].students)).length; // 15+15

// /* Arreglos de datos a mostrar */
// var arrayStudentsAQP = [data.AQP['2016-2']['students']]; // Arreglo de 15 objetos: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// /* Declarando constantes */
// // var PROMOAQP = Object.keys(arequipa);

// addStudents(arrayStudentsAQP);

// function addStudents(arrayStudentsAQP) { 
//   /* Imrpime en consola los nombres, link de foto, ptje HSE y TECH de las alumnas según SEDE: AREQUIPA, PROMO: 2016-2*/
//   for (var i = 0; i < arrayStudentsAQP.length; i++) {
//     console.log(arrayStudentsAQP[i]['name']);
//     // console.log(arrayStudentsAQP[i]['photo']);
//     // document.write(arrayStudentsAQP[i]['sprints']);
//     // console.log(arrayStudentsAQP[i]['sprints']['score']['hse']);
//   }

// }

// // function agreeStudents(arrayStudentsAQP) {
// //   var nombre = document.createElement('div');
// //   contenedor.appendChild(nombre);  
// // }

// // /* Función que se ejecuta al cargar la página */
// // function start() { 
 
// // }

// // function changeProm() {

// // }

// // function totalStudents() {
// //   var name = document.createElement('h3');
// //   name.textContent = 'MOLLY';
// //   students.appendChild(name);
// // }

// // /* Puedes hacer uso de la base de datos a través de la variable `data`*/
// // // console.log(data);
