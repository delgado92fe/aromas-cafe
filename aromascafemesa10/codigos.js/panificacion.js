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
let descripcion_panificacion1 = document.getElementById("descripcion_panificacion1");
let descripcion_panificacion2 = document.getElementById("descripcion_panificacion2");
let descripcion_panificacion3 = document.getElementById("descripcion_panificacion3");
let descripcion_panificacion4 = document.getElementById("descripcion_panificacion4");
let descripcion_panificacion5 = document.getElementById("descripcion_panificacion5");
let descripcion_panificacion6 = document.getElementById("descripcion_panificacion6");
let descripcion_panificacion7 = document.getElementById("descripcion_panificacion7");
let descripcion_panificacion8 = document.getElementById("descripcion_panificacion8");
let descripcion_panificacion9 = document.getElementById("descripcion_panificacion9");
let descripcion_panificacion10 = document.getElementById("descripcion_panificacion10");
let descripcion_panificacion11 = document.getElementById("descripcion_panificacion11");
let descripcion_panificacion12 = document.getElementById("descripcion_panificacion12");
//PRECIO
let precio_panificacion1 = document.getElementById("precio_panificacion1");
let precio_panificacion2 = document.getElementById("precio_panificacion2");
let precio_panificacion3 = document.getElementById("precio_panificacion3");
let precio_panificacion4 = document.getElementById("precio_panificacion4");
let precio_panificacion5 = document.getElementById("precio_panificacion5");
let precio_panificacion6 = document.getElementById("precio_panificacion6");
let precio_panificacion7 = document.getElementById("precio_panificacion7");
let precio_panificacion8 = document.getElementById("precio_panificacion8");
let precio_panificacion9 = document.getElementById("precio_panificacion9");
let precio_panificacion10 = document.getElementById("precio_panificacion10");
let precio_panificacion11 = document.getElementById("precio_panificacion11");
let precio_panificacion12 = document.getElementById("precio_panificacion12");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "Media lunas": precio_panificacion1.innerHTML = "$"+json[i].precio,
        descripcion_panificacion1.innerHTML = json[i].descripcion;
        break;
        case "Criollos": precio_panificacion2.innerHTML = "$"+json[i].precio,
        descripcion_panificacion2.innerHTML = json[i].descripcion;;
        break;
        case "Tostadas": precio_panificacion3.innerHTML = "$"+json[i].precio,
        descripcion_panificacion3.innerHTML = json[i].descripcion;
        break;
        case "Media lunas con Jamon y Queso": precio_panificacion4.innerHTML = "$"+json[i].precio,
        descripcion_panificacion4.innerHTML = json[i].descripcion;;
        break;
        case "Media lunas con Dulce": precio_panificacion5.innerHTML = "$"+json[i].precio,
        descripcion_panificacion5.innerHTML = json[i].descripcion;;
        break;
        case "Media lunas Nutella": precio_panificacion6.innerHTML = "$"+json[i].precio,
        descripcion_panificacion6.innerHTML = json[i].descripcion;;
        break;
        case "Mermeladas": precio_panificacion7.innerHTML = "$"+json[i].precio,
        descripcion_panificacion7.innerHTML = json[i].descripcion;;
        break;
        case "Manteca": precio_panificacion8.innerHTML = "$"+json[i].precio,
        descripcion_panificacion8.innerHTML = json[i].descripcion;;
        break;
        case "Dulce de Leche": precio_panificacion9.innerHTML = "$"+json[i].precio,
        descripcion_panificacion9.innerHTML = json[i].descripcion;;
        break;
        case "Palta": precio_panificacion10.innerHTML = "$"+json[i].precio,
        descripcion_panificacion10.innerHTML = json[i].descripcion;;
        break;
        case "Huevo": precio_panificacion11.innerHTML = "$"+json[i].precio,
        descripcion_panificacion11.innerHTML = json[i].descripcion;;
        break;
        case "Omelet": precio_panificacion12.innerHTML = "$"+json[i].precio,
        descripcion_panificacion12.innerHTML = json[i].descripcion;;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR panificacion
const inputpanificacion1 = document.querySelector(".inputpanificacion1");
const inputpanificacion2 = document.querySelector(".inputpanificacion2");
const inputpanificacion3 = document.querySelector(".inputpanificacion3");
const inputpanificacion4 = document.querySelector(".inputpanificacion4");
const inputpanificacion5 = document.querySelector(".inputpanificacion5");
const inputpanificacion6 = document.querySelector(".inputpanificacion6");
const inputpanificacion7 = document.querySelector(".inputpanificacion7");
const inputpanificacion8 = document.querySelector(".inputpanificacion8");
const inputpanificacion9 = document.querySelector(".inputpanificacion9");
const inputpanificacion10 = document.querySelector(".inputpanificacion10");
const inputpanificacion11 = document.querySelector(".inputpanificacion11");
const inputpanificacion12 = document.querySelector(".inputpanificacion12");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//panificacion
const cantidadpanificacion1 = document.getElementById("cantidadpanificacion1");
const cantidadpanificacion2 = document.getElementById("cantidadpanificacion2");
const cantidadpanificacion3 = document.getElementById("cantidadpanificacion3");
const cantidadpanificacion4 = document.getElementById("cantidadpanificacion4");
const cantidadpanificacion5 = document.getElementById("cantidadpanificacion5");
const cantidadpanificacion6 = document.getElementById("cantidadpanificacion6");
const cantidadpanificacion7 = document.getElementById("cantidadpanificacion7");
const cantidadpanificacion8 = document.getElementById("cantidadpanificacion8");
const cantidadpanificacion9 = document.getElementById("cantidadpanificacion9");
const cantidadpanificacion10 = document.getElementById("cantidadpanificacion10");
const cantidadpanificacion11 = document.getElementById("cantidadpanificacion11");
const cantidadpanificacion12 = document.getElementById("cantidadpanificacion12");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//panificacion
function panificacion1 (){
    inputpanificacion1.style.display = "grid";
}
function panificacion2 (){
    inputpanificacion2.style.display = "grid";
}
function panificacion3 (){
    inputpanificacion3.style.display = "grid";
}
function panificacion4 (){
    inputpanificacion4.style.display = "grid";
}
function panificacion5 (){
    inputpanificacion5.style.display = "grid";
}
function panificacion6 (){
    inputpanificacion6.style.display = "grid";
}
function panificacion7 (){
    inputpanificacion7.style.display = "grid";
}
function panificacion8 (){
    inputpanificacion8.style.display = "grid";
}
function panificacion9 (){
    inputpanificacion9.style.display = "grid";
}
function panificacion10 (){
    inputpanificacion10.style.display = "grid";
}
function panificacion11 (){
    inputpanificacion11.style.display = "grid";
}
function panificacion12 (){
    inputpanificacion12.style.display = "grid";
}

