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

//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

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


//CUENTA
