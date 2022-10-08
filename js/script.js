//OBJETO//

class camiseta{
    
    constructor (pais, talle, precio){

    this.pais = pais;
    this.talle = talle;
    this.precio = parseFloat(precio);

}

descuentoEnEfectivo(){
    this.precio = this.precio*0.8;
}

}

const argentina = new camiseta('argentina','m', 12000);
const brasil = new camiseta('brasil','l', 9000);
const francia = new camiseta ('francia','s',10000);
const chile = new camiseta ('chile', 'xl', 11000);

brasil.descuentoEnEfectivo();
console.log(brasil.precio);

argentina.descuentoEnEfectivo()
console.log(argentina.precio);

francia.descuentoEnEfectivo()
console.log(francia.precio);


//array + métodos de búsqueda y filtrado//

const selecciones = [argentina, brasil, francia, chile];
selecciones.pop();
console.log(selecciones);

console.log('El index de la camiseta de Francia es ' + selecciones.indexOf(francia));

console.log(selecciones.includes('Senegal'));
console.log(selecciones.includes(argentina));
console.log(selecciones.includes('España'));
console.log(selecciones.includes(brasil));
console.log(selecciones.includes(francia));


const filtradoPrecio = selecciones.find((selecciones)=>selecciones.precio>=9600);
console.log(filtradoPrecio);



function ingreso(){

    let ingreso = false;

    for (let i=2; i>=0; i--){

    let keyword = prompt('Bienvenido a CASACASHOP. Ingresá el nombre del país de la camiseta que estás buscando. ');
    const buscarPais = selecciones.filter((selecciones)=>selecciones.pais == keyword.toLowerCase());
    if (buscarPais.length>0)
    { 
    ingreso = true;
    break;
    }
    else{
        alert('No contamos actualmente con esa camiseta. Te quedan '+i+' cantidad de intentos para encontrar la que estás buscando.');

    }
    }
    return ingreso;
}

function validarKeyword (keyword){

if (keyword){
    return true;
}
else{
    return false;
}

}

if (ingreso()){
    let opcion1= prompt('Aquí podrás encontrar las mejores camisetas de fútbol. Elegí una de las siguientes opciones para tu compra: \n1-Camiseta de Argentina \n2-Camiseta de Brasil \n3-Camiseta de Francia \nPresioná X para finalizar.')
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
            
                case '3':
                    let opcion4= prompt('¿En cuántas cuotas sin interés quiere pagar la camiseta de Francia? \n1- 1 cuota \n2- 2 cuotas \n3- 3 cuotas');
                    let precioFrancia = 10000;
                    switch (opcion4) {
                        
                        case '1': let opcionFinalFr1 = prompt('El precio es: $'+precioFrancia + '\n1- Comprar \n2- Ni loco. ¡Aguante la Scaloneta, papá!. Retornar al menú.');
    
                        if (opcionFinalFr1 == '1'){
                            alert('¡Muchas gracias por tu compra!')
                        
                        }
                        break;
        
                        case '2': let opcionFinalFr2 = prompt('El precio es de dos cuotas de: $'+precioFrancia/2 + '\n1- Comprar \n2- Ni loco. ¡Aguante la Scaloneta, papá!. Retornar al menú.');
    
                        if (opcionFinalFr2 == '1'){
                            alert('¡Muchas gracias por tu compra!')
                        
                        }
                        break;
        
                        case '3': let opcionFinalFr3 = prompt('El precio es de tres cuotas de: $'+precioFrancia/3 + '\n1- Comprar \n2- Ni loco. ¡Aguante la Scaloneta, papá!. Retornar al menú.');
    
                        if (opcionFinalFr3 == '1'){
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
        opcion1= prompt('Aquí podrás encontrar las mejores camisetas de fútbol. Elegí una de las siguientes opciones para tu compra: \n1-Camiseta de Argentina \n2-Camiseta de Brasil \n3-Camiseta de Francia \nPresioná X para finalizar.')

                

    }

}else{
    alert('Inicio de sesión inválido. Intentá nuevamente.')
}


