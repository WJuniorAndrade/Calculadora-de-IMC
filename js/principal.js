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

    var imc = peso / (altura * altura);

    var painel = document.querySelector(".painel");
    painel.classList.add("text-painel");
    painel.textContent= `${nome} seu IMC é: ${imc.toFixed(2)}`;

     validar(imc);
     formulario.reset()

     window.location.href= "#link-table"

})

/* erros de sitaxe, não sei o que esta acontecndo de errado no codigo */