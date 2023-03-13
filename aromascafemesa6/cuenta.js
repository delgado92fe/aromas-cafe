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
var objpedido = [];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR PIZZA
const inputpizza1 = document.querySelector(".inputpizza1");
const inputpizza2 = document.querySelector(".inputpizza2");

//CONTENEDOR HAMBURG
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");

//CONTENEDOR BEBIDAS
const inputbebida1 = document.querySelector(".inputbebida1");
const inputbebida2 = document.querySelector(".inputbebida2");


//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//PIZZAS
const cantidadpizza1 = document.getElementById("cantidadpizza1");
const cantidadpizza2 = document.getElementById("cantidadpizza2");

//HAMBURGESAS
const ingresocantidad1 = document.getElementById("ingresocantidad1");
const ingresocantidad2 = document.getElementById("ingresocantidad2");

//BEBIDAS
const cantidadbebida1 = document.getElementById("ingresocantidad1");
const cantidadbebida2 = document.getElementById("ingresocantidad2");

let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//PIZZA
function pizza1 (){
    inputpizza1.style.display = "grid";
}
function pizza2 (){
    inputpizza2.style.display = "grid";
}
//HAMBURG
function hamburg1 (){
    input1.style.display = "grid";
}
function hamburg2 (){
    input2.style.display = "grid";
}
//BEBIDAS
function bebida1 (){
    inputbebida1.style.display = "grid";
}
function bebida2 (){
    inputbebida2.style.display = "grid";
}

//BOTONES DE SELECCION
//PIZZAS
//PIZZA1
function selecPizza1 (){
    comida.style.display = "grid";
    inputpizza1.style.display = "none";
    num = cantidadpizza1.value;
    objpedido.push(num + " pizza1");
    
    cantidadpizza1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    
}
//PIZZA2
function selecPizza2 (){
    comida.style.display = "grid";
    inputpizza2.style.display = "none";
    num = cantidadpizza2.value;
    objpedido.push(num + " pizza2");
    
    cantidadpizza2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    
}

//HAMBURGESA1
function selec1 (){
    comida.style.display = "grid";
    input1.style.display = "none";
    num = ingresocantidad1.value;
    objpedido.push(num + " hamburg1");
    
    ingresocantidad1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
//HAMBURGESA2
function selec2 (){
    comida.style.display = "grid";
    input2.style.display = "none";
    num = ingresocantidad2.value;
    objpedido.push(num + " hamburg2 ");
    
    ingresocantidad2.innerHTML=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}

//BEBIDAS
//VASO1
function selecbebida1 (){
    comida.style.display = "grid";
    inputbebida1.style.display = "none";
    num = cantidadbebida1.value;
    objpedido.push(num + " bebida1");
    
    cantidadbebida1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    
}
//VASO2
function selecbebida2 (){
    comida.style.display = "grid";
    inputbebida2.style.display = "none";
    num = cantidadbebida2.value;
    objpedido.push(num + " bebida2");
    
    cantidadbebida2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
    
}
//BOTONES CANCELAR
//CANCELAR PIZZAS
//PIZZA1
function cancelarpizza1 (){
    inputpizza1.style.display = "none";
    cantidadpizza1.value = null;
    
}
function cancelarpizza2 (){
    inputpizza2.style.display = "none";
    cantidadpizza2.value = null;
    
}
//CANCELAR HAMBURGESAS
function cancelar1 (){
    input1.style.display = "none";
    ingresocantidad2.value = null;
    
}
function cancelar2 (){
    input2.style.display = "none";
    ingresocantidad2.value = null;
}
//CANCELAR BEBIDAS
function cancelarbebida1 (){
    inputbebida1.style.display = "none";
    ingresocantidad2.value = null;
    
}
function cancelarbebida2 (){
    inputbebida2.style.display = "none";
    ingresocantidad2.value = null;
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
    cuenta.style.display = "block";
let pedido = objpedido.toString();
        
    $.post('cliente.php',{
        nombre: pedido,
        //horaComienzo: horaComienzo
    })
    objpedido.splice(0);
    alert("su pedidio fue enviado con exto");
    pedido.innerHTML = "";
    
}
//FUNCION PARA CERRAR CUENTA Y MESA
function pedircuenta(){
    $.post('cliente.php',{
        horafinal: horaComienzo
    },
    function(dato){
        alert("su cuenta está en camino.");
    })
    localStorage.removeItem(identificador_del_cliente);
    cuenta.style.display = "none";
    pedido.innerHTML = "";
}
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
        cuenta.style.display = "block";
    }else/*(iu == obtener_localstorage().substr(7,20))*/{
        //alert("El ID es diferente");
        //console.log(obtener_localstorage());
        location.href = "menuAcompañante.html";
    }
    //alert("IU no encontrado");
    //console.log(obtener_localstorage());
}