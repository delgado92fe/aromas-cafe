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

//DESCRIPCIO
let descripcion_licuado1 = document.getElementById("descripcion_licuado1");
let descripcion_licuado2 = document.getElementById("descripcion_licuado2");
let descripcion_licuado3 = document.getElementById("descripcion_licuado3");
let descripcion_licuado4 = document.getElementById("descripcion_licuado4");
let descripcion_licuado5 = document.getElementById("descripcion_licuado5");
//PRECIO
let precio_licuado1 = document.getElementById("precio_licuado1");
let precio_licuado2 = document.getElementById("precio_licuado2");
let precio_licuado3 = document.getElementById("precio_licuado3");
let precio_licuado4 = document.getElementById("precio_licuado4");
let precio_licuado5 = document.getElementById("precio_licuado5");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "Frutilla": precio_licuado1.innerHTML = "$"+json[i].precio,
        descripcion_licuado1.innerHTML = json[i].descripcion;
        break;
        case "Durazno": precio_licuado2.innerHTML = "$"+json[i].precio,
        descripcion_licuado2.innerHTML = json[i].descripcion;
        break;
        case "Banana": precio_licuado3.innerHTML = "$"+json[i].precio,
        descripcion_licuado3.innerHTML = json[i].descripcion;
        break;
        case "Multifruta": precio_licuado4.innerHTML = "$"+json[i].precio,
        descripcion_licuado4.innerHTML = json[i].descripcion;
        break;
        case "Batido": precio_licuado5.innerHTML = "$"+json[i].precio,
        descripcion_licuado5.innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

//licuado 1
const leche1 = document.getElementById('leche1');
const sprite1 = document.getElementById('sprite1');
const agua1 = document.getElementById('agua1');
//licuado 2
const leche2 = document.getElementById('leche2');
const sprite2 = document.getElementById('sprite2');
const agua2 = document.getElementById('agua2');
//licuado 3
const leche3 = document.getElementById('leche3');
const sprite3 = document.getElementById('sprite3');
const agua3 = document.getElementById('agua3');
//licuado 4
const leche4 = document.getElementById('leche4');
const sprite4 = document.getElementById('sprite4');
const agua4 = document.getElementById('agua4');
//licuado 5
const leche5 = document.getElementById('leche5');
const sprite5 = document.getElementById('sprite5');
const agua5 = document.getElementById('agua5');

/*let paraLicuado1="";
let paraLicuado2="";
let paraLicuado3="";
let paraLicuado4="";
let paraLicuado5="";*/
//ESCUCHA DE OPCIONES
let variableOpcion;
//licuado 1
leche1.addEventListener("click",()=>{
    variableOpcion="leche";
    leche1.style.background = "green";
});
sprite1.addEventListener("click",()=>{
    variableOpcion="sprite";
    sprite1.style.background = "green";
});
agua1.addEventListener("click",()=>{
    variableOpcion="agua";
    agua1.style.background = "green";
});
//licuado 2
leche2.addEventListener("click",()=>{
    variableOpcion="leche";
    leche2.style.background = "green";
});
sprite2.addEventListener("click",()=>{
    variableOpcion="sprite";
    sprite2.style.background = "green";
});
agua2.addEventListener("click",()=>{
    variableOpcion="agua";
    agua2.style.background = "green";
});
//licuado 3
leche3.addEventListener("click",()=>{
    variableOpcion="leche";
    leche3.style.background = "green";
});
sprite3.addEventListener("click",()=>{
    variableOpcion="sprite";
    sprite3.style.background = "green";
});
agua3.addEventListener("click",()=>{
    variableOpcion="agua";
    agua3.style.background = "green";
});
//licuado 4
leche4.addEventListener("click",()=>{
    variableOpcion="leche";
    leche4.style.background = "green";
});
sprite4.addEventListener("click",()=>{
    variableOpcion="sprite";
    sprite4.style.background = "green";
});
agua4.addEventListener("click",()=>{
    variableOpcion="agua";
    agua4.style.background = "green";
});


