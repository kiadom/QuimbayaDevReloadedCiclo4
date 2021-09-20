function obtenerdatos(){
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('password').value;
    
    if (usuario=="admin" && contraseña=="principal"){
        alert("Bienvenido " + usuario);
        setTimeout(window.open("principal.html"), 2000);
        window.close();
        return false;
    }else{
        alert("Usuario o contraseña incorrectos")  
    }

}