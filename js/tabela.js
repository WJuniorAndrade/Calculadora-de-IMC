
function validar (imc){
    var tabela = document.querySelector(".tabela")

    var magreza = tabela.querySelector("#magreza")
    var normal = tabela.querySelector("#normal")
    var sobrepeso = tabela.querySelector("#sobrepeso")
    var obesidade = tabela.querySelector("#obesidade") 
    var obesidadeGrave = tabela.querySelector("#obesidadeGrave") 


    if (imc <= 18.5) {
        magreza.classList.add("status-paciente")
        
    } else {
        magreza.classList.remove("status-paciente")
    }

    if (imc >= 18.6 && imc <= 24.9) {
        normal.classList.add("status-paciente")
        console.log(imc)
    } else {
        normal.classList.remove("status-paciente")
    }

    if (imc >= 25 && imc <= 29.9) {
        sobrepeso.classList.add("status-paciente")
    }else {
        sobrepeso.classList.remove("status-paciente")
    }

    if (imc >= 30 && imc <= 39.9) {
        obesidade.classList.add("status-paciente")
    }else {
        obesidade.classList.remove("status-paciente")
    }

    if (imc >= 40) {
        obesidadeGrave.classList.add("status-paciente")
    }else {
        obesidadeGrave.classList.remove("status-paciente")
    }
    
    return imc;
}