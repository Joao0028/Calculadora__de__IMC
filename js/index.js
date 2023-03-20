var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++ ){
    
    var paciente = pacientes[i];
    
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    console.log(peso);
    
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    console.log(altura)
    
    var tdgordura = paciente.querySelector(".info-gordura");
    var gordura = tdgordura.textContent;
    console.log(gordura);

    var tdimc = paciente.querySelector(".info-imc");

    var pesoEvalido = true;
    var alturaEvalida = true;

    if(peso <= 0 || peso >= 400){
        console.log("Peso inválido!")
        var pesoEvalido = false;
        tdimc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")//Muito importante: o classList serve para chamar uma classe feita no css, e o add("") para colocar o nome da classe do css, assim fazendo o que tem no css chamado...
        tdpeso.style.color = "red"
        tdimc.style.color = "red"
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!")
        alturaEvalida = false;
        tdimc.textContent = "Altura inválida!";
        paciente.style.backgroundColor = "lightcoral"
        tdaltura.style.color = "red"
        tdimc.style.color = "red"
    }
    if(pesoEvalido === false && alturaEvalida === false){
        tdimc.textContent = "Peso e Altura inválidos!"
        paciente.style.backgroundColor = "lightcoral"
        tdpeso.style.color = "red"
        tdimc.style.color = "red"
    }


    if(pesoEvalido && alturaEvalida){
        var imc = peso / (altura * altura);
    console.log(imc);

    tdimc.textContent = imc.toFixed(2);
    }

}












//Anotações da Aula:

//textContent ex: paciente.textContent = "João" - Então, a propiedade textContent serve para selecionar algum valor e modifica para outro desejado, como nesse exemplo que peguei o nome Paulo e mudei para João... 