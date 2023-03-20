var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");


/*pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function (){
        this.remove(); // O "this" serve para dizer que elemento foi  selecionado.
        //paciente.style.display = "none";  Outra opção de Remoção...
    })
})*/ 

tabela.addEventListener("dblclick", (event)=>{
    var paidoevnto = event.target;//event.target - serve para dizer que o elemento pai foi selecionado, que no caso foi a tabela.
    var filho = paidoevnto.parentNode;// e o parentNode - serve para dizer que o filho do "event.target" foi selecionado, que no caso, quando houver dois cliques ele irá ser removido e não a tabela inteira.

    filho.classList.add("fade__out") // O elemento classlist está pegando um efeito do css que faz o elemento demorar a sair...

    setTimeout(function(){ // A função setTimeout, serve para dizer que quer algo seja executado apenas quando um tempo for passado(que é especificado no fim da página), pois nesse caso computador não está esperando o tempo do efeito do CSS, e ai precisa do "setTimeout"...
        filho.remove();
    },500); // esse ",500);" no fim da página, é o tanto de tempo que a página vai esperar ate executar o código, que no caso é meio segundo(0.5s), se fosse 1 segundo seria 1000, se fosse 2 e meio seria 2500...

    
    
})

//dblclick - Serve para dizer que quando houver 2 clicks acontecera algo...

