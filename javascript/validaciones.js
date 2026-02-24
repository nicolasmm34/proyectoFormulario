/* Variables globales */
let nombre, apellido, fecha, email, pass, repass;

/* Constante */
const mensajeError = "Este campo es obligatorio"; 

/* Funciones */
let validaciones = () =>{
    /* Variables locales */
    let nombreOk, apellidoOk, fechaOk, emailOk, passOk, repassOk;

    /* Obtención de valores del formulario quitando espacios en blanco por delante y por detrás
    con .trim() */
    nombre = document.formulario.nombre.value.trim();
    apellido = document.formulario.apellido1.value.trim();
    fecha = document.getElementById("fecha").value.trim();
    email = document.formulario.email.value.trim();
    pass = document.formulario.pass.value.trim();
    repass = document.formulario.repass.value.trim();

    /* Validación de los valores comprobando vacíos */
    nombreOk = !estaVacio(nombre, "errorNombre", mensajeError);
    apellidoOk = !estaVacio(apellido, "errorApellido", mensajeError);
    if(!estaVacio(fecha, "errorFecha", mensajeError)) fechaOk = validarFecha();
    if(!estaVacio(email, "errorEmail", mensajeError)) emailOk = validarCorreo();
    if(!estaVacio(pass, "errorPass", mensajeError)) passOk = validarContrasenia();
    if(!estaVacio(repass, "errorRepass", mensajeError)) repassOk = validarConfirmacion();  

    /* Comprobación de todas las validaciones */
    if(nombreOk && apellidoOk && fechaOk && emailOk && passOk && repassOk){
        alert("La cuenta ha sido creada correctamente");
        /* Actualización de la página para reiniciar el formulario */
        window.location.reload();
    }
}

let estaVacio = (valor, id, mensaje) =>{
    if(valor == ""){ 
        document.getElementById(id).innerHTML = mensaje;
        return true;
    }
    /* "\u00A0" es el equivalente en JavaScript de "&nbsp;" */
    document.getElementById(id).innerHTML = "\u00A0";
    return false; 
}

let validarContrasenia = () =>{
    if(pass.length < 8){
        document.getElementById("errorPass").innerHTML = "La contraseña debe tener al menos 8 caracteres";
        return false;
    }
    return true;
}

let validarConfirmacion = () =>{
    if(pass != repass){
        document.getElementById("errorRepass").innerHTML = "La contraseñas no coinciden";
        return false;
    }
    return true;
}

let validarFecha = () =>{
    let hoy = new Date();
    let fechaDate = new Date(fecha);
    /* La diferencia devuelve el resultado en milisegundos. Hacemos un cálculo en años redondeando 
    los días a 365.25 para tener en cuenta los bisiestos */
    let diferencia = (hoy - fechaDate) / (1000 * 3600 * 24 * 365.25);

    if(fechaDate > hoy){
        document.getElementById("errorFecha").innerHTML = "La fecha debe de ser anterior a hoy";
        return false;
    }

    if(diferencia < 18){
        document.getElementById("errorFecha").innerHTML = "Para iniciar sesión debe ser mayor de edad";
        return false;
    }

    document.getElementById("errorFecha").innerHTML = "";
    return true;
}

let validarCorreo = () =>{
    if(email.includes("@") && email.includes(".")){
        document.getElementById("errorEmail").innerHTML = "";
        return true;
    }
    document.getElementById("errorEmail").innerHTML = "Formato de correo incorrecto";
    return false;
}