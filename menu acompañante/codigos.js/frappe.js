//FUNCIONES PARA CREAR Y LEER ID PARA SESION
//funciona con iu=json NO COLOCAR JSON.SALIDAIU
//EL SIGUIENTE IF VERIFICA QUE IU NO ESTE VACIO Y LUEGO QUE COINCIDA CON EL ID DEL LOCAL STORAGE

let menudesplegable = document.querySelector(".menudesplegable");
let nav = document.querySelector(".nav");
let escuchamenu= "open";
menudesplegable.addEventListener("click", ()=>{
    if(escuchamenu == "open"){
        nav.style.display = "grid";
        escuchamenu = "close";
    }else{
        nav.style.display = "none";
        escuchamenu = "open";
    }
})

//PRECCIOS
let precio_frappe1 = document.getElementById("precio_frappe1");
let precio_frappe2 = document.getElementById("precio_frappe2");
let precio_frappe3 = document.getElementById("precio_frappe3");
let precio_frappe4 = document.getElementById("precio_frappe4");
let precio_frappe5 = document.getElementById("precio_frappe5");
let precio_frappe6 = document.getElementById("precio_frappe6");
let precio_frappe7 = document.getElementById("precio_frappe7");
let precio_frappe8 = document.getElementById("precio_frappe8");
//DESCRIPCION
let descripcion_frappe1 = document.getElementById("descripcion_frappe1");
let descripcion_frappe2 = document.getElementById("descripcion_frappe2");
let descripcion_frappe3 = document.getElementById("descripcion_frappe3");
let descripcion_frappe4 = document.getElementById("descripcion_frappe4");
let descripcion_frappe5 = document.getElementById("descripcion_frappe5");
let descripcion_frappe6 = document.getElementById("descripcion_frappe6");
let descripcion_frappe7 = document.getElementById("descripcion_frappe7");
let descripcion_frappe8 = document.getElementById("descripcion_frappe8");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "Oreo": precio_frappe1.innerHTML = "$"+json[i].precio,
        descripcion_frappe1.innerHTML = json[i].descripcion;
        break;
        case "Nutella": precio_frappe2.innerHTML = "$"+json[i].precio,
        descripcion_frappe2.innerHTML = json[i].descripcion;
        break;
        case "Bon o bon": precio_frappe3.innerHTML = "$"+json[i].precio,
        descripcion_frappe3.innerHTML = json[i].descripcion;
        break;
        case "Block": precio_frappe4.innerHTML = "$"+json[i].precio,
        descripcion_frappe4.innerHTML = json[i].descripcion;
        break;
        case "Dulce de leche": precio_frappe5.innerHTML = "$"+json[i].precio,
        descripcion_frappe5.innerHTML = json[i].descripcion;
        break;
        case "Caramelo": precio_frappe6.innerHTML = "$"+json[i].precio,
        descripcion_frappe6.innerHTML = json[i].descripcion;
        break;
        case "Smoothie": precio_frappe7.innerHTML = "$"+json[i].precio,
        descripcion_frappe7.innerHTML = json[i].descripcion;
        break;
        case "Milk shake": precio_frappe8.innerHTML = "$"+json[i].precio,
        descripcion_frappe8.innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR frappe
