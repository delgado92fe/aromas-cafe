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
let descripcion_cafe1 = document.getElementById("descripcion_cafe1");
let descripcion_cafe2 = document.getElementById("descripcion_cafe2");
let descripcion_cafe3 = document.getElementById("descripcion_cafe3");
let descripcion_cafe4 = document.getElementById("descripcion_cafe4");
let descripcion_cafe5 = document.getElementById("descripcion_cafe5");
let descripcion_cafe6 = document.getElementById("descripcion_cafe6");
let descripcion_cafe7 = document.getElementById("descripcion_cafe7");
let descripcion_cafe8 = document.getElementById("descripcion_cafe8");
let descripcion_cafe9 = document.getElementById("descripcion_cafe9");
let descripcion_cafe10 = document.getElementById("descripcion_cafe10");
let descripcion_cafe11 = document.getElementById("descripcion_cafe11");
let descripcion_cafe12 = document.getElementById("descripcion_cafe12");
let descripcion_cafe13 = document.getElementById("descripcion_cafe13");
let descripcion_cafe14 = document.getElementById("descripcion_cafe14");
let descripcion_cafe15 = document.getElementById("descripcion_cafe15");
let descripcion_cafe16 = document.getElementById("descripcion_cafe16");
let descripcion_cafe17 = document.getElementById("descripcion_cafe17");

//PRECIO
let precio_cafe1 = document.getElementById("precio_cafe1");
let precio_cafe2 = document.getElementById("precio_cafe2");
let precio_cafe3 = document.getElementById("precio_cafe3");
let precio_cafe4 = document.getElementById("precio_cafe4");
let precio_cafe5 = document.getElementById("precio_cafe5");
let precio_cafe6 = document.getElementById("precio_cafe6");
let precio_cafe7 = document.getElementById("precio_cafe7");
let precio_cafe8 = document.getElementById("precio_cafe8");
let precio_cafe9 = document.getElementById("precio_cafe9");
let precio_cafe10 = document.getElementById("precio_cafe10");
let precio_cafe11 = document.getElementById("precio_cafe11");
let precio_cafe12 = document.getElementById("precio_cafe12");
let precio_cafe13 = document.getElementById("precio_cafe13");
let precio_cafe14 = document.getElementById("precio_cafe14");
let precio_cafe15 = document.getElementById("precio_cafe15");
let precio_cafe16 = document.getElementById("precio_cafe16");
let precio_cafe17 = document.getElementById("precio_cafe17");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "café con leche": precio_cafe1.innerHTML = "$"+json[i].precio,
        descripcion_cafe1.innerHTML = json[i].descripcion;
        break;
        case "lagrima": precio_cafe2.innerHTML = "$"+json[i].precio,
        descripcion_cafe2.innerHTML = json[i].descripcion;
        break;
        case "espresso": precio_cafe3.innerHTML = "$"+json[i].precio,
        descripcion_cafe3.innerHTML = json[i].descripcion;
        break;
        case "americano": precio_cafe4.innerHTML = "$"+json[i].precio,
        descripcion_cafe4.innerHTML = json[i].descripcion;
        break;
        case "caramelo": precio_cafe5.innerHTML = "$"+json[i].precio,
        descripcion_cafe5.innerHTML = json[i].descripcion;
        break;
        case "cortado": precio_cafe6.innerHTML = "$"+json[i].precio,
        descripcion_cafe6.innerHTML = json[i].descripcion;
        break;
        case "cappuccino": precio_cafe7.innerHTML = "$"+json[i].precio,
        descripcion_cafe7.innerHTML = json[i].descripcion;
        break;
        case "submarino": precio_cafe8.innerHTML = "$"+json[i].precio,
        descripcion_cafe8.innerHTML = json[i].descripcion;
        break;
        case "moca": precio_cafe9.innerHTML = "$"+json[i].precio,
        descripcion_cafe9.innerHTML = json[i].descripcion;
        break;
        case "crema": precio_cafe10.innerHTML = "$"+json[i].precio,
        descripcion_cafe10.innerHTML = json[i].descripcion;
        break;
        case "frappe": precio_cafe11.innerHTML = "$"+json[i].precio,
        descripcion_cafe11.innerHTML = json[i].descripcion;
        break;
        case "azteca": precio_cafe12.innerHTML = "$"+json[i].precio,
        descripcion_cafe12.innerHTML = json[i].descripcion;
        break;
        case "irlandes": precio_cafe13.innerHTML = "$"+json[i].precio,
        descripcion_cafe13.innerHTML = json[i].descripcion;
        break;
        case "vienes": precio_cafe14.innerHTML = "$"+json[i].precio,
        descripcion_cafe14.innerHTML = json[i].descripcion;
        break;
        case "nutella": precio_cafe15.innerHTML = "$"+json[i].precio,
        descripcion_cafe15.innerHTML = json[i].descripcion;
        break;
        case "jarrito": precio_cafe16.innerHTML = "$"+json[i].precio,
        descripcion_cafe16.innerHTML = json[i].descripcion;
        break;
        case "pocillo": precio_cafe17.innerHTML = "$"+json[i].precio,
        descripcion_cafe17.innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR CAFE
