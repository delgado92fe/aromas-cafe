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
let descripcion_postre1 = document.getElementById("descripcion_postre1");
let descripcion_postre2 = document.getElementById("descripcion_postre2");
let descripcion_postre3 = document.getElementById("descripcion_postre3");
let descripcion_postre4 = document.getElementById("descripcion_postre4");
//PRECIO
let precio_postre1 = document.getElementById("precio_postre1");
let precio_postre2 = document.getElementById("precio_postre2");
let precio_postre3 = document.getElementById("precio_postre3");
let precio_postre4 = document.getElementById("precio_postre4");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "Ensalada de frutas": precio_postre1.innerHTML = "$"+json[i].precio,
        descripcion_postre1.innerHTML = json[i].descripcion;
        break;
        case "Durazno con crema": precio_postre2.innerHTML = "$"+json[i].precio,
        descripcion_postre2.innerHTML = json[i].descripcion;
        break;
        case "Frutilla con crema": precio_postre3.innerHTML = "$"+json[i].precio,
        descripcion_postre3.innerHTML = json[i].descripcion;
        break;
        case "Helados": precio_postre4.innerHTML = "$"+json[i].precio,
        descripcion_postre4.innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR postre
const inputpostre1 = document.querySelector(".inputpostre1");
const inputpostre2 = document.querySelector(".inputpostre2");
const inputpostre3 = document.querySelector(".inputpostre3");
const inputpostre4 = document.querySelector(".inputpostre4");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//postreS
const ingresonumero1 = document.querySelector(".ingresonumero1");
const ingresonumero2 = document.querySelector(".ingresonumero2");
const ingresonumero3 = document.querySelector(".ingresonumero3");
const ingresonumero4 = document.querySelector(".ingresonumero4");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//postre
function postre1 (){
    inputpostre1.style.display = "grid";
}
function postre2 (){
    inputpostre2.style.display = "grid";
}
function postre3 (){
    inputpostre3.style.display = "grid";
}
function postre4 (){
    inputpostre4.style.display = "grid";
}

//BOTONES DE SELECCION
//POSTRES

function selecpostre1 (){
    comida.style.display = "grid";
    inputpostre1.style.display = "none";
    num = ingresonumero1.value;
    objpedido.push(num + " Ensalada de frutas");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Ensalada de frutas");
    ingresonumero1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpostre2 (){
    comida.style.display = "grid";
    inputpostre2.style.display = "none";
    num = ingresonumero2.value;
    objpedido.push(num + " Durazno con crema");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Durazno con crema");
    ingresonumero2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpostre3 (){
    comida.style.display = "grid";
    inputpostre3.style.display = "none";
    num = ingresonumero3.value;
    objpedido.push(num + " Frutilla con crema");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Frutilla con crema");
    ingresonumero3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpostre4 (){
    comida.style.display = "grid";
    inputpostre4.style.display = "none";
    num = ingresonumero4.value;
    objpedido.push(num + " Helados");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Helados");
    ingresonumero4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR

function cancelarpostre1 (){
    inputpostre1.style.display = "none";
    ingresonumero1.value = null;
}
function cancelarpostre2 (){
    inputpostre2.style.display = "none";
    ingresonumero2.value = null;
}
function cancelarpostre3 (){
    inputpostre3.style.display = "none";
    ingresonumero3.value = null;
}
function cancelarpostre4 (){
    inputpostre4.style.display = "none";
    ingresonumero4.value = null;
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
    pedido.innerHTML = "";
    ingresocantidad1.innerHTML=null;
    ingresocantidad2.innerHTML=null;
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
        location.href = "../menu acompañante/postre.html";
    }
    //console.log(obtener_localstorage());
}