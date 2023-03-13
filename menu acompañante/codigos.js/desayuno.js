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

//descripcion
let descripcion_desayuno1 = document.getElementById("descripcion_desayuno1");
let descripcion_desayuno2 = document.getElementById("descripcion_desayuno2");
let descripcion_desayuno3 = document.getElementById("descripcion_desayuno3");
let descripcion_desayuno4 = document.getElementById("descripcion_desayuno4");
let descripcion_desayuno5 = document.getElementById("descripcion_desayuno5");
let descripcion_desayuno6 = document.getElementById("descripcion_desayuno6");
let descripcion_desayuno7 = document.getElementById("descripcion_desayuno7");
let descripcion_desayuno8 = document.getElementById("descripcion_desayuno8");
let descripcion_desayuno9 = document.getElementById("descripcion_desayuno9");
let descripcion_desayuno10 = document.getElementById("descripcion_desayuno10");
//precio
let precio_desayuno1 = document.getElementById("precio_desayuno1");
let precio_desayuno2 = document.getElementById("precio_desayuno2");
let precio_desayuno3 = document.getElementById("precio_desayuno3");
let precio_desayuno4 = document.getElementById("precio_desayuno4");
let precio_desayuno5 = document.getElementById("precio_desayuno5");
let precio_desayuno6 = document.getElementById("precio_desayuno6");
let precio_desayuno7 = document.getElementById("precio_desayuno7");
let precio_desayuno8 = document.getElementById("precio_desayuno8");
let precio_desayuno9 = document.getElementById("precio_desayuno9");
let precio_desayuno10 = document.getElementById("precio_desayuno10");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);



