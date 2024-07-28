
alert("BIENVENIDO A W SOLUCIONES FINANCIERAS, ESTA APP TE AYUDA A CALCULAR TU SOLICITUD DE PRESTAMO. ¡EMPECEMOS!")

let usuario =prompt("POR FAVOR INGRESA TU NOMBRE");

alert("HOLA "+usuario.toUpperCase());

let monto = parseFloat(prompt("POR FAVOR INGRESA EL MONTO DE DINERO QUE NECESITAS SIN UTILIZAR PUNTOS NI COMAS"));

if (isNaN(monto)){
    alert("EL VALOR INGRESADO NO ES NUMERICO, POR FAVOR INTENTA NUEVAMENTE");
    logout();
}

let plazo = prompt("POR FAVOR SELECCIONA DIGITANDO ENTRE 1 Y 5 LA CANTIDAD DE CUOTAS QUE DESEAS DIFERIR TU PRESTAMO.\n\n 1=> 6 MESES\n 2=> 12 MESES\n 3=> 18 MESES\n 4=> 24 MESES\n 5=> 36 MESES" );

let interes = 0.10

let cuota = 0

    
if (plazo == 1) {

    alert("ELEGISTE CUOTAS DIFERIDAS A 6 MESES");

    alert("EL VALOR DE CADA CUOTA MENSUAL ES DE " + operacion(monto,interes,6))

    alert("PODRAS OBSERVAR EL DESPLIEGUE DE TUS CUOTAS EN TU CONSOLA")

    for(let cuota = 1; cuota <=6; cuota++){

        console.log("cuota "+cuota+" =", operacion(monto,interes,6));
    }

    mensajeAgradecimiento()

}else if(plazo ==2){

    alert("ELEGISTE CUOTAS DIFERIDAS A 12 MESES");

    alert("EL VALOR DE CADA CUOTA MENSUAL ES DE " + operacion(monto,interes,12))

    alert("PODRAS OBSERVAR EL DESPLIEGUE DE TUS CUOTAS EN TU CONSOLA")

    for(let cuota = 1; cuota <=12; cuota++){

        console.log("cuota "+cuota+" =", operacion(monto,interes,12));
    }

    mensajeAgradecimiento()


}else if(plazo ==3){

    alert("ELEGISTE CUOTAS DIFERIDAS A 18 MESES");

    alert("EL VALOR DE CADA CUOTA MENSUAL ES DE " + operacion(monto,interes,18))

    alert("PODRAS OBSERVAR EL DESPLIEGUE DE TUS CUOTAS EN TU CONSOLA")

    for(let cuota = 1; cuota <=18; cuota++){

        console.log("cuota "+cuota+" =", operacion(monto,interes,18));
    }

    mensajeAgradecimiento()

}else if(plazo ==4){

    alert("ELEGISTE CUOTAS DIFERIDAS A 24 MESES");

    alert("EL VALOR DE CADA CUOTA MENSUAL ES DE " + operacion(monto,interes,24))

    alert("PODRAS OBSERVAR EL DESPLIEGUE DE TUS CUOTAS EN TU CONSOLA")

    for(let cuota = 1; cuota <=24; cuota++){

        console.log("cuota "+cuota+" =", operacion(monto,interes,24));
    }

    mensajeAgradecimiento()

}else if(plazo ==5){

    alert("ELEGISTE CUOTAS DIFERIDAS A 36 MESES");

    alert("EL VALOR DE CADA CUOTA MENSUAL ES DE " + operacion(monto,interes,36))

    alert("PODRAS OBSERVAR EL DESPLIEGUE DE TUS CUOTAS EN TU CONSOLA")

    for(let cuota = 1; cuota <=36; cuota++){

        console.log("cuota "+cuota+" =", operacion(monto,interes,36));
    }

    mensajeAgradecimiento()

}else{

    alert("LA OPCION INGRESADA NO SE ENCUENTRA DENTRO DEL MENU DE OPCIONES, POR FAVOR INTENTA NUEVAMENTE");
}


function operacion(monto,interes,plazo){

    monto = (monto * interes) + monto

    return (monto / plazo).toFixed(0);
}

function mensajeAgradecimiento(){

    alert("MUCHAS GRACIAS POR USAR NUESTRA APP. ¡ESPERO HAYA SIDO DE GRAN AYUDA PARA TI!")
}
















    





