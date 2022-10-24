const listCasacas = [];

//CAMISETAS//

const argentina = {
    "precio": 35000,
    "id": 1,
    "file": 'img/arg2022.jpg',
    "title": "Selección de Argentina",
    }

const alemania = {
    "precio": 15000,
    "id": 2,
    "file": 'img/alemania.jpg',
    "title": "Selección de Alemania",
}

const espania = {
    "precio": 18000,
    "id": 3,
    "file": 'img/espana.jpg',
    "title": "Selección de España",
}

const japon = {
    "precio": 12000,
    "id": 4,
    "file": 'img/japon.jpg',
    "title": "Selección de Japón",
}

const francia = {
    "precio": 20000,
    "id": 5,
    "file": 'img/francia-opo.jpg',
    "title": "Selección de Francia",
}

const independiente = {
    "precio": 7500,
    "id": 6,
    "file": 'img/indep.jpg',
    "title": "Club Atlético Independiente",
}
const items = document.getElementById('items');

const casacas = [argentina, alemania, espania, japon, francia, independiente];

let selectCasacas = document.getElementById('btn-comprar');

items.addEventListener('click', e => {
    let remove = document.getElementsByName('removeElement');
    console.log(e.target.id);
    listCasacas.splice(parseInt(e.target.id), 1);
    localStorage.removeItem('casacas');
    localStorage.setItem('casacas',JSON.stringify(listCasacas));
    items.innerHTML = "";
    let suma = 0;
    listCasacas.forEach((x,index)=>{
        console.log(suma)
        suma = suma - x.precio;
        items.innerHTML += "<div class='row col-lg-9'><div class='col-lg-5'><img src= "+ x.file +"  style='width: 80px; height: 70px' class='card-img-top'>"+ x.title + "</div><div class='col-lg-2 mt-3 fw-bolder'> $"+ x.precio + " </div><div class='col-lg-2'>  <button class='btn-eliminar mb-2 mt-3' value="+x.id+" name='removeElement' id="+index+">Eliminar</button></div></div>";
    })
    totalItems.innerHTML = "<b> Precio total: $" +Math.abs(suma)+"</b>";

    if(items.innerHTML == "")
        document.getElementById("footer-carrito").style.display  = "inline";


})


let totalItems = document.getElementById('total-items');

document.querySelectorAll("#btn-comprar").forEach((e) => {
    e.addEventListener("click", () => {
        items.innerHTML = "";
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

            if(localStorage != null)
                    document.getElementById("footer-carrito").style.display = "none";

        });
});

