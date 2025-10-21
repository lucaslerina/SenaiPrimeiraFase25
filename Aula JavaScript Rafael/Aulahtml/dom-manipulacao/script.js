function efetuarlogin(){
    let resultado = document.getElementById("resultadoLogin")
    console.log(resultado)
    
    let user = document.getElementById("Username").value
  
    /*if(user == "Lucas"){
        alert ("Login Efetuado com Sucesso")
    }else{
        alert("Credenciais Incorretas")
    }*/
  
        if (user === "Lucas"){
    resultado.innerHTML = "Login com sucesso"
   }else{
    resultado.innerHTML = "credenciais incorretas"

   }
}


function mostrarMensagem(){
    alert ("É o brazino...")
    alert ("O jogo da galera.")
}

function executarExercicio(){
    //let nome = prompt("Qual o seu nome?")
    //alert("Olá " + nome)
    let nome = document.getElementById("entrada").value 
    document.getElementById("resultadoExercicio").innerHTML = "Olá " + nome
}