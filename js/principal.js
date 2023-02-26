let tela = document.querySelector("#tela")
let nome = document.querySelector("#nome")
let altura = document.querySelector("#altura")
let peso = document.querySelector("#peso")



function calcular() {
    var altu = Number(altura.value)
    var pes = Number(peso.value)
    soma = pes / (altu * altu)
    tela.innerHTML=` ${usuario} seu IMC é ${soma}`
    
}





/* Pesquisar como faria o codigo para ixibir tudo na tela */