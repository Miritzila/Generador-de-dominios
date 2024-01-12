/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronombre = ["el", "nuestro"];
let adj = ["genial", "gran"];
let sust = ["corredor", "mapache"];

window.onload = function() {
  // Array para almacenar las combinaciones
  let combinaciones = [];

  // Generar combinaciones utilizando forEach
  pronombre.forEach(p => {
    adj.forEach(a => {
      sust.forEach(s => {
        let combinacion = p + a + s + ".com";
        combinaciones.push(combinacion);
      });
    });
  });

  // Mostrar las combinaciones en la consola
  combinaciones.forEach(combinacion => {
    console.log(combinacion);
  });

  // Obtén el elemento de la lista en el HTML
  let domainList = document.getElementById("domainList");

  // Agrega cada combinación como un elemento de lista
  combinaciones.forEach(combinacion => {
    let listItem = document.createElement("li");
    listItem.textContent = combinacion;

    // Agrega el elemento al final de la lista,
    if (domainList) {
      domainList.appendChild(listItem);
    }
  });
};