const inputcafe1 = document.querySelector(".inputcafe1");
const inputcafe2 = document.querySelector(".inputcafe2");
const inputcafe3 = document.querySelector(".inputcafe3");
const inputcafe4 = document.querySelector(".inputcafe4");
const inputcafe5 = document.querySelector(".inputcafe5");
const inputcafe6 = document.querySelector(".inputcafe6");
const inputcafe7 = document.querySelector(".inputcafe7");
const inputcafe8 = document.querySelector(".inputcafe8");
const inputcafe9 = document.querySelector(".inputcafe9");
const inputcafe10 = document.querySelector(".inputcafe10");
const inputcafe11 = document.querySelector(".inputcafe11");
const inputcafe12 = document.querySelector(".inputcafe12");
const inputcafe13 = document.querySelector(".inputcafe13");
const inputcafe14 = document.querySelector(".inputcafe14");
const inputcafe15 = document.querySelector(".inputcafe15");
const inputcafe16 = document.querySelector(".inputcafe16");
const inputcafe17 = document.querySelector(".inputcafe17");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//CAFES
const cantidadcafe1 = document.querySelector(".ingresonumero1");
const cantidadcafe2 = document.querySelector(".ingresonumero2");
const cantidadcafe3 = document.querySelector(".ingresonumero3");
const cantidadcafe4 = document.querySelector(".ingresonumero4");
const cantidadcafe5 = document.querySelector(".ingresonumero5");
const cantidadcafe6 = document.querySelector(".ingresonumero6");
const cantidadcafe7 = document.querySelector(".ingresonumero7");
const cantidadcafe8 = document.querySelector(".ingresonumero8");
const cantidadcafe9 = document.querySelector(".ingresonumero9");
const cantidadcafe10 = document.querySelector(".ingresonumero10");
const cantidadcafe11 = document.querySelector(".ingresonumero11");
const cantidadcafe12 = document.querySelector(".ingresonumero12");
const cantidadcafe13 = document.querySelector(".ingresonumero13");
const cantidadcafe14 = document.querySelector(".ingresonumero14");
const cantidadcafe15 = document.querySelector(".ingresonumero15");
const cantidadcafe16 = document.querySelector(".ingresonumero16");
const cantidadcafe17 = document.querySelector(".ingresonumero17");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//CAFE
function cafe1 (){
    inputcafe1.style.display = "grid";
}
function cafe2 (){
    inputcafe2.style.display = "grid";
}
function cafe3 (){
    inputcafe3.style.display = "grid";
}
function cafe4 (){
    inputcafe4.style.display = "grid";
}
function cafe5 (){
    inputcafe5.style.display = "grid";
}
function cafe6 (){
    inputcafe6.style.display = "grid";
}
function cafe7 (){
    inputcafe7.style.display = "grid";
}
function cafe8 (){
    inputcafe8.style.display = "grid";
}
function cafe9 (){
    inputcafe9.style.display = "grid";
}
function cafe10 (){
    inputcafe10.style.display = "grid";
}
function cafe11 (){
    inputcafe11.style.display = "grid";
}
function cafe12 (){
    inputcafe12.style.display = "grid";
}
function cafe13 (){
    inputcafe13.style.display = "grid";
}
function cafe14 (){
    inputcafe14.style.display = "grid";
}
function cafe15 (){
    inputcafe15.style.display = "grid";
}
function cafe16 (){
    inputcafe16.style.display = "grid";
}
function cafe17 (){
    inputcafe17.style.display = "grid";
}

