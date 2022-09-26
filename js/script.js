let correoUsuario = '';
function ingreso(){

    let ingreso = false;

    for (let i=2; i>=0; i--){

    correoUsuario = prompt('¡Bienvenido/a a Casacashop! Ingresá tu correo:');

    if (validarCorreo(correoUsuario))
    {
    ingreso = true;
    break;
    }
    else{
        alert('Dirección inválida. Te quedan '+i+' cantidad de intentos.');

    }
    }
    return ingreso;
}

function validarCorreo (correoUsuario){

if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(correoUsuario)){
    return true;
}
else{
    return false;
}

}

if (ingreso()){
    let opcion1= prompt('Aquí podrás encontrar las mejores camisetas de fútbol. Elegí una de las siguientes opciones para tu compra: \n1-Camiseta de Argentina \n2-Camiseta de Brasil \nPresioná X para finalizar.')
    while (opcion1 != 'X' && opcion1 != 'x'){

        switch(opcion1){
            case '1': 
            let opcion2= prompt('¿En cuántas cuotas sin interés quiere pagar la camiseta de Argentina? \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');

            let precioArgentina = 12000;

            switch (opcion2) {

                case '1': let opcionFinalArg1 = prompt('El precio es: $'+precioArgentina + '\n1- ¡Messirve!: Comprar \n2- Retornar al menú.');

                if (opcionFinalArg1 == '1'){
                    alert('¡Muchas gracias por tu compra!')
                
                }
                break;

                case '2': let opcionFinalArg2 = prompt('El precio es de dos cuotas: $'+precioArgentina/2 + '\n1- ¡Messirve!:Comprar \n2- Retornar al menú');

                if (opcionFinalArg2 == '1'){
                    alert('¡Muchas gracias por tu compra!')
                
                }

                break;

                case '3': let opcionFinalArg3 = prompt('El precio es de tres cuotas de: $'+precioArgentina/3 + '\n1- ¡Messirve!:Comprar \n2- Retornar al menú');

                if (opcionFinalArg3 == '1'){
                    alert('¡Muchas gracias por tu compra!')
                
                }

                break;

                default: alert('Opción inválida');

                break;
            }

            break;
            
            case '2':
                let opcion3= prompt('¿En cuántas cuotas sin interés quiere pagar la camiseta de Brasil? \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');
                let precioBrasil = 9000;
                switch (opcion3) {
                    
                    case '1': let opcionFinalBr1 = prompt('El precio es: $'+precioBrasil + '\n1- Comprar \n2- Ni loco. ¡Aguante la Scaloneta, papá!. Retornar al menú.');

                    if (opcionFinalBr1 == '1'){
                        alert('¡Muchas gracias por tu compra!')
                    
                    }
                    break;
    
                    case '2': let opcionFinalBr2 = prompt('El precio es de dos cuotas de: $'+precioBrasil/2 + '\n1- Comprar \n2- Ni loco. ¡Aguante la Scaloneta, papá!. Retornar al menú.');

                    if (opcionFinalBr2 == '1'){
                        alert('¡Muchas gracias por tu compra!')
                    
                    }
                    break;
    
                    case '3': let opcionFinalBr3 = prompt('El precio es de tres cuotas de: $'+precioBrasil/3 + '\n1- Comprar \n2- Ni loco. ¡Aguante la Scaloneta, papá!. Retornar al menú.');

                    if (opcionFinalBr3 == '1'){
                        alert('¡Muchas gracias por tu compra!')
                    
                    }
                    break;
    
                    default: alert('Opción inválida');
                    break;
                }
                
                break;
                default: alert('Opción inválida');
                break;
        }
        opcion1= prompt('Aquí podrás encontrar las mejores camisetas de fútbol. Elegí una de las siguientes opciones para tu compra: \n1-Camiseta de Argentina \n2-Camiseta de Brasil \nPresioná X para finalizar.')

                

    }

}else{
    alert('Inicio de sesión inválido. Intentá nuevamente.')
}

