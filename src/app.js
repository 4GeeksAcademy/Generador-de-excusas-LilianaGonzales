import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // document.querySelector("#button1").addEventListener('click',generarExcusa)
  document.getElementById('button1').addEventListener('click',generarExcusa)
  
}
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function indiceArray(cantidad){
  let indice= Math.floor((Math.random()*cantidad))
  return indice;
}

function generarExcusa(){
let mensajeAleatorio=who[indiceArray(who.length)]+' ' + action[indiceArray(action.length)]+' '+ what[indiceArray(what.length)]+' '+ when[indiceArray(when.length)] ;
return document.getElementById("mensaje").innerHTML = mensajeAleatorio;
};



