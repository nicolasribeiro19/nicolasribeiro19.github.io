function acessar(){
    
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if(usuario == "mario" && senha == "123")
    {
        window.location.replace("Página2.html");
    }
    else
    {
        usuario.value = ""
        senha.value = ""
        alert("Dados Incorretos");
    }
    
}