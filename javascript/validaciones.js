let nombre, apellido, fecha, email, pass, repass;
const mensajeError = "Este campo es obligatorio"; 

let validaciones = () =>{
    nombre = document.formulario.nombre.value.trim();
    apellido = document.formulario.apellido1.value.trim();
    fecha = document.getElementById("fecha").value.trim();
    email = document.formulario.email.value.trim();
    pass = document.formulario.pass.value.trim();
    repass = document.formulario.repass.value.trim();

    nombreVacio();
    apellidoVacio();
    fechaVacia();
    if(!emailVacio()) validarCorreo();
    passVacio();
    repassVacio();  
}

let validarFecha = () =>{
    let hoy = new Date();
    let fechaDate = new Date(fecha);
    if(fecha)
}

let validarCorreo = () =>{
    if(email.includes("@") && email.includes(".")){
        document.getElementById("errorEmail").innerHTML = "";
        return true;
    } else {
        document.getElementById("errorEmail").innerHTML = "Formato de correo incorrecto";
        return false;
    }
}

let nombreVacio = () =>{
    if(nombre == ""){ 
        document.getElementById("errorNombre").innerHTML = mensajeError;
        return true;
    }
    document.getElementById("errorNombre").innerHTML = "";
    return false; 
}

let apellidoVacio = () =>{
    if(apellido == ""){ 
        document.getElementById("errorApellido").innerHTML = mensajeError;
        return true;
    }
    document.getElementById("errorApellido").innerHTML = "";
    return false; 
}

let fechaVacia = () =>{
    if(fecha == ""){ 
        document.getElementById("errorFecha").innerHTML = mensajeError;
        return true;
    }
    document.getElementById("errorFecha").innerHTML = "";
    return false; 
}

let emailVacio = () =>{
    if(email == ""){ 
        document.getElementById("errorEmail").innerHTML = mensajeError;
        return true;
    }
    document.getElementById("errorEmail").innerHTML = "";
    return false; 
}

let passVacio = () =>{
    if(pass == ""){ 
        document.getElementById("errorPass").innerHTML = mensajeError;
        return true;
    }
    document.getElementById("errorPass").innerHTML = "";
    return false; 
}

let repassVacio = () =>{
    if(repass == ""){ 
        document.getElementById("errorRepass").innerHTML = mensajeError;
        return true;
    }
    document.getElementById("errorRepass").innerHTML = "";
    return false; 
}