//BOTONES DE SELECCION
//CAFE1
function selecCafe1 (){
    comida.style.display = "grid";
    inputcafe1.style.display = "none";
    num = cantidadcafe1.value;
    objpedido.push(num + " café con leche");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("café con leche");
    cantidadcafe1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe2 (){
    comida.style.display = "grid";
    inputcafe2.style.display = "none";
    num = cantidadcafe2.value;
    objpedido.push(num + " lagrima");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("lagrima");
    cantidadcafe2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe3 (){
    comida.style.display = "grid";
    inputcafe3.style.display = "none";
    num = cantidadcafe3.value;
    objpedido.push(num + " espresso");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("espresso");
    cantidadcafe3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe4 (){
    comida.style.display = "grid";
    inputcafe4.style.display = "none";
    num = cantidadcafe4.value;
    objpedido.push(num + " americano");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("americano");
    cantidadcafe4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe5 (){
    comida.style.display = "grid";
    inputcafe5.style.display = "none";
    num = cantidadcafe5.value;
    objpedido.push(num + " caramelo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("caramelo");
    cantidadcafe5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe6 (){
    comida.style.display = "grid";
    inputcafe6.style.display = "none";
    num = cantidadcafe6.value;
    objpedido.push(num + " cortado");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("cortado");
    cantidadcafe6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe7 (){
    comida.style.display = "grid";
    inputcafe7.style.display = "none";
    num = cantidadcafe7.value;
    objpedido.push(num + " cappuchino");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("cappuchino");
    cantidadcafe7.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe8 (){
    comida.style.display = "grid";
    inputcafe8.style.display = "none";
    num = cantidadcafe8.value;
    objpedido.push(num + " submarino");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("submarino");
    cantidadcafe8.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe9 (){
    comida.style.display = "grid";
    inputcafe9.style.display = "none";
    num = cantidadcafe9.value;
    objpedido.push(num + " mocca");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("mocca");
    cantidadcafe9.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe10 (){
    comida.style.display = "grid";
    inputcafe10.style.display = "none";
    num = cantidadcafe10.value;
    objpedido.push(num + " crema");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("crema");
    cantidadcafe10.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe11 (){
    comida.style.display = "grid";
    inputcafe11.style.display = "none";
    num = cantidadcafe11.value;
    objpedido.push(num + " frappe");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("frappe");
    cantidadcafe11.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe12 (){
    comida.style.display = "grid";
    inputcafe12.style.display = "none";
    num = cantidadcafe12.value;
    objpedido.push(num + " azteca");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("azteca");
    cantidadcafe12.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe13 (){
    comida.style.display = "grid";
    inputcafe13.style.display = "none";
    num = cantidadcafe13.value;
    objpedido.push(num + " irlandes");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("irlandes");
    cantidadcafe13.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe14 (){
    comida.style.display = "grid";
    inputcafe14.style.display = "none";
    num = cantidadcafe14.value;
    objpedido.push(num + " vienés");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("vienés");
    cantidadcafe14.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe15 (){
    comida.style.display = "grid";
    inputcafe15.style.display = "none";
    num = cantidadcafe15.value;
    objpedido.push(num + " nutella");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("nutella");
    cantidadcafe15.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe16 (){
    comida.style.display = "grid";
    inputcafe16.style.display = "none";
    num = cantidadcafe16.value;
    objpedido.push(num + " jarrito");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("jarrito");
    cantidadcafe16.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecCafe17 (){
    comida.style.display = "grid";
    inputcafe17.style.display = "none";
    num = cantidadcafe17.value;
    objpedido.push(num + " pocillo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("pocillo");
    cantidadcafe17.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR

//CAFE1
function cancelarcafe1 (){
    inputcafe1.style.display = "none";
    cantidadcafe1.value = null;
}
function cancelarcafe2 (){
    inputcafe2.style.display = "none";
    cantidadcafe2.value = null;
}
function cancelarcafe3 (){
    inputcafe3.style.display = "none";
    cantidadcafe3.value = null;
}
function cancelarcafe4 (){
    inputcafe4.style.display = "none";
    cantidadcafe4.value = null;
}
function cancelarcafe5 (){
    inputcafe5.style.display = "none";
    cantidadcafe5.value = null;
}
function cancelarcafe6 (){
    inputcafe6.style.display = "none";
    cantidadcafe6.value = null;
}
function cancelarcafe7 (){
    inputcafe7.style.display = "none";
    cantidadcafe7.value = null;
}
function cancelarcafe8 (){
    inputcafe8.style.display = "none";
    cantidadcafe8.value = null;
}
function cancelarcafe9 (){
    inputcafe9.style.display = "none";
    cantidadcafe9.value = null;
}
function cancelarcafe10 (){
    inputcafe10.style.display = "none";
    cantidadcafe10.value = null;
}
function cancelarcafe11 (){
    inputcafe11.style.display = "none";
    cantidadcafe11.value = null;
}
function cancelarcafe12 (){
    inputcafe12.style.display = "none";
    cantidadcafe12.value = null;
}
function cancelarcafe13 (){
    inputcafe13.style.display = "none";
    cantidadcafe13.value = null;
}
function cancelarcafe14 (){
    inputcafe14.style.display = "none";
    cantidadcafe14.value = null;
}
function cancelarcafe15 (){
    inputcafe15.style.display = "none";
    cantidadcafe15.value = null;
}
function cancelarcafe16 (){
    inputcafe16.style.display = "none";
    cantidadcafe16.value = null;
}
function cancelarcafe17 (){
    inputcafe17.style.display = "none";
    cantidadcafe17.value = null;
}

//HORA
const d = new Date();
let hora = d.getHours();
let minutos = d.getMinutes();
let horaComienzo = hora+":"+minutos;


//BOTON PARA ELIMINAR VISTA PREVIA
let clickParaIU=0;
function enviar(){
    console.log(objCantidad);
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
        location.href = "../menu acompañante/cafe.html";
    }
    //console.log(obtener_localstorage());
}