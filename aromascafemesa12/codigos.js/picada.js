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
let descripcion_picada1 = document.getElementById("descripcion_picada1");
let descripcion_picada2 = document.getElementById("descripcion_picada2");
let descripcion_picada3 = document.getElementById("descripcion_picada3");
let descripcion_picada4 = document.getElementById("descripcion_picada4");
let descripcion_picada5 = document.getElementById("descripcion_picada5");
let descripcion_picada6 = document.getElementById("descripcion_picada6");
let descripcion_picada7 = document.getElementById("descripcion_picada7");
let descripcion_picada8 = document.getElementById("descripcion_picada8");
let descripcion_picada9 = document.getElementById("descripcion_picada9");
let descripcion_picada10 = document.getElementById("descripcion_picada10");
let descripcion_picada11 = document.getElementById("descripcion_picada11");
let descripcion_picada12 = document.getElementById("descripcion_picada12");
let descripcion_picada13 = document.getElementById("descripcion_picada13");
//PRECIO
let precio_picada1 = document.getElementById("precio_picada1");
let precio_picada2 = document.getElementById("precio_picada2");
let precio_picada3 = document.getElementById("precio_picada3");
let precio_picada4 = document.getElementById("precio_picada4");
let precio_picada5 = document.getElementById("precio_picada5");
let precio_picada6 = document.getElementById("precio_picada6");
let precio_picada7 = document.getElementById("precio_picada7");
let precio_picada8 = document.getElementById("precio_picada8");
let precio_picada9 = document.getElementById("precio_picada9");
let precio_picada10 = document.getElementById("precio_picada10");
let precio_picada11 = document.getElementById("precio_picada11");
let precio_picada12 = document.getElementById("precio_picada12");
let precio_picada13 = document.getElementById("precio_picada13");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "Picada clasica": precio_picada1.innerHTML = "$"+json[i].precio,
        descripcion_picada1.innerHTML = json[i].descripcion;
        break;
        case "Picada aromas": precio_picada2.innerHTML = "$"+json[i].precio,
        descripcion_picada2.innerHTML = json[i].descripcion;
        break;
        case "tostado": precio_picada3.innerHTML = "$"+json[i].precio,
        descripcion_picada3.innerHTML = json[i].descripcion;
        break;
        case "Sandwich jamon y queso": precio_picada4.innerHTML = "$"+json[i].precio,
        descripcion_picada4.innerHTML = json[i].descripcion;
        break;
        case "Sandwich Jamon, Queso, Huevo y": precio_picada5.innerHTML = "$"+json[i].precio,
        descripcion_picada5.innerHTML = json[i].descripcion;
        break;
        case "Sandwich Jamon, Queso y Palta": precio_picada6.innerHTML = "$"+json[i].precio,
        descripcion_picada6.innerHTML = json[i].descripcion;
        break;
        case "Baguette Jamon y Queso": precio_picada7.innerHTML = "$"+json[i].precio,
        descripcion_picada7.innerHTML = json[i].descripcion;
        break;
        case "Baguette Jamon, Queso, tomate": precio_picada8.innerHTML = "$"+json[i].precio,
        descripcion_picada8.innerHTML = json[i].descripcion;
        break;
        case "Baguette Jamon, Queso, tomate,": precio_picada9.innerHTML = "$"+json[i].precio,
        descripcion_picada9.innerHTML = json[i].descripcion;
        break;
        case "Baguette Jamon crudo y queso": precio_picada10.innerHTML = "$"+json[i].precio,
        descripcion_picada10.innerHTML = json[i].descripcion;
        break;
        case "Baguette Jamon crudo, queso to": precio_picada11.innerHTML = "$"+json[i].precio,
        descripcion_picada11.innerHTML = json[i].descripcion;
        break;
        case "Baguette Salame y queso": precio_picada12.innerHTML = "$"+json[i].precio,
        descripcion_picada12.innerHTML = json[i].descripcion;
        break;
        case "Baguette Bondiola y queso": precio_picada13.innerHTML = "$"+json[i].precio,
        descripcion_picada13.innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR picada
