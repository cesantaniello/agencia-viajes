const guardarTestimonial = (req, res) => {

    //Valida formulario
    const {nombre, correo, mensaje} = req.body;
    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje:'El nombre está vacio'});
    }

    if(correo.trim() === ''){
        errores.push({mensaje:'El correo está vacio'});
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje:'El mensaje está vacio'});
    }
    console.log(errores);
}

export{
    guardarTestimonial
}