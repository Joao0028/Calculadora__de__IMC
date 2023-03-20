var botaoAdicionar = document.querySelector("#adicionar-paciente")


botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();//Aprendi que a função event.preventDefault(); serve para prevenir o comportamento padrão de um evento, ou seja quando não tinha ela no codigo o padrao do navegador era recarregar o site, e por isso o console log não aparecia, pórem quando foi colocada o padrão foi de fazer somente o console.log("Fui clicado!")
    
    var form = document.querySelector("#form-adiciona");

    // Extraindo as informaçõees dos paciêntes
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Cria as Tr e as TD do paciênte
    var pacientetr = document.createElement("tr");// Aprendi que a função createElement serve para criar um elemento quando acionada.Nesse caso criara uma td - todolist
    pacientetr.classList.add("paciente");

    var nometd = document.createElement("td");
     nometd.classList.add("info-nome")
    var pesotd = document.createElement("td");
     pesotd.classList.add("info-peso")
    var alturatd = document.createElement("td");
     alturatd.classList.add("info-altura")
    var gorduratd = document.createElement("td");
     gorduratd.classList.add("info-gordura")
    var imctd = document.createElement("td");
     imctd.classList.add("info-imc")

    var imc = peso / (altura*altura)

    nometd.textContent = nome;
    pesotd.textContent = peso;
    alturatd.textContent = altura;
    gorduratd.textContent = gordura;
    imctd.textContent = imc.toFixed(2);

    pacientetr.appendChild(nometd)
    pacientetr.appendChild(pesotd)
    pacientetr.appendChild(alturatd)
    pacientetr.appendChild(gorduratd)
    pacientetr.appendChild(imctd)

    console.log(pacientetr)

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacientetr)
    console.log(tabela);


    //Condições para a conta ser realizada


    var altura__valido = true;
    var peso__valido = true;

    if(nome === ""){
        nometd.textContent = ("Fulano")
    }
    if(peso >= 400 || peso <= 0){
        imctd.textContent = ("Peso Inválido!");
        pesotd.textContent = peso;
        peso__valido = false;
        pacientetr.classList.add("paciente-invalido")
        pesotd.classList.add("color__red")
    }
    if(altura >= 3 || altura <= 0){
        imctd.textContent = ("Altura Inválida!")
        alturatd.textContent = altura
        altura__valido = false;
        alturatd.classList.add("color__red")
        pacientetr.classList.add("paciente-invalido")
    }
    if(peso__valido === false && altura__valido === false){
        imctd.textContent = "Peso e Altura Inválidos!"
        pacientetr.classList.add("paciente-invalido")
    }
    if(peso == 0 && altura == 0){
        alturatd.textContent = "0"
        pesotd.textContent = "0"
        imctd.textContent = "Peso e Altura Inválidos!"
        pacientetr.classList.add("paciente-invalido")
        pesotd.classList.add("color__red")
        alturatd.classList.add("color__red")
    }
    if(gordura == 0){
        gorduratd.textContent = "0"
    }
    if(peso == 0){
        pesotd.textContent = "0"
        pesotd.classList.add("color__red")
    }
    if(altura == 0){
        alturatd.textContent = "0"
        alturatd.classList.add("color__red")
    }
    
})