const inputpicada1 = document.querySelector(".inputpicada1");
const inputpicada2 = document.querySelector(".inputpicada2");
const inputpicada3 = document.querySelector(".inputpicada3");
const inputpicada4 = document.querySelector(".inputpicada4");
const inputpicada5 = document.querySelector(".inputpicada5");
const inputpicada6 = document.querySelector(".inputpicada6");
const inputpicada7 = document.querySelector(".inputpicada7");
const inputpicada8 = document.querySelector(".inputpicada8");
const inputpicada9 = document.querySelector(".inputpicada9");
const inputpicada10 = document.querySelector(".inputpicada10");
const inputpicada11 = document.querySelector(".inputpicada11");
const inputpicada12 = document.querySelector(".inputpicada12");
const inputpicada13 = document.querySelector(".inputpicada13");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//picadaS
const ingresonumero1 = document.querySelector(".ingresonumero1");
const ingresonumero2 = document.querySelector(".ingresonumero2");
const ingresonumero3 = document.querySelector(".ingresonumero3");
const ingresonumero4 = document.querySelector(".ingresonumero4");
const ingresonumero5 = document.querySelector(".ingresonumero5");
const ingresonumero6 = document.querySelector(".ingresonumero6");
const ingresonumero7 = document.querySelector(".ingresonumero7");
const ingresonumero8 = document.querySelector(".ingresonumero8");
const ingresonumero9 = document.querySelector(".ingresonumero9");
const ingresonumero10 = document.querySelector(".ingresonumero10");
const ingresonumero11 = document.querySelector(".ingresonumero11");
const ingresonumero12 = document.querySelector(".ingresonumero12");
const ingresonumero13 = document.querySelector(".ingresonumero13");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//picada
function picada1 (){
    inputpicada1.style.display = "grid";
}
function picada2 (){
    inputpicada2.style.display = "grid";
}
function picada3 (){
    inputpicada3.style.display = "grid";
}
function picada4 (){
    inputpicada4.style.display = "grid";
}
function picada5 (){
    inputpicada5.style.display = "grid";
}
function picada6 (){
    inputpicada6.style.display = "grid";
}
function picada7 (){
    inputpicada7.style.display = "grid";
}
function picada8 (){
    inputpicada8.style.display = "grid";
}
function picada9 (){
    inputpicada9.style.display = "grid";
}
function picada10 (){
    inputpicada10.style.display = "grid";
}
function picada11 (){
    inputpicada11.style.display = "grid";
}
function picada12 (){
    inputpicada12.style.display = "grid";
}
function picada13 (){
    inputpicada13.style.display = "grid";
}

