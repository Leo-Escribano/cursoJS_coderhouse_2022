//Uso de librería como alerta de ingreso al sitio//

Swal.fire({
    title: 'Ingresaste a Casacashop.',
    text: 'Aquí podrás encontrar las mejores camisetas oficiales de equipos de fútbol.',
    confirmButtonText: 'VER OFERTAS',
    backdrop: '#000000',
    showClass: {
    popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
}
})

//Array de objeto de camisetas//

const listCasacas = [];
const casacas = [];

fetch('./js/listcasacas.json') //un json dentro del proyecto con la info en español
    .then((response) =>  response.json())
    .then((data) => {
        console.log("JSON: "+data)
        casacas = data;
        console.log(casacas)
    })

const items = document.getElementById('items');


let selectCasacas = document.getElementById('btn-comprar');

// Función para borrar ítems del carrito//

document.addEventListener('click',function(e){
    if(e.target && e.target.name== 'removeElement'){
        let remove = document.getElementsByName('removeElement');
        listCasacas.splice(parseInt(e.target.id), 1);
        localStorage.removeItem('casacas');
        localStorage.setItem('casacas',JSON.stringify(listCasacas));
        items.innerHTML = "";
        let suma = 0;
        listCasacas.forEach((x,index)=>{
            suma = suma - x.precio;
            items.innerHTML += "<div class='row col-lg-9'><div class='col-lg-5'><img src= "+ x.file +"  style='width: 80px; height: 70px' class='card-img-top'>"+ x.title + "</div><div class='col-lg-2 mt-3 fw-bolder'> $"+ x.precio + " </div><div class='col-lg-2'>  <button class='btn-eliminar mb-2 mt-3' value="+x.id+" name='removeElement' id="+index+">Eliminar</button></div></div>";
        })
    
        if(suma == 0){
            totalItems.style.display = 'none';
            comprarItems.style.display = 'none';
        }
        else{
            totalItems.innerHTML = "<b> Precio total: $" +Math.abs(suma)+"</b>";
            comprarItems.innerHTML = "<div><button id='comprar-btn' class='btn-comprar'>Finalizar compra</button></div>";
    
        }
    
        if(items.innerHTML == "")
            document.getElementById("footer-carrito").style.display  = "inline";
    
    
    }
});

let totalItems = document.getElementById('total-items');
let comprarItems = document.getElementById('comprar-btn');

//Alert para confirmar o cancelar compra//

comprarItems.addEventListener("click", () => {
    Swal.fire({
        title: '¿Querés finalizar la compra?',
        text: "Tu carrito está listo.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, quiero comprar.'
    }).then((result) => {
        if (result.isConfirmed) {
        totalItems.style.display = 'none';
        comprarItems.style.display = 'none';
        document.getElementById("footer-carrito").style.display  = "inline";
        localStorage.removeItem('casacas')
        listCasacas.splice(0, listCasacas.length);
        items.innerHTML = "";
            Swal.fire(
            'Tu compra fue realizada con éxito.',
            'Gracias por confiar en CASACASHOP.',
            'success',
        )
        }
    })
})


//Función para agregar ítems en el carrito//

document.querySelectorAll("#btn-comprar").forEach((e) => {
    e.addEventListener("click", () => {
        items.innerHTML = "";
        totalItems.style.display = 'inline';
        comprarItems.style.display = 'inline';
        let result = casacas.find(x=>x.id == e.value);
        listCasacas.push(result);
            localStorage.setItem('casacas',JSON.stringify(listCasacas));
            let list= JSON.parse(localStorage.getItem ('casacas'));
            let suma = 0;

            list.forEach((x,index)=>{
                suma = suma + x.precio;
                items.innerHTML += "<div class='row col-lg-9'><div class='col-lg-5'><img src= "+ x.file +"  style='width: 80px; height: 70px' class='card-img-top'>"+ x.title + "</div><div class='col-lg-2 mt-3 fw-bolder'> $"+ x.precio + " </div><div class='col-lg-2'>  <button class='btn-eliminar mb-2 mt-3' value="+x.id+" name='removeElement' id="+index+">Eliminar</button></div></div>";

            })
            totalItems.innerHTML = "<b>Precio total: $" +Math.abs(suma)+"</b>";
            comprarItems.innerHTML = "<div><button class='btn-comprar' id='comprar-btn'>Finalizar compra</button></div>";

            if(localStorage != null)
                    document.getElementById("footer-carrito").style.display = "none";

        

        });
});


//Resta un json con info para usar, fetch, promesas y asincronía. Revisar que no aparezcan errores por consola. Sacar console.log TODOS