for( i in json){

    switch(json[i].nombre){
        case "Desayuno Completo": precio_desayuno1.innerHTML = "$"+json[i].precio,
        descripcion_desayuno1.innerHTML = json[i].descripcion;
        break;
        case "Desayuno Aromas": precio_desayuno2.innerHTML = "$"+json[i].precio,
        descripcion_desayuno2.innerHTML = json[i].descripcion;
        break;
        case "Desayuno de campo": precio_desayuno3.innerHTML = "$"+json[i].precio,
        descripcion_desayuno3.innerHTML = json[i].descripcion;
        break;
        case "Desayuno Arauco": precio_desayuno4.innerHTML = "$"+json[i].precio,
        descripcion_desayuno4.innerHTML = json[i].descripcion;
        break;
        case "Desayuno Americano": precio_desayuno5.innerHTML = "$"+json[i].precio,
        descripcion_desayuno5.innerHTML = json[i].descripcion;
        break;
        case "Desayuno Tentacion": precio_desayuno6.innerHTML = "$"+json[i].precio,
        descripcion_desayuno6.innerHTML = json[i].descripcion;
        break;
        case "Opciones light": precio_desayuno7.innerHTML = "$"+json[i].precio,
        descripcion_desayuno7.innerHTML = json[i].descripcion;
        break;
        case "Fitness 1": precio_desayuno8.innerHTML = "$"+json[i].precio,
        descripcion_desayuno8.innerHTML = json[i].descripcion;
        break;
        case "Fitness 2": precio_desayuno9.innerHTML = "$"+json[i].precio,
        descripcion_desayuno9.innerHTML = json[i].descripcion;
        break;
        case "Fitness 3": precio_desayuno10.innerHTML = "$"+json[i].precio,
        descripcion_desayuno10.innerHTML = json[i].descripcion;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR desayuno
const inputdesayuno1 = document.querySelector(".inputdesayuno1");
const inputdesayuno2 = document.querySelector(".inputdesayuno2");
const inputdesayuno3 = document.querySelector(".inputdesayuno3");
const inputdesayuno4 = document.querySelector(".inputdesayuno4");
const inputdesayuno5 = document.querySelector(".inputdesayuno5");
const inputdesayuno6 = document.querySelector(".inputdesayuno6");
const inputdesayuno7 = document.querySelector(".inputdesayuno7");
const inputdesayuno8 = document.querySelector(".inputdesayuno8");
const inputdesayuno9 = document.querySelector(".inputdesayuno9");
const inputdesayuno10 = document.querySelector(".inputdesayuno10");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//desayunoS
const cantidaddesayuno1 = document.querySelector(".ingresonumero1");
const cantidaddesayuno2 = document.querySelector(".ingresonumero2");
const cantidaddesayuno3 = document.querySelector(".ingresonumero3");
const cantidaddesayuno4 = document.querySelector(".ingresonumero4");
const cantidaddesayuno5 = document.querySelector(".ingresonumero5");
const cantidaddesayuno6 = document.querySelector(".ingresonumero6");
const cantidaddesayuno7 = document.querySelector(".ingresonumero7");
const cantidaddesayuno8 = document.querySelector(".ingresonumero8");
const cantidaddesayuno9 = document.querySelector(".ingresonumero9");
const cantidaddesayuno10 = document.querySelector(".ingresonumero10");


let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
let variableOpcion;
//function opcioneCafe()
let cafe1 = document.querySelector(".cafe1");
let cafe2 = document.querySelector(".cafe2");
let cafe3 = document.querySelector(".cafe3");
let cafe4 = document.querySelector(".cafe4");
let cafe5 = document.querySelector(".cafe5");
let cafe6 = document.querySelector(".cafe6");
let cafe7 = document.querySelector(".cafe7");
let cafe8 = document.querySelector(".cafe8");
let te1 = document.querySelector(".te1");
let te2 = document.querySelector(".te2");
let te3 = document.querySelector(".te3");
let te4 = document.querySelector(".te4");
let te5 = document.querySelector(".te5");
let te6 = document.querySelector(".te6");
let te7 = document.querySelector(".te7");
let te8 = document.querySelector(".te8");
let te9 = document.querySelector(".te9");
let te10 = document.querySelector(".te10");
let cafeLeche1 = document.querySelector(".cafeLeche1");
let cafeLeche2 = document.querySelector(".cafeLeche2");
let cafeLecheDes = document.querySelector(".cafeLecheDes");
let mateCocido = document.querySelector(".mateCocido");

//CAFE
cafe1.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe1.style.background = "green";
});
cafe2.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe2.style.background = "green";
});
cafe3.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe3.style.background = "green";
});
cafe4.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe4.style.background = "green";
});
cafe5.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe5.style.background = "green";
});
cafe6.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe6.style.background = "green";
});
cafe7.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe7.style.background = "green";
});
cafe8.addEventListener("click",()=>{
    variableOpcion = "café";
    cafe8.style.background = "green";
});
//TE
te1.addEventListener("click",()=>{
    variableOpcion = "té";
    te1.style.background = "green";
});
te2.addEventListener("click",()=>{
    variableOpcion = "té";
    te2.style.background = "green";
});
te3.addEventListener("click",()=>{
    variableOpcion = "té";
    te3.style.background = "green";
});
te4.addEventListener("click",()=>{
    variableOpcion = "té";
    te4.style.background = "green";
});
te5.addEventListener("click",()=>{
    variableOpcion = "té";
    te5.style.background = "green";
});
te6.addEventListener("click",()=>{
    variableOpcion = "té";
    te6.style.background = "green";
});
te7.addEventListener("click",()=>{
    variableOpcion = "té";
    te7.style.background = "green";
});
te8.addEventListener("click",()=>{
    variableOpcion = "té";
    te8.style.background = "green";
});
te9.addEventListener("click",()=>{
    variableOpcion = "té";
    te9.style.background = "green";
});
te10.addEventListener("click",()=>{
    variableOpcion = "té";
    te10.style.background = "green";
});
//CAFE CON LECHE
cafeLeche1.addEventListener("click",()=>{
    variableOpcion = "café";
    cafeLeche1.style.background = "green";
});
cafeLeche2.addEventListener("click",()=>{
    variableOpcion = "café";
    cafeLeche2.style.background = "green";
});
//LECHE DESCREMADA
cafeLecheDes.addEventListener("click",()=>{
    variableOpcion = "leche descremada";
    cafeLecheDes.style.background = "green";
});
mateCocido.addEventListener("click",()=>{
    variableOpcion = "mate cocido";
    mateCocido.style.background = "green";
});
//desayuno
function desayuno1 (){
    inputdesayuno1.style.display = "grid";
}
function desayuno2 (){
    inputdesayuno2.style.display = "grid";
}
function desayuno3 (){
    inputdesayuno3.style.display = "grid";
}
function desayuno4 (){
    inputdesayuno4.style.display = "grid";
}
function desayuno5 (){
    inputdesayuno5.style.display = "grid";
}
function desayuno6 (){
    inputdesayuno6.style.display = "grid";
}
function desayuno7 (){
    inputdesayuno7.style.display = "grid";
}
function desayuno8 (){
    inputdesayuno8.style.display = "grid";
}
function desayuno9 (){
    inputdesayuno9.style.display = "grid";
}
function desayuno10 (){
    inputdesayuno10.style.display = "grid";
}