//BOTONES DE SELECCION
//picada1
function selecpicada1 (){
    comida.style.display = "grid";
    inputpicada1.style.display = "none";
    num = ingresonumero1.value;
    objpedido.push(num + " picada clasica");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Picada clasica");
    ingresonumero1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada2 (){
    comida.style.display = "grid";
    inputpicada2.style.display = "none";
    num = ingresonumero2.value;
    objpedido.push(num + " picada Aromas");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Picada aromas");
    ingresonumero2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada3 (){
    comida.style.display = "grid";
    inputpicada3.style.display = "none";
    num = ingresonumero3.value;
    objpedido.push(num + " Tostado");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("tostado");
    ingresonumero3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada4 (){
    comida.style.display = "grid";
    inputpicada4.style.display = "none";
    num = ingresonumero4.value;
    objpedido.push(num + " Sandwich jamon y queso");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Sandwich jamon y queso");
    ingresonumero4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada5 (){
    comida.style.display = "grid";
    inputpicada5.style.display = "none";
    num = ingresonumero5.value;
    objpedido.push(num + " Sandwich Jamon, Queso, Huevo y Tomate");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Sandwich Jamon, Queso, Huevo y Tomate");
    ingresonumero5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada6 (){
    comida.style.display = "grid";
    inputpicada6.style.display = "none";
    num = ingresonumero6.value;
    objpedido.push(num + " Sandwich Jamon, Queso y Palta");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Sandwich Jamon, Queso y Palta");
    ingresonumero6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada7 (){
    comida.style.display = "grid";
    inputpicada7.style.display = "none";
    num = ingresonumero7.value;
    objpedido.push(num + " Baguette Jamon y Queso");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Baguette Jamon y Queso");
    ingresonumero7.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada8 (){
    comida.style.display = "grid";
    inputpicada8.style.display = "none";
    num = ingresonumero8.value;
    objpedido.push(num + " Baguette Jamon, Queso, tomate y huevo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Baguette Jamon, Queso, tomate y huevo");
    ingresonumero8.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada9 (){
    comida.style.display = "grid";
    inputpicada9.style.display = "none";
    num = ingresonumero9.value;
    objpedido.push(num + " Baguette Jamon, Queso, tomate, huevo y palta");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Baguette Jamon, Queso, tomate, huevo y palta");
    ingresonumero9.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada10 (){
    comida.style.display = "grid";
    inputpicada10.style.display = "none";
    num = ingresonumero10.value;
    objpedido.push(num + " Baguette Jamon crudo y queso");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Baguette Jamon crudo y queso");
    ingresonumero10.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada11 (){
    comida.style.display = "grid";
    inputpicada11.style.display = "none";
    num = ingresonumero11.value;
    objpedido.push(num + " Baguette Jamon crudo, queso tomate y huevo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Baguette Jamon crudo, queso tomate y huevo");
    ingresonumero11.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada12 (){
    comida.style.display = "grid";
    inputpicada12.style.display = "none";
    num = ingresonumero12.value;
    objpedido.push(num + " Baguette Salame y queso");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Baguette Salame y queso");
    ingresonumero12.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpicada13 (){
    comida.style.display = "grid";
    inputpicada13.style.display = "none";
    num = ingresonumero13.value;
    objpedido.push(num + " Baguette Bondiola y queso");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Baguette Bondiola y queso");
    ingresonumero13.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR

//picada1
function cancelarpicada1 (){
    inputpicada1.style.display = "none";
    ingresonumero1.value = null;
}
function cancelarpicada2 (){
    inputpicada2.style.display = "none";
    ingresonumero2.value = null;
}
function cancelarpicada3 (){
    inputpicada3.style.display = "none";
    ingresonumero3.value = null;
}
function cancelarpicada4 (){
    inputpicada4.style.display = "none";
    ingresonumero4.value = null;
}
function cancelarpicada5 (){
    inputpicada5.style.display = "none";
    ingresonumero5.value = null;
}
function cancelarpicada6 (){
    inputpicada6.style.display = "none";
    ingresonumero6.value = null;
}
function cancelarpicada7 (){
    inputpicada7.style.display = "none";
    ingresonumero7.value = null;
}
function cancelarpicada8 (){
    inputpicada8.style.display = "none";
    ingresonumero8.value = null;
}
function cancelarpicada9 (){
    inputpicada9.style.display = "none";
    ingresonumero9.value = null;
}
function cancelarpicada10 (){
    inputpicada10.style.display = "none";
    ingresonumero10.value = null;
}
function cancelarpicada11 (){
    inputpicada11.style.display = "none";
    ingresonumero11.value = null;
}
function cancelarpicada12 (){
    inputpicada12.style.display = "none";
    ingresonumero12.value = null;
}
function cancelarpicada13 (){
    inputpicada13.style.display = "none";
    ingresonumero13.value = null;
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
        location.href = "../menu acompañante/picada.html";
    }
    //console.log(obtener_localstorage());
}