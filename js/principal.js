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

    var titulo = document.querySelector("#titulo");
    titulo.textContent= imc.toFixed(2);

    validar();

})

function validar (imc){
    var tabela = document.querySelector("#tabela")

    var magreza = tabela.querySelector("#magreza")
    var normal = tabela.querySelector("#normal")
    var sobrepeso = tabela.querySelector("#sobrepeso")
    var obesidade = tabela.querySelector("#obesidade") 
    var obesidadeGrave = tabela.querySelector("#obesidadeGrave") 


    if (imc <= 18,5) {
        magreza.classList.add("status-paciente")
    }

    if (imc >= 18,6 && imc <= 24,9) {
        normal.classList.add("status-paciente")
    }

    if (imc >= 25 && imc <= 29,9) {
        sobrepeso.classList.add("status-paciente")
    }

    if (imc >= 30 && imc <= 39,9) {
        obesidade.classList.add("status-paciente")
    }

    if (imc >= 40) {
        obesidadeGrave.classList.add("status-paciente")
    }
}

/* erros de sitaxe, não sei o que esta acontecndo de errado no codigo */