// INPUT DIV CONTENEDOR
//CONTENEDOR licuado
const contenedorDeInput1 = document.querySelector(".contenedor-de-input1");
const contenedorDeInput2 = document.querySelector(".contenedor-de-input2");
const contenedorDeInput3 = document.querySelector(".contenedor-de-input3");
const contenedorDeInput4 = document.querySelector(".contenedor-de-input4");
const inputbatido = document.querySelector(".inputbatido");;

//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//licuadoS
const cantidadlicuado1 = document.getElementById("cantidadlicuado1");
const cantidadlicuado2 = document.getElementById("cantidadlicuado2");
const cantidadlicuado3 = document.getElementById("cantidadlicuado3");
const cantidadlicuado4 = document.getElementById("cantidadlicuado4");
const cantidadbatido = document.getElementById("cantidadbatido");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//licuado
function licuado1 (){
    contenedorDeInput1.style.display = "grid";
}
function licuado2 (){
    contenedorDeInput2.style.display = "grid";
}
function licuado3 (){
    contenedorDeInput3.style.display = "grid";
}
function licuado4 (){
    contenedorDeInput4.style.display = "grid";
}
function licuado5 (){
    inputbatido.style.display = "grid";
}
//BOTONES DE SELECCION
//licuadoS
//licuado1
function seleclicuado1 (){
    comida.style.display = "grid";
    contenedorDeInput1.style.display = "none";
    num = cantidadlicuado1.value;
    //alert(num+" "+paraLicuado1);
    objpedido.push(num +" Frutilla con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Frutilla con "+variableOpcion);
    cantidadlicuado1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function seleclicuado2 (){
    comida.style.display = "grid";
    contenedorDeInput2.style.display = "none";
    num = cantidadlicuado2.value;
    objpedido.push(num +" Durazno con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Durazno con "+variableOpcion);
    cantidadlicuado2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function seleclicuado3 (){
    comida.style.display = "grid";
    contenedorDeInput3.style.display = "none";
    num = cantidadlicuado3.value;
    objpedido.push(num + " Banana con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Banana con "+variableOpcion);
    cantidadlicuado3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function seleclicuado4 (){
    comida.style.display = "grid";
    contenedorDeInput4.style.display = "none";
    num = cantidadlicuado4.value;
    objpedido.push(num + " Multi frutas con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Multifrutas con "+variableOpcion);
    cantidadlicuado4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function seleclicuado5 (){
    comida.style.display = "grid";
    inputbatido.style.display = "none";
    num = cantidadbatido.value;
    objpedido.push(num +" Batido");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Batido");
    cantidadbatido.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR
//CANCELAR licuadoS
//licuado1
function cancelarlicuado1 (){
    contenedorDeInput1.style.display = "none";
    cantidadlicuado2.value = null;
    leche1.style.background = "#f8c98cf3";
    sprite1.style.background = "#f8c98cf3";
    agua1.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelarlicuado2 (){
    contenedorDeInput2.style.display = "none";
    cantidadlicuado2.value = null;
    leche2.style.background = "#f8c98cf3";
    sprite2.style.background = "#f8c98cf3";
    agua2.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelarlicuado3 (){
    contenedorDeInput3.style.display = "none";
    cantidadlicuado3.value = null;
    leche3.style.background = "#f8c98cf3";
    sprite3.style.background = "#f8c98cf3";
    agua3.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelarlicuado4 (){
    contenedorDeInput4.style.display = "none";
    cantidadlicuado4.value = null;
    leche4.style.background = "#f8c98cf3";
    sprite4.style.background = "#f8c98cf3";
    agua4.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelarlicuado5 (){
    inputbatido.style.display = "none";
    cantidadbatido.value = null;
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
        location.href = "../menu acompañante/licuados.html";
    }
    //console.log(obtener_localstorage());
}