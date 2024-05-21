const form = document.getElementById('Registro-Form');

form.addEventListener('submit', eventoEnvio => {

    eventoEnvio.defaultPrevented();

    if (ValidarForm()) {
        form.submit();
    }

});

function ImprimeErrores(campo,mensaje) {

    const campoerror = document.getElementById(`${campo}-Error`);
    campoerror.innerText = mensaje;
}

function ValidacionEmail(email) {

    const expRegulares = '^[^\s@]+@[^\s@]+\.[^\s@]+$';
    return expRegulares.test(email);
} 

function ValidarForm() {

    const nombre = document.getElementById('nombre').value;
    const apellido= document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;
    const confircontraseña = document.getElementById('confirm-password').value;
    const pais= document.getElementById('Pais').value;


    if (nombre === '') {
        ImprimeErrores('nombre', 'Porfavor ingresa tu nombre');
        return false
    }
    if (apellido === '') {
        ImprimeErrores('apellido', 'Porfavor ingresa tu apellido');
        return false
    }
    if (ValidacionEmail(email)) {
        ImprimeErrores('email', 'Porfavor ingresa tu email');
        return false
    }
    if (contraseña === '') {
        ImprimeErrores('password', 'Porfavor ingresa una contraseña');
        return false
    }
    if (confircontraseña === '') {
        ImprimeErrores('confirm-password', 'Porfavor ingresa la misma contraseña');
        return false
    }
    if (pais === '') {
        ImprimeErrores('Pais', 'Porfavor ingresa tu País');
        return false
    }
    
    return false;
}