var campoFiltro = document.querySelector("#filtrar__tabela");

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");
console.log(this.value)
   
if(this.value.length > 0){
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var tdnome = paciente.querySelector(".info-nome");
        var nome = tdnome.textContent;
        var expre = new RegExp(this.value, "i");// "new RegExp(this.value, "i")" - Essa função serve para dizer que se caso houver alguma letra  ou numero com o começo de algo "passado", irá acontecer alguma coisa... o "i" serve para dizer que se a letra digitada for minuscula, mostra as maiusculas tambem...
        if(!expre.test(nome)){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
    }
    
}else{
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
}
}})