//BOTONES DE SELECCION
//panificacionS
//panificacion1
function selecpanificacion1 (){
    comida.style.display = "grid";
    inputpanificacion1.style.display = "none";
    num = cantidadpanificacion1.value;
    objpedido.push(num + " Media Lunas");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Media lunas");
    cantidadpanificacion1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion2 (){
    comida.style.display = "grid";
    inputpanificacion2.style.display = "none";
    num = cantidadpanificacion2.value;
    objpedido.push(num + " Criollos");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Criollos");
    cantidadpanificacion2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion3 (){
    comida.style.display = "grid";
    inputpanificacion3.style.display = "none";
    num = cantidadpanificacion3.value;
    objpedido.push(num + " Tostadas");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Tostadas");
    cantidadpanificacion3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion4 (){
    comida.style.display = "grid";
    inputpanificacion4.style.display = "none";
    num = cantidadpanificacion4.value;
    objpedido.push(num + " Media lunas con Jamon y Queso");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Media lunas con Jamon y Queso");
    cantidadpanificacion4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion5 (){
    comida.style.display = "grid";
    inputpanificacion5.style.display = "none";
    num = cantidadpanificacion5.value;
    objpedido.push(num + " Medias luna con Dulce de leche");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Media lunas con Dulce de leche");
    cantidadpanificacion5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion6 (){
    comida.style.display = "grid";
    inputpanificacion6.style.display = "none";
    num = cantidadpanificacion6.value;
    objpedido.push(num + " Medias luna con nutella");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Media lunas con nutella");
    cantidadpanificacion6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion7 (){
    comida.style.display = "grid";
    inputpanificacion7.style.display = "none";
    num = cantidadpanificacion7.value;
    objpedido.push(num + " Mermelada");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Mermelada");
    cantidadpanificacion7.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion8 (){
    comida.style.display = "grid";
    inputpanificacion8.style.display = "none";
    num = cantidadpanificacion8.value;
    objpedido.push(num + " Manteca");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Manteca");
    cantidadpanificacion8.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion9 (){
    comida.style.display = "grid";
    inputpanificacion9.style.display = "none";
    num = cantidadpanificacion9.value;
    objpedido.push(num + " Dulce de Leche");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Dulce de Leche");
    cantidadpanificacion9.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion10 (){
    comida.style.display = "grid";
    inputpanificacion10.style.display = "none";
    num = cantidadpanificacion10.value;
    objpedido.push(num + " Palta");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Palta");
    cantidadpanificacion10.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion11 (){
    comida.style.display = "grid";
    inputpanificacion11.style.display = "none";
    num = cantidadpanificacion11.value;
    objpedido.push(num + " Huevo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Huevo");
    cantidadpanificacion11.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpanificacion12 (){
    comida.style.display = "grid";
    inputpanificacion12.style.display = "none";
    num = cantidadpanificacion12.value;
    objpedido.push(num + " Omelet");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Omelet");
    cantidadpanificacion12.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR

//panificacion1
function cancelarpanificacion1 (){
    inputpanificacion1.style.display = "none";
    cantidadpanificacion1.value = null;
}
function cancelarpanificacion2 (){
    inputpanificacion2.style.display = "none";
    cantidadpanificacion2.value = null;
}
function cancelarpanificacion3 (){
    inputpanificacion3.style.display = "none";
    cantidadpanificacion3.value = null;
}
function cancelarpanificacion4 (){
    inputpanificacion4.style.display = "none";
    cantidadpanificacion4.value = null;
}
function cancelarpanificacion5 (){
    inputpanificacion5.style.display = "none";
    cantidadpanificacion5.value = null;
}
function cancelarpanificacion6 (){
    inputpanificacion6.style.display = "none";
    cantidadpanificacion6.value = null;
}
function cancelarpanificacion7 (){
    inputpanificacion7.style.display = "none";
    cantidadpanificacion7.value = null;
}
function cancelarpanificacion8 (){
    inputpanificacion8.style.display = "none";
    cantidadpanificacion8.value = null;
}
function cancelarpanificacion9 (){
    inputpanificacion9.style.display = "none";
    cantidadpanificacion9.value = null;
}
function cancelarpanificacion10 (){
    inputpanificacion10.style.display = "none";
    cantidadpanificacion10.value = null;
}
function cancelarpanificacion11 (){
    inputpanificacion11.style.display = "none";
    cantidadpanificacion11.value = null;
}
function cancelarpanificacion12 (){
    inputpanificacion12.style.display = "none";
    cantidadpanificacion12.value = null;
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
    //cuenta.style.display = "block";
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
        location.href = "../menu acompañante/panificacion.html";
    }
    //console.log(obtener_localstorage());
}