const inputfrappe1 = document.querySelector(".inputfrappe1");
const inputfrappe2 = document.querySelector(".inputfrappe2");
const inputfrappe3 = document.querySelector(".inputfrappe3");
const inputfrappe4 = document.querySelector(".inputfrappe4");
const inputfrappe5 = document.querySelector(".inputfrappe5");
const inputfrappe6 = document.querySelector(".inputfrappe6");
const inputfrappe7 = document.querySelector(".inputfrappe7");
const inputfrappe8 = document.querySelector(".inputfrappe8");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//frappeS
const cantidadfrappe1 = document.getElementById("cantidadfrappe1");
const cantidadfrappe2 = document.getElementById("cantidadfrappe2");
const cantidadfrappe3 = document.getElementById("cantidadfrappe3");
const cantidadfrappe4 = document.getElementById("cantidadfrappe4");
const cantidadfrappe5 = document.getElementById("cantidadfrappe5");
const cantidadfrappe6 = document.getElementById("cantidadfrappe6");
const cantidadfrappe7 = document.getElementById("cantidadfrappe7");
const cantidadfrappe8 = document.getElementById("cantidadfrappe8");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//frappe
function frappe1 (){
    inputfrappe1.style.display = "grid";
}
function frappe2 (){
    inputfrappe2.style.display = "grid";
}
function frappe3 (){
    inputfrappe3.style.display = "grid";
}
function frappe4 (){
    inputfrappe4.style.display = "grid";
}
function frappe5 (){
    inputfrappe5.style.display = "grid";
}
function frappe6 (){
    inputfrappe6.style.display = "grid";
}
function frappe7 (){
    inputfrappe7.style.display = "grid";
}
function frappe8 (){
    inputfrappe8.style.display = "grid";
}

//BOTONES DE SELECCION
//frappeS
//frappe1
function selecfrappe1 (){
    comida.style.display = "grid";
    inputfrappe1.style.display = "none";
    num = cantidadfrappe1.value;
    objpedido.push(num + " Oreo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Oreo");
    cantidadfrappe1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecfrappe2 (){
    comida.style.display = "grid";
    inputfrappe2.style.display = "none";
    num = cantidadfrappe2.value;
    objpedido.push(num + " Nutella");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Nutella");
    cantidadfrappe2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecfrappe3 (){
    comida.style.display = "grid";
    inputfrappe3.style.display = "none";
    num = cantidadfrappe3.value;
    objpedido.push(num + " Bon o bon");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Bon o bon");
    cantidadfrappe3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecfrappe4 (){
    comida.style.display = "grid";
    inputfrappe4.style.display = "none";
    num = cantidadfrappe4.value;
    objpedido.push(num + " Block");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Block");
    cantidadfrappe4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecfrappe5 (){
    comida.style.display = "grid";
    inputfrappe5.style.display = "none";
    num = cantidadfrappe5.value;
    objpedido.push(num + " Dulce de leche");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Dulce de leche");
    cantidadfrappe5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecfrappe6 (){
    comida.style.display = "grid";
    inputfrappe6.style.display = "none";
    num = cantidadfrappe6.value;
    objpedido.push(num + " Caramelo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Caramelo");
    cantidadfrappe6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecfrappe7 (){
    comida.style.display = "grid";
    inputfrappe7.style.display = "none";
    num = cantidadfrappe7.value;
    objpedido.push(num + " Smoothie");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Smoothie");
    cantidadfrappe7.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecfrappe8 (){
    comida.style.display = "grid";
    inputfrappe8.style.display = "none";
    num = cantidadfrappe8.value;
    objpedido.push(num + " Milk shake");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Milk shake");
    cantidadfrappe8.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR

//frappe1
function cancelarfrappe1 (){
    inputfrappe1.style.display = "none";
    cantidadfrappe1.value = null;
}
function cancelarfrappe2 (){
    inputfrappe2.style.display = "none";
    cantidadfrappe2.value = null;
}
function cancelarfrappe3 (){
    inputfrappe3.style.display = "none";
    cantidadfrappe3.value = null;
}
function cancelarfrappe4 (){
    inputfrappe4.style.display = "none";
    cantidadfrappe4.value = null;
}
function cancelarfrappe5 (){
    inputfrappe5.style.display = "none";
    cantidadfrappe5.value = null;
}
function cancelarfrappe6 (){
    inputfrappe6.style.display = "none";
    cantidadfrappe6.value = null;
}
function cancelarfrappe7 (){
    inputfrappe7.style.display = "none";
    cantidadfrappe7.value = null;
}
function cancelarfrappe8 (){
    inputfrappe8.style.display = "none";
    cantidadfrappe8.value = null;
}

