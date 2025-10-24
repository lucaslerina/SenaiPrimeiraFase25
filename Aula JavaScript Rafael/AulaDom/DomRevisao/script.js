let usuario

function cadastrarUsuario(){
    //console.log("AquiTaCerto")
    usuario = document.getElementById("InputUsuario").value 
    
    document.getElementById("InputUsuario").value='' 

    document.getElementById("resultado").innerHTML = "Usuario " + usuario + " cadastrado com sucesso"

}