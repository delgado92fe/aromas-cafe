//FUNCIONES PARA CREAR Y LEER ID PARA SESION
function generarID(){
    let i = Date.now().toString(30);
    let d = Math.random().toString(30).substring(2);
    return i+d.toString();
}

function obtener_localstorage(){
    let nombre = localStorage.getItem("identificador_del_cliente");
    return nombre;
}

function guardar_localstorage(){
    let identificador_del_cliente = {
        id : generarID()
    };
localStorage.setItem( "identificador_del_cliente", JSON.stringify( identificador_del_cliente ) );
let iu = JSON.stringify( identificador_del_cliente ).substr(7,20);
    $.post('retornoDB_cliente.php',{
        identificador_unico: iu,
    })
}

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

class productos {
    constructor(producto, precio) {
        this.producto = producto;
        this.precio = precio;
    }
}

class orden {
    constructor(pedido, cantidad) {
        this.pedido = pedido;
        this.cantidad = cantidad;
    }
}
let arrayProductos=[];
let arrayOrden=[];
let arrayPedido=[];
let arrayPrecio=[];

var pedido = $.ajax({
    url:'cuenta.php',
    dataType:'text',
    async: false
}).responseText;
json = JSON.parse(pedido);
//console.log(json)

var precio = $.ajax({
    url:'bajadaPrecios.php',
    dataType:'text',
    async: false
}).responseText;
jso = JSON.parse(precio);

//console.log(jso)

let total=0;
let totalFinal=0;
const contenedirInferior = document.querySelector(".inferior");
let salidaTotal = document.querySelector(".salidaTotal");
for(i in json.nombrePedido){
//console.log("i: "+i);
    for(a in jso.nombre){
console.log("i:"+json.nombrePedido[i].trim()+" a"+jso.nombre[a].trim());
        if(json.nombrePedido[i].trim() == jso.nombre[a] || json.nombrePedido[i].trim() == jso.nombre[a]+" con té" || json.nombrePedido[i].trim() == jso.nombre[a]+" con café" || json.nombrePedido[i].trim() == jso.nombre[a]+" con leche descremada" || json.nombrePedido[i].trim() == jso.nombre[a]+" con mate cocido" || json.nombrePedido[i].trim() == jso.nombre[a]+" con leche" || json.nombrePedido[i].trim() == jso.nombre[a]+" con sprite" || json.nombrePedido[i].trim() == jso.nombre[a]+" con agua"){
            total =json.cantidad[i] * jso.precio[a];
            totalFinal += total;
//console.log(json.cantidad[i]+" "+i+" "+json.nombrePedido[i]+" "+total);

            let contenedorCantidad = document.createElement('p');
            let contenedorPedido = document.createElement('p');
            let contenedorPrecio = document.createElement('p');

            contenedorCantidad.textContent = json.cantidad[i];
            contenedorPedido.textContent = json.nombrePedido[i];
            contenedorPrecio.textContent = total;

            contenedirInferior.appendChild(contenedorCantidad);
            contenedirInferior.appendChild(contenedorPedido);
            contenedirInferior.appendChild(contenedorPrecio);

            contenedorCantidad.classList.add("contenedorCantidad");
            contenedorPedido.classList.add("contenedorPedido");
            contenedorPrecio.classList.add("contenedorPrecio");
        }
    }
    //console.log(totalFinal);
}
salidaTotal.innerHTML = totalFinal;

//HORA
const d = new Date();
let hora = d.getHours();
let minutos = d.getMinutes();
let horaComienzo = hora+":"+minutos;


function filaizar(){
    $.post('cliente.php',{
        horafinal: horaComienzo
    },
    function(dato){
        //alert("su cuenta está en camino.");
    })
    location.href="index.html";
    localStorage.removeItem(identificador_del_cliente);
    //alert("finalizado");
}

//SALIDA DE IU
var salida = $.ajax({
    url:'retornoiu.php',
    dataType:'text',
    async:false
}).responseText;
json = JSON.parse(salida);
let iu = json;

if(iu != "vacio"){
    if(iu == obtener_localstorage().substr(7,20)){
        //alert("mismo ID");
        //console.log(obtener_localstorage());
        //cuenta.style.display = "block";
    }else/*(iu == obtener_localstorage().substr(7,20))*/{
        //alert("El ID es diferente");
        //console.log(obtener_localstorage());
        location.href = "../menu acompañante/cafe.html";
    }
    //console.log(obtener_localstorage());
}
