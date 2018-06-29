 //Verificar #1
$('#boton_verificar1').click(function (e) {
    e.preventDefault();
    verificarUsu(1, $('#usu1TipoDocumento').val(), $('#IDusu1NroDocumento').val());
});

function verificarUsu(num, tipoDoc, numDoc) {
    console.log("llegue hasta aca");
    //Validación de CUIT/CUIL/CDI
    if (tipoDoc == 0) {
        var valido = validaCuit(numDoc);
        if (valido == false) {
            console.log("El número de CUIT / CUIL / CDI es incorrecto.", null, null, '145', '300');
            return false;
        }
    }

    if (tipoDoc == 96) { 
        //El DNI debe tener, por lo menos, siete dígitos.
        if (numDoc.length < 7 || parseInt(numDoc) < 1000000 ) {
            console.log("El DNI debe tener, por lo menos, siete dígitos.", null, null, '145', '300');
            return false;
        }
    }

    if (isNaN(numDoc)) {
        console.log("El número es incorrecto.", null, null, '145', '300');
        return false;
    }

    var dataString;
    var nroDocumento;
    if (num == 1) { nroDocumento = $("#IDusu1NroDocumento").val(); }
    else if (num == 2) { nroDocumento = $("#IDusu2NroDocumento").val(); }

    if (num == 2 && $("#IDusu1NroDocumento").val() == $("#IDusu2NroDocumento").val()) {
        console.log("El número de documento no puede ser igual al anterior");
        return false;
    } else if (nroDocumento == "" || nroDocumento == 0) {

        console.log("El número de documento no puede ser vacío o cero.");
        return false;
    } else {
        console.log("llegue hasta aca");
        if (num == 1) dataString = 'tipo=' + $("#usu1TipoDocumento").val() + '&nroDocumento=' + $("#IDusu1NroDocumento").val() + '&sexo=' + $("input:radio[name=radUsu1Sexo]:checked").val();
        else dataString = 'tipo=' + $("#usu2TipoDocumento").val() + '&nroDocumento=' + $("#IDusu2NroDocumento").val() + '&sexo=' + $("input:radio[name=radUsu2Sexo]:checked").val();
        console.log(dataString);
        $.ajax({
            type: "POST",
            // url: "data/accion/ingreso/verificarUsuario.aspx",
            url:"http://www.afip.gob.ar/consultas/data/accion/ingreso/verificarUsuario.aspx",
            data: dataString,
            cache: false,
            success: function (data) {
                mInfo.close();
                var obj = jQuery.parseJSON(data);
                if (obj.result == "error") console.log(obj.texto);
                else if (obj.result == "success") {
                    id = $('#check_tipoUsu1').val();
                    var cuit = formatCuit(obj.usuario.cuil);
                    if (obj.usuario.length == 0) {
                        console.log (obj);
                        //modalError("El número de documento no es válido o no se encuentra registrado. Int&eacute;ntelo nuevamente.");
                        //modalConfirmacion("El número de documento no es válido o no se encuentra registrado. Int&eacute;ntelo nuevamente.", null, null, '200', '390');
                    } else {
                        if (obj.usuario.length > 1) {
                            /*
                            modalConfirmacion("<p>Estimado ciudadano:</p>" +
                                "<p>Existen dos o más CUIT/CUIL/CDI´s asociadas " +
                                "al tipo y número de documento indicado. El sistema registrará la consulta para " +
                                "la primera CUIT/CUIL/CDI que encuentre.</p> " +
                                "<p>Si ésta no es la correcta, deberá efectuar la consulta especificando su CUIT/CUIL/CDI.</p>",
                            null, null, '290', '390');
                            */
                            console.log (obj);

                        }
                        console.log(num,obj.usuario);
                        completarDatos(num, obj.usuario);

                        $("[id^='usu']").change(function (e) {
                            $('#form_modificado').val("true");
                        });
                    }
                }
            },
            error: function () {
                
                console.log(obj.texto);
            }
        });
    }
}