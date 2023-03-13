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
let descripcion_pizza1 = document.getElementById("descripcion_pizza1");
let descripcion_pizza2 = document.getElementById("descripcion_pizza2");
let descripcion_pizza3 = document.getElementById("descripcion_pizza3");
let descripcion_pizza4 = document.getElementById("descripcion_pizza4");
let descripcion_pizza5 = document.getElementById("descripcion_pizza5");
let descripcion_pizza6 = document.getElementById("descripcion_pizza6");
let descripcion_pizza7 = document.getElementById("descripcion_pizza7");
let descripcion_pizza8 = document.getElementById("descripcion_pizza8");
let descripcion_pizza9 = document.getElementById("descripcion_pizza9");

//PRECIO
let precio_pizza1 = document.getElementById("precio_pizza1");
let precio_pizza2 = document.getElementById("precio_pizza2");
let precio_pizza3 = document.getElementById("precio_pizza3");
let precio_pizza4 = document.getElementById("precio_pizza4");
let precio_pizza5 = document.getElementById("precio_pizza5");
let precio_pizza6 = document.getElementById("precio_pizza6");
let precio_pizza7 = document.getElementById("precio_pizza7");
let precio_pizza8 = document.getElementById("precio_pizza8");
let precio_pizza9 = document.getElementById("precio_pizza9");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){

    switch(json[i].nombre){
        case "Mozzarella": precio_pizza1.innerHTML = "$"+json[i].precio,
        descripcion_pizza1. innerHTML = json[i].descripcion;
        break;
        case "Provolone con miel": precio_pizza2.innerHTML = "$"+json[i].precio,
        descripcion_pizza2. innerHTML = json[i].descripcion;
        break;
        case "Calabresa": precio_pizza3.innerHTML = "$"+json[i].precio,
        descripcion_pizza3. innerHTML = json[i].descripcion;
        break;
        case "Jamon crudo": precio_pizza4.innerHTML = "$"+json[i].precio,
        descripcion_pizza4. innerHTML = json[i].descripcion;
        break;
        case "4 quesos": precio_pizza5.innerHTML = "$"+json[i].precio,
        descripcion_pizza5. innerHTML = json[i].descripcion;
        break;
        case "Margarita": precio_pizza6.innerHTML = "$"+json[i].precio,
        descripcion_pizza6. innerHTML = json[i].descripcion;
        break;
        case "Reyna azul": precio_pizza7.innerHTML = "$"+json[i].precio,
        descripcion_pizza7. innerHTML = json[i].descripcion;
        break;
        case "Fugazzetta": precio_pizza8.innerHTML = "$"+json[i].precio,
        descripcion_pizza8. innerHTML = json[i].descripcion;
        break;
        case "Especial con jamón": precio_pizza9.innerHTML = "$"+json[i].precio,
        descripcion_pizza9. innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR pizza
const inputpizza1 = document.querySelector(".inputpizza1");
const inputpizza2 = document.querySelector(".inputpizza2");
const inputpizza3 = document.querySelector(".inputpizza3");
const inputpizza4 = document.querySelector(".inputpizza4");
const inputpizza5 = document.querySelector(".inputpizza5");
const inputpizza6 = document.querySelector(".inputpizza6");
const inputpizza7 = document.querySelector(".inputpizza7");
const inputpizza8 = document.querySelector(".inputpizza8");
const inputpizza9 = document.querySelector(".inputpizza9");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//pizzaS
const ingresonumero1 = document.querySelector(".ingresonumero1");
const ingresonumero2 = document.querySelector(".ingresonumero2");
const ingresonumero3 = document.querySelector(".ingresonumero3");
const ingresonumero4 = document.querySelector(".ingresonumero4");
const ingresonumero5 = document.querySelector(".ingresonumero5");
const ingresonumero6 = document.querySelector(".ingresonumero6");
const ingresonumero7 = document.querySelector(".ingresonumero7");
const ingresonumero8 = document.querySelector(".ingresonumero8");
const ingresonumero9 = document.querySelector(".ingresonumero9");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//pizza
function pizza1 (){
    inputpizza1.style.display = "grid";
}
function pizza2 (){
    inputpizza2.style.display = "grid";
}
function pizza3 (){
    inputpizza3.style.display = "grid";
}
function pizza4 (){
    inputpizza4.style.display = "grid";
}
function pizza5 (){
    inputpizza5.style.display = "grid";
}
function pizza6 (){
    inputpizza6.style.display = "grid";
}
function pizza7 (){
    inputpizza7.style.display = "grid";
}
function pizza8 (){
    inputpizza8.style.display = "grid";
}
function pizza9 (){
    inputpizza9.style.display = "grid";
}

//BOTONES DE SELECCION
//pizza1
function selecpizza1 (){
    comida.style.display = "grid";
    inputpizza1.style.display = "none";
    num = ingresonumero1.value;
    objpedido.push(num + " Mozzarella");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Mozzarella");
    ingresonumero1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza2 (){
    comida.style.display = "grid";
    inputpizza2.style.display = "none";
    num = ingresonumero2.value;
    objpedido.push(num + " Provolone con miel");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Provolone con miel");
    ingresonumero2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza3 (){
    comida.style.display = "grid";
    inputpizza3.style.display = "none";
    num = ingresonumero3.value;
    objpedido.push(num + " Calabresa");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Calabresa");
    ingresonumero3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza4 (){
    comida.style.display = "grid";
    inputpizza4.style.display = "none";
    num = ingresonumero4.value;
    objpedido.push(num + " Jamon crudo");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Jamon crudo");
    ingresonumero4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza5 (){
    comida.style.display = "grid";
    inputpizza5.style.display = "none";
    num = ingresonumero5.value;
    objpedido.push(num + " 4 Quesos");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("4 Quesos");
    ingresonumero5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza6 (){
    comida.style.display = "grid";
    inputpizza6.style.display = "none";
    num = ingresonumero6.value;
    objpedido.push(num + " Margarita");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Margarita");
    ingresonumero6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza7 (){
    comida.style.display = "grid";
    inputpizza7.style.display = "none";
    num = ingresonumero7.value;
    objpedido.push(num + " Reyna azul");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Reyna azul");
    ingresonumero7.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza8 (){
    comida.style.display = "grid";
    inputpizza8.style.display = "none";
    num = ingresonumero8.value;
    objpedido.push(num + " Fugazzetta");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Fugazzetta");
    ingresonumero8.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecpizza9 (){
    comida.style.display = "grid";
    inputpizza9.style.display = "none";
    num = ingresonumero9.value;
    objpedido.push(num + " Especial con jamón");
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Especial con jamón");
    ingresonumero9.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BOTONES CANCELAR
//pizza1
function cancelarpizza1 (){
    inputpizza1.style.display = "none";
    ingresonumero1.value = null;
}
function cancelarpizza2 (){
    inputpizza2.style.display = "none";
    ingresonumero2.value = null;
}
function cancelarpizza3 (){
    inputpizza3.style.display = "none";
    ingresonumero3.value = null;
}
function cancelarpizza4 (){
    inputpizza4.style.display = "none";
    ingresonumero4.value = null;
}
function cancelarpizza5 (){
    inputpizza5.style.display = "none";
    ingresonumero5.value = null;
}
function cancelarpizza6 (){
    inputpizza6.style.display = "none";
    ingresonumero6.value = null;
}
function cancelarpizza7 (){
    inputpizza7.style.display = "none";
    ingresonumero7.value = null;
}
function cancelarpizza8 (){
    inputpizza8.style.display = "none";
    ingresonumero8.value = null;
}
function cancelarpizza9 (){
    inputpizza9.style.display = "none";
    ingresonumero9.value = null;
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
        alert("mismo ID");
        console.log(obtener_localstorage());
        //cuenta.style.display = "block";
    }else/*(iu == obtener_localstorage().substr(7,20))*/{
        alert("El ID es diferente");
        console.log(obtener_localstorage());
        location.href = "../menu acompañante/pizza.html";
    }
    console.log(obtener_localstorage());
}