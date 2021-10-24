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
    
    if(errores.length > 0){

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
    }else{
        //Almacernarlo en la BB. DD.
    }
}

export{
    guardarTestimonial
}