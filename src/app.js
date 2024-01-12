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

  combinaciones.forEach(combinacion => {
    console.log(combinacion);
  });

  let domainList = document.getElementById("domainList");

  combinaciones.forEach(combinacion => {
    let listItem = document.createElement("li");
    listItem.textContent = combinacion;

    if (domainList) {
      domainList.appendChild(listItem);
    }
  });
};
