function cambiarContrasena(){
    var contrasenaOld = document.getElementById('password-old').value;
    var contrasenaNew = document.getElementById('password-new').value;
    var contrasenaCopy = document.getElementById('password-copy').value;
     
    let contador = 0
    let contadorU = 0
    for (var contrasena of credencial.values() ){
      if (contrasena == contrasenaOld){
          for (var usuario of credencial.keys()){
              if (contador == contadorU){
                  break
              }
            contadorU += 1
            }
          break
      }
      contador += 1
    }
 
    if (contador < credencial.size){
        if (contrasenaNew == contrasenaCopy){
            credencial.set(usuario,contrasena)
            alert("Contraseña cambiada correctamente")
            window.close();
            return false;
        }else{
            alert("su nueva contraseña no coincide")
        }
    }else{
        alert("su contraseña actual es incorrecta")
    }
}