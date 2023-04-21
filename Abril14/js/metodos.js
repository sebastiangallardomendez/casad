//funcion que valida formulario a travez de jquery validate

$(function(){


    $("#mi-formulario").validate({

        rules:{

            nom:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            pass:{
                required:true
            },
            fono:{
                required:true,
                number:true
            },
            fecha:{
                required:true
            },
            pass2:{
                required:true,
                equalTo:pass
            }

        },//rules
        messages:{
            nom:{
                required: 'Ingrese nombre Usuario',
                minlength: 'Caracteres insuficientes (3)'
            },
            correo:{
                required: 'Ingrese correo',
                email: 'Formato Invalido'
            },
            pass:{
                required: 'Ingrese contraseña',
                minlength: 'Caracteres insuficientes (8)'
            },
            fono:{
                required: 'Ingrese Telefono',
                minlength: 'Caracteres insuficientes (9)'
            },
            fecha:{
                required: 'seleccione una fecha valida',
                min: 'fecha no corresponde'
            },
            pass2:{
                required: 'Ingrese la contraseña',
                minlength: 'Caracteres insuficientes (8)',
                equalTo: 'Contraseña no coinciden'
            },
        },





    })//valida  

})//fuction