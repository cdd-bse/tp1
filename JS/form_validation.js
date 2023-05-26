var form = document.getElementById('form');
window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validarNombre(){
    var letters = /^[A-Za-z]{4,20}$/;
    var nombre = document.form.nom;
    limpiarError(nombre);
    if(nombre.value.match(letters)){
        return true;
    } else {
        alertify.alert('Verificar Nombre', 'Lo sentimos, tu nombre debe tener entre 4 y 20 caracteres. Solo letras admitidas.', function(){alertify;});
        error(nombre);
        document.form.nom.focus();
        return false;
    }
}

function validarApellido(){
    var letters = /^[A-Za-z]{4,20}$/;
    var apellido = document.form.ape;
    limpiarError(apellido);
    if(apellido.value.match(letters)){
        return true;
    } else {
        alertify.alert('Verificar Apellido', 'Lo sentimos, tu apellido debe tener entre 4 y 20 caracteres. Solo letras admitidas.', function(){alertify;});
        document.form.nom.focus();
        error(apellido);
        return false;
    }
}

function validarEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    var email = document.form.email;
    limpiarError(email);
    if(email.value.match(mailformat)){
        return true;
    } else {
        alertify.alert('Verificar Email', 'Ingresa un correo electrónico válido.', function(){alertify;});
        document.form.nom.focus();
        error(email);
        return false;
    }
}

function validarTelefono(){
    var numbers = /^[0-9]{8,40}$/;
    var telefono = document.form.tel;
    limpiarError(telefono);
    if(telefono.value.match(numbers)){
        return true;
    } else {
        alertify.alert('Verificar Teléfono', 'Lo sentimos, tu teléfono debe tener entre 8 y 40 dígitos. Solo números admitidos.', function(){alertify;});
        document.form.nom.focus();
        error(telefono);
        return false;
    }
}

function validarMensaje(){
    var letters = /^[a-zA-Z0-9\s]{4,200}$/;
    var mensaje = document.form.msg;
    limpiarError(mensaje);
    if(mensaje.value.match(letters)){
        return true;
    } else {
        alertify.alert('Verificar Mensaje', 'Lo sentimos, tu mensaje debe estar compuesto por letras y números. Debe tener entre 4 y 200 caracteres.', function(){alertify;});
        document.form.nom.focus();
        error(mensaje);
        return false;
    }
}

function validar(e){
    if (validarNombre() && validarApellido() && validarEmail() && validarTelefono() && validarMensaje()){
        enviarForm();
    } else {
        e.preventDefault();
        return false;
    }
}

function enviarForm(){
    const $form = document.querySelector('#form');
    $form.addEventListener('submit', handleSubmit);
    async function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok){
            alertify.alert('Mensaje enviado', 'Muchas gracias por tu mensaje. En breve nos pondremos en contacto.', function(){alertify;});              
        }
        this.reset();
        return true; 
    }
}

function error(elemento){
    elemento.className="error";
    elemento.focus();
}

function limpiarError(elemento){
    elemento.className="";
}