//BOTONES DE SELECCION
//desayunoS
//desayuno1
function selecdesayuno1 (){
    comida.style.display = "grid";
    inputdesayuno1.style.display = "none";
    num = cantidaddesayuno1.value;
    objpedido.push(num + " Desayuno Completo con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Desayuno Completo con "+variableOpcion);
    cantidaddesayuno1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno2 (){
    comida.style.display = "grid";
    inputdesayuno2.style.display = "none";
    num = cantidaddesayuno2.value;
    objpedido.push(num + " Desayuno Aromas con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Desayuno Aromas con "+variableOpcion);
    cantidaddesayuno2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno3 (){
    comida.style.display = "grid";
    inputdesayuno3.style.display = "none";
    num = cantidaddesayuno3.value;
    objpedido.push(num + " Desayuno de campo con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Desayuno de campo con "+variableOpcion);
    cantidaddesayuno3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno4 (){
    comida.style.display = "grid";
    inputdesayuno4.style.display = "none";
    num = cantidaddesayuno4.value;
    objpedido.push(num + " Desayuno Arauco con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Desayuno Arauco con "+variableOpcion);
    cantidaddesayuno4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno5 (){
    comida.style.display = "grid";
    inputdesayuno5.style.display = "none";
    num = cantidaddesayuno5.value;
    objpedido.push(num + " Desayuno Americano con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Desayuno Americano con "+variableOpcion);
    cantidaddesayuno5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno6 (){
    comida.style.display = "grid";
    inputdesayuno6.style.display = "none";
    num = cantidaddesayuno6.value;
    objpedido.push(num + " Desayuno Tentación con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Desayuno Tentación con "+variableOpcion);
    cantidaddesayuno6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno7 (){
    comida.style.display = "grid";
    inputdesayuno7.style.display = "none";
    num = cantidaddesayuno7.value;
    objpedido.push(num + " Opciones light con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Opciones light con "+variableOpcion);
    cantidaddesayuno7.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno8 (){
    comida.style.display = "grid";
    inputdesayuno8.style.display = "none";
    num = cantidaddesayuno8.value;
    objpedido.push(num + " Fitness 1 con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Fitness 1");
    cantidaddesayuno8.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno9 (){
    comida.style.display = "grid";
    inputdesayuno9.style.display = "none";
    num = cantidaddesayuno9.value;
    objpedido.push(num + " Fitness 2 con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Fitness 2");
    cantidaddesayuno9.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}
function selecdesayuno10 (){
    comida.style.display = "grid";
    inputdesayuno10.style.display = "none";
    num = cantidaddesayuno10.value;
    objpedido.push(num + " Fitness 3 con "+variableOpcion);
    objCantidad.push(num);
    console.log(objCantidad);
    objNombre.push("Fitness 3");
    cantidaddesayuno10.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    variableOpcion="";
}

//BOTONES CANCELAR
//CANCELAR desayunoS
//desayuno1
function cancelardesayuno1 (){
    inputdesayuno1.style.display = "none";
    cantidaddesayuno1.value = null;
    cafe1.style.background = "#f8c98cf3";
    te1.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno2 (){
    inputdesayuno2.style.display = "none";
    cantidaddesayuno2.value = null;
    cafeLeche1.style.background = "#f8c98cf3";
    te2.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno3 (){
    inputdesayuno3.style.display = "none";
    cantidaddesayuno3.value = null;
    cafeLeche2.style.background = "#f8c98cf3";
    te3.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno4 (){
    inputdesayuno4.style.display = "none";
    cantidaddesayuno4.value = null;
    cafe2.style.background = "#f8c98cf3";
    te4.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno5 (){
    inputdesayuno5.style.display = "none";
    cantidaddesayuno5.value = null;
    cafe3.style.background = "#f8c98cf3";
    te5.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno6 (){
    inputdesayuno6.style.display = "none";
    cantidaddesayuno6.value = null;
    cafe4.style.background = "#f8c98cf3";
    te6.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno7 (){
    inputdesayuno7.style.display = "none";
    cantidaddesayuno7.value = null;
    cafe5.style.background = "#f8c98cf3";
    cafeLecheDes.style.background = "#f8c98cf3";
    te7.style.background = "#f8c98cf3";
    mateCocido.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno8 (){
    inputdesayuno8.style.display = "none";
    cantidaddesayuno8.value = null;
    cafe6.style.background = "#f8c98cf3";
    te8.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno9 (){
    inputdesayuno9.style.display = "none";
    cantidaddesayuno9.value = null;
    cafe7.style.background = "#f8c98cf3";
    te9.style.background = "#f8c98cf3";
    variableOpcion="";
}
function cancelardesayuno10 (){
    inputdesayuno10.style.display = "none";
    cantidaddesayuno10.value = null;
    cafe8.style.background = "#f8c98cf3";
    te10.style.background = "#f8c98cf3";
    variableOpcion="";
}

