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

//DESCRIPCION
let descripcion_waffle1 = document.getElementById("descripcion_waffle1");
let descripcion_waffle2 = document.getElementById("descripcion_waffle2");
let descripcion_waffle3 = document.getElementById("descripcion_waffle3");
let descripcion_waffle4 = document.getElementById("descripcion_waffle4");
let descripcion_waffle5 = document.getElementById("descripcion_waffle5");
let descripcion_waffle6 = document.getElementById("descripcion_waffle6");
//PRECIO
let precio_waffle1 = document.getElementById("precio_waffle1");
let precio_waffle2 = document.getElementById("precio_waffle2");
let precio_waffle3 = document.getElementById("precio_waffle3");
let precio_waffle4 = document.getElementById("precio_waffle4");
let precio_waffle5 = document.getElementById("precio_waffle5");
let precio_waffle6 = document.getElementById("precio_waffle6");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "Waffle Nutella": precio_waffle1.innerHTML = "$"+json[i].precio,
        descripcion_waffle1.innerHTML = json[i].descripcion;
        break;
        case "Waffle Dulce de leche banana": precio_waffle2.innerHTML = "$"+json[i].precio,
        descripcion_waffle2.innerHTML = json[i].descripcion;
        break;
        case "Waffle Dulce de leche galletas": precio_waffle3.innerHTML = "$"+json[i].precio,
        descripcion_waffle3.innerHTML = json[i].descripcion;
        break;
        case "Waffle Clasico": precio_waffle4.innerHTML = "$"+json[i].precio,
        descripcion_waffle4.innerHTML = json[i].descripcion;
        break;
        case "Waffle Frutal": precio_waffle5.innerHTML = "$"+json[i].precio,
        descripcion_waffle5.innerHTML = json[i].descripcion;
        break;
        case "Waffle Verduras": precio_waffle6.innerHTML = "$"+json[i].precio,
        descripcion_waffle6.innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR waffle
const inputwaffle1 = document.querySelector(".inputwaffle1");
const inputwaffle2 = document.querySelector(".inputwaffle2");
const inputwaffle3 = document.querySelector(".inputwaffle3");
const inputwaffle4 = document.querySelector(".inputwaffle4");
const inputwaffle5 = document.querySelector(".inputwaffle5");
const inputwaffle6 = document.querySelector(".inputwaffle6");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//waffleS
const cantidadwaffle1 = document.querySelector(".ingresonumero1");
const cantidadwaffle2 = document.querySelector(".ingresonumero2");
const cantidadwaffle3 = document.querySelector(".ingresonumero3");
const cantidadwaffle4 = document.querySelector(".ingresonumero4");
const cantidadwaffle5 = document.querySelector(".ingresonumero5");
const cantidadwaffle6 = document.querySelector(".ingresonumero6");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//waffle
function waffle1 (){
    inputwaffle1.style.display = "grid";
}
function waffle2 (){
    inputwaffle2.style.display = "grid";
}
function waffle3 (){
    inputwaffle3.style.display = "grid";
}
function waffle4 (){
    inputwaffle4.style.display = "grid";
}
function waffle5 (){
    inputwaffle5.style.display = "grid";
}
function waffle6 (){
    inputwaffle6.style.display = "grid";
}

//BOTONES DE SELECCION
//waffleS
//waffle1
function selecwaffle1 (){
    comida.style.display = "grid";
    inputwaffle1.style.display = "none";
    num = cantidadwaffle1.value;
    objpedido.push(num + " Waffle con Nutella");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Waffle Nutella");
    cantidadwaffle1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecwaffle2 (){
    comida.style.display = "grid";
    inputwaffle2.style.display = "none";
    num = cantidadwaffle2.value;
    objpedido.push(num + " Waffle con dulce de leche, banana");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Waffle Dulce de leche banana");
    cantidadwaffle2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecwaffle3 (){
    comida.style.display = "grid";
    inputwaffle3.style.display = "none";
    num = cantidadwaffle3.value;
    objpedido.push(num + " Waffle con dulce de leche, galletas");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Waffle Dulce de leche galletas");
    cantidadwaffle3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecwaffle4 (){
    comida.style.display = "grid";
    inputwaffle4.style.display = "none";
    num = cantidadwaffle4.value;
    objpedido.push(num + " Waffle Clasico");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Waffle Clasico");
    cantidadwaffle4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecwaffle5 (){
    comida.style.display = "grid";
    inputwaffle5.style.display = "none";
    num = cantidadwaffle5.value;
    objpedido.push(num + " Waffle Frutal");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Waffle Frutal");
    cantidadwaffle5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecwaffle6 (){
    comida.style.display = "grid";
    inputwaffle6.style.display = "none";
    num = cantidadwaffle6.value;
    objpedido.push(num + " Waffle con Verduras");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Waffle Verduras");
    cantidadwaffle6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR
//CANCELAR waffleS
//waffle1
function cancelarwaffle1 (){
    inputwaffle1.style.display = "none";
    cantidadwaffle2.value = null;
}
function cancelarwaffle2 (){
    inputwaffle2.style.display = "none";
    cantidadwaffle2.value = null;
}
function cancelarwaffle3 (){
    inputwaffle3.style.display = "none";
    cantidadwaffle3.value = null;
}
function cancelarwaffle4 (){
    inputwaffle4.style.display = "none";
    cantidadwaffle4.value = null;
}
function cancelarwaffle5 (){
    inputwaffle5.style.display = "none";
    cantidadwaffle5.value = null;
}
function cancelarwaffle6 (){
    inputwaffle6.style.display = "none";
    cantidadwaffle6.value = null;
}

//HORA
const d = new Date();
let hora = d.getHours();
let minutos = d.getMinutes();
let horaComienzo = hora+":"+minutos;


//BOTON PARA ELIMINAR VISTA PREVIA
let clickParaIU=0;
function enviar(){
    if(clickParaIU == 0){
        guardar_localstorage();
        clickParaIU++;
    }
let pedid = objNombre.toString();
let numero = objCantidad.toString();
    $.post('cliente.php',{
        nombre: pedid,
        numero: numero,
        //horaComienzo: horaComienzo
    },function(date){
        console.log(date);
    })
    objpedido.splice(0);
    objNombre.splice(0);
    objCantidad.splice(0);
    alert("su pedidio fue enviado con exto");
    pedido.innerHTML = "";
    comida.style.display = "none";
    
}
//FUNCION PARA CERRAR CUENTA Y MESA
/*function pedircuenta(){
    $.post('cliente.php',{
        horafinal: horaComienzo
    },
    function(dato){
        alert("su cuenta está en camino.");
    })
    localStorage.removeItem(identificador_del_cliente);
    cuenta.style.display = "none";
}*/
//BOTON PARA ELIMINAR
function eliminar(){
    objpedido.splice(0);
    objNombre.splice(0);
    objCantidad.splice(0);
    pedido.innerHTML = "";
    comida.style.display = "none";
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
        location.href = "../menu acompañante/waffle.html";
    }
    //console.log(obtener_localstorage());
}