/* var formulario = document.querySelector(".formulario"); */
/* var nome = formulario.querySelector("#nome");
var altura = formulario.querySelector("#altura");
var peso = formulario.querySelector("#peso") */




var calcular = document.querySelector("#calcular")

calcular.addEventListener("click", function (event){
    event.preventDefault();
    
    var formulario = document.querySelector(".formulario");

    nome = formulario.nome.value;
    altura = formulario.altura.value;
    peso = formulario.peso.value;

    var somar = peso / (altura * altura);

    var titulo = document.querySelector("#titulo");
    titulo.textContent= somar.toFixed(2);

})