const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    nombre : /^[a-zA-Z0-9\_\-]{4,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    clave: /^.{4,12}$/,
    clave2: /^.{4,12}$/
}

const campos = {
    nombre: false,
    email: false,
    clave: false,
    clave2: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "email" :
            validarCampo(expresiones.email, e.target, "email");
        break;
        case "clave":
            validarCampo(expresiones.email, e.target, "clave");
            validarClave2();
        break;
        case "clave2":
            validarClave2();
        break;
                
    }
}

const validarCampo = (expresiones, input, campo) => {
    if (expresiones.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupoincorrecto");
        codument.getElementById(`grupo__${campo}`).classList.add("formulario__grupocorrecto");
        document.querySelector(`#grupo__${campo}i`).classList.remove("fa-solid fa-circle-exclamation");
        document.querySelector(`#grupo__${campo}i`).classList.add("fa-solid fa-circle-check");
        document.querySelector(`grupo__${campo}.formulario__inputerror`).classList.remove("formulario__inputerror-activado");
        campos[campo]= true;
        console.log("funciona");

    } else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupoincorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupocorrecto");
        document.querySelector(`#grupo__${campo}i`).classList.add("fa-solid fa-circle-exclamation");
        document.querySelector(`#grupo__${campo}i`).classList.remove("fa-solid fa-circle-check");
        document.querySelector(`grupo__${campo}.formulario__inputerror`).classList.add("formulario__inputerror-activado");
        campos[campo]= false;
        console.log("funciona");

    }
}

const validarClave2 = () => {
    let inputClave = document.getElementById("clave");
    let inputClave2 = document.getElementById("clave2");

    if (inputClave.value !== inputClave2.value) {
        document.getElementById(`grupo__clave2`).classList.add("formulario__grupoincorrecto");
        codument.getElementById(`grupo__clave2`).classList.remove("formulario__grupocorrecto");
        document.querySelector(`#grupo__clave2 i`).classList.add("fa-solid fa-circle-exclamation");
        document.querySelector(`#grupo__clave2 i`).classList.remove("fa-solid fa-circle-check");
        document.querySelector(`#grupo__clave2 .formulario__inputerror`).classList.remove("formulario__inputerror-activado");
        campos[clave]= false;
        console.log("funciona");

    } else {
        document.getElementById(`grupo__clave2`).classList.remove("formulario__grupoincorrecto");
        codument.getElementById(`grupo__clave2`).classList.add("formulario__grupocorrecto");
        document.querySelector(`#grupo__clave2 i`).classList.remove("fa-solid fa-circle-exclamation");
        document.querySelector(`#grupo__clave2 i`).classList.add("fa-solid fa-circle-check");
        document.querySelector(`#grupo__clave2 .formulario__inputerror`).classList.remove("formulario__inputerror-activado");
        campos[clave]= true;
        console.log("funciona");

    }

}

$inputs.forEach((input) => {
    $inputs.addEventListener("keyup", validarFormulario);
    $inputs.addEventListener("blur", validarFormulario);


});

$formulario.addEventListener("submit", e => {
    e.preventDefault();
});

    if (campos.nombre && campos.email && campos.clave && campos.clave2) {
        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activado");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove ("formulario__mensaje-exito-activado");
        }, 3000);

        document.querySelectorAll(".formulario_grupocorrecto"). forEach((icono) => {
            icono.classList.remove("formulario_grupocorrecto");

        });

        setTimeout(() => {
            Location.reload();
        }, 3000);
    } else {
    
    }