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
//PRECIOS
let precio_bebida_chica1 = document.getElementById("precio_bebida_chica1");
let precio_bebida_grande1 = document.getElementById("precio_bebida_grande1");
let precio_bebida_chica2 = document.getElementById("precio_bebida_chica2");
let precio_bebida_grande2 = document.getElementById("precio_bebida_grande2");
let precio_bebida_chica3 = document.getElementById("precio_bebida_chica3");
let precio_bebida_grande3 = document.getElementById("precio_bebida_grande3");
let precio_bebida_chica4 = document.getElementById("precio_bebida_chica4");
let precio_bebida_grande4 = document.getElementById("precio_bebida_grande4");
let precio_agua1 = document.getElementById("precio_bebidaagua1");
let precio_agua2 = document.getElementById("precio_bebidaagua2");
let precio_350_coca = document.getElementById("precio-350-coca");
let precio_500_coca = document.getElementById("precio-500-coca");
let precio_1l_coca = document.getElementById("precio-1L-coca");
let precio_15_coca = document.getElementById("precio-15-coca");
let precio_350_fanta = document.getElementById("precio-350-fanta");
let precio_500_fanta = document.getElementById("precio-500-fanta");
let precio_1l_fanta = document.getElementById("precio-1L-fanta");
let precio_15_fanta = document.getElementById("precio-15-fanta");
let precio_350_sprite = document.getElementById("precio-350-sprite");
let precio_500_sprite = document.getElementById("precio-500-sprite");
let precio_1l_sprite = document.getElementById("precio-1L-sprite");
let precio_15_sprite = document.getElementById("precio-15-sprite");
let precio_corona_chica = document.getElementById("precio-corona-chica");
let precio_corona_grande = document.getElementById("precio-corona-grande");
let precio_bebida9 = document.getElementById("precio_bebida9");
let precio_bebida10 = document.getElementById("precio_bebida10");
let precio_bebida11 = document.getElementById("precio_bebida11");
let precio_bebida12 = document.getElementById("precio_bebida12");
let precio_bebida13 = document.getElementById("precio_bebida13");
let precio_bebida14 = document.getElementById("precio_bebida14");
let precio_bebida15 = document.getElementById("precio_bebida15");
let precio_bebida16 = document.getElementById("precio_bebida16");

//CONEXION A PRECIOS
var salida_precios = $.ajax({
    url: 'precios.php',
    dataType: 'text',
    async: false
}).responseText;
json = JSON.parse(salida_precios);

for( i in json){
    if(json[i].nombre == "Jugo de naranja mediano"){
    console.log(json[i].nombre)
}
    switch(json[i].nombre){
        case "Jugo de naranja mediano": precio_bebida_chica1.innerHTML = 'Mediano $'+json[i].precio;
        break;
        case "Jugo de naranja grande": precio_bebida_grande1.innerHTML = 'Grande $'+json[i].precio;
        break;
        case "Limonada mediana": precio_bebida_chica2.innerHTML = 'Mediano $'+json[i].precio;
        break;
        case "Limonada grande": precio_bebida_grande2.innerHTML = 'Grande $'+json[i].precio;
        break;
        case "Mix mediano": precio_bebida_chica3.innerHTML = 'Mediano $'+json[i].precio;
        break;
        case "Mix grande": precio_bebida_grande3.innerHTML = 'Grande $'+json[i].precio;
        break;
        case "Frutas de estacion chico": precio_bebida_chica4.innerHTML = 'Mediano $'+json[i].precio;
        break;
        case "Frutas de estacion grande": precio_bebida_grande4.innerHTML = 'Grande $'+json[i].precio;
        break;
        case "Agua": precio_agua1.innerHTML = " $"+json[i].precio;
        break;
        case "Agua saborizada": precio_agua2.innerHTML = " $"+json[i].precio;
        break;
        case "Coca cola 350": precio_350_coca.innerHTML = " $"+json[i].precio;
        break;
        case "Coca cola 500": precio_500_coca.innerHTML = " $"+json[i].precio;
        break;
        case "Coca cola 1L": precio_1l_coca.innerHTML = " $"+json[i].precio;
        break;
        case "Coca cola 1,5L": precio_15_coca.innerHTML = " $"+json[i].precio;
        break;
        case "Fanta 350": precio_350_fanta.innerHTML = " $"+json[i].precio;
        break;
        case "Fanta 500": precio_500_fanta.innerHTML = " $"+json[i].precio;
        break;
        case "Fata 1L": precio_1l_fanta.innerHTML = " $"+json[i].precio;
        break;
        case "Fanta 1,5L": precio_15_fanta.innerHTML = " $"+json[i].precio;
        break;
        case "Sprite 350": precio_350_sprite.innerHTML = " $"+json[i].precio;
        break;
        case "Sprite 500": precio_500_sprite.innerHTML = " $"+json[i].precio;
        break;
        case "Sprite 1L": precio_1l_sprite.innerHTML = " $"+json[i].precio;
        break;
        case "Sprite 1,5L": precio_15_sprite.innerHTML = " $"+json[i].precio;
        break;
        case "Corona chica": precio_corona_chica.innerHTML = " $"+json[i].precio;
        break;
        case "Corona grande": precio_corona_grande.innerHTML = " $"+json[i].precio;
        break;
        case "Heineken": precio_bebida9.innerHTML = " $"+json[i].precio;
        break;
        case "Miller": precio_bebida10.innerHTML = " $"+json[i].precio;
        break;
        case "Salta": precio_bebida11.innerHTML = " $"+json[i].precio;
        break;
        case "Stella": precio_bebida12.innerHTML = " $"+json[i].precio;
        break;
        case "Imperial": precio_bebida13.innerHTML = " $"+json[i].precio;
        break;
        case "Patagonia": precio_bebida14.innerHTML = " $"+json[i].precio;
        break;
        case "Blend Remolacha": precio_bebida15.innerHTML = " $"+json[i].precio;
        break;
        case "Blend Curcumsa": precio_bebida16.innerHTML = " $"+json[i].precio;
        break;
    }
}

var objpedido = [];
var objNombre=[];
var objCantidad=[];

let pedido = document.getElementById("pedido");

// INPUT DIV CONTENEDOR
//CONTENEDOR bebida
const inputbebida1 = document.querySelector(".inputbebida1");
const inputbebida2 = document.querySelector(".inputbebida2");
const inputbebida3 = document.querySelector(".inputbebida3");
const inputbebida4 = document.querySelector(".inputbebida4");
const inputbebida5 = document.querySelector(".inputbebida5");
const inputbebida6 = document.querySelector(".inputbebida6");
const inputbebida7 = document.querySelector(".inputbebida7");
const inputbebida8 = document.querySelector(".inputbebida8");
const inputbebida9 = document.querySelector(".inputbebida9");
const inputbebida10 = document.querySelector(".inputbebida10");
const inputbebida11 = document.querySelector(".inputbebida11");
const inputbebida12 = document.querySelector(".inputbebida12");
const inputbebida13 = document.querySelector(".inputbebida13");
const inputbebida14 = document.querySelector(".inputbebida14");
const inputbebida15 = document.querySelector(".inputbebida15");
const inputbebida16 = document.querySelector(".inputbebida16");
const inputbebidaagua1 = document.querySelector(".inputbebidaagua1");
const inputbebidaagua2 = document.querySelector(".inputbebidaagua2");



//ID BOTONES DE LOS INPUT 
const comida = document.querySelector(".comida");
const cuenta = document.getElementById("cuenta");

//ID INGRESO CANTIDAD
//bebidaS
const cantidadbebida1 = document.querySelector(".ingresonumero1");
const cantidadbebida2 = document.querySelector(".ingresonumero2");
const cantidadbebida3 = document.querySelector(".ingresonumero3");
const cantidadbebida4 = document.querySelector(".ingresonumero4");
const cantidadbebida5 = document.querySelector(".ingresonumero5");
const cantidadbebida6 = document.querySelector(".ingresonumero6");
const cantidadbebida7 = document.querySelector(".ingresonumero7");
const cantidadbebida8 = document.querySelector(".ingresonumero8");
const cantidadbebida9 = document.querySelector(".ingresonumero9");
const cantidadbebida10 = document.querySelector(".ingresonumero10");
const cantidadbebida11 = document.querySelector(".ingresonumero11");
const cantidadbebida12 = document.querySelector(".ingresonumero12");
const cantidadbebida13 = document.querySelector(".ingresonumero13");
const cantidadbebida14 = document.querySelector(".ingresonumero14");
const cantidadbebida15 = document.querySelector(".ingresonumero15");
const cantidadbebida16 = document.querySelector(".ingresonumero16");
const cantidadbebidaagua1 = document.querySelector(".ingresonumeroagua1");
const cantidadbebidaagua2 = document.querySelector(".ingresonumeroagua2");

let tamañojugo="";
//BOTONES SELECT
const selecChica1 = document.querySelector(".selecChica1");
selecChica1.addEventListener("click",()=>{
    tamañojugo = "Jugo de naranja mediano";
    inputbebida1.style.display = "grid";
});
const selecGrande1 = document.querySelector(".selecGrande1");
selecGrande1.addEventListener("click",()=>{
    tamañojugo = "Jugo de naranja grande";
    inputbebida1.style.display = "grid";
});
const selecChica2 = document.querySelector(".selecChica2");
selecChica2.addEventListener("click",()=>{
    tamañojugo = " Limonada mediana";
    inputbebida2.style.display = "grid";
});
const selecGrande2 = document.querySelector(".selecGrande2");
selecGrande2.addEventListener("click",()=>{
    tamañojugo = " Limonada grande";
    inputbebida2.style.display = "grid";
});
const selecChica3 = document.querySelector(".selecChica3");
selecChica3.addEventListener("click",()=>{
    tamañojugo = " Mix mediano";
    inputbebida3.style.display = "grid";
});
const selecGrande3 = document.querySelector(".selecGrande3");
selecGrande3.addEventListener("click",()=>{
    tamañojugo = " Mix grande";
    inputbebida3.style.display = "grid";
});
const selecChica4 = document.querySelector(".selecChica4");
selecChica4.addEventListener("click",()=>{
    tamañojugo = " Frutas de estacion madiano";
    inputbebida4.style.display = "grid";
});
const selecGrande4 = document.querySelector(".selecGrande4");
selecGrande4.addEventListener("click",()=>{
    tamañojugo = " Frutas de estacion grande";
    inputbebida4.style.display = "grid";
});
//BEBIDAS
const selec350 = document.querySelector(".selec350-1");
selec350.addEventListener("click",()=>{
    tamañojugo = " Coca cola 350";
    inputbebida5.style.display = "grid";
});
const selec500 = document.querySelector(".selec500-1");
selec500.addEventListener("click",()=>{
    tamañojugo = " Coca cola 500";
    inputbebida5.style.display = "grid";
});
const seleclitro1 = document.querySelector(".seleclitro-1");
seleclitro1.addEventListener("click",()=>{
    tamañojugo = " Coca cola 1L";
    inputbebida5.style.display = "grid";
});
const seleclitro15 = document.querySelector(".seleclitro1-15");
seleclitro15.addEventListener("click",()=>{
    tamañojugo = " Coca cola 1,5L";
    inputbebida5.style.display = "grid";
});
const selec3502 = document.querySelector(".selec350-2");
selec3502.addEventListener("click",()=>{
    tamañojugo = " Fanta 350";
    inputbebida6.style.display = "grid";
});
const selec5002 = document.querySelector(".selec500-2");
selec5002.addEventListener("click",()=>{
    tamañojugo = " Fanta 500";
    inputbebida6.style.display = "grid";
});
const seleclitro2 = document.querySelector(".seleclitro-2");
seleclitro2.addEventListener("click",()=>{
    tamañojugo = " Fanta 1L";
    inputbebida6.style.display = "grid";
});
const seleclitro215 = document.querySelector(".seleclitro2-15");
seleclitro215.addEventListener("click",()=>{
    tamañojugo = " Fanta 1,5L";
    inputbebida6.style.display = "grid";
});
const selecSprite350 = document.querySelector(".selec350-3");
selecSprite350.addEventListener("click",()=>{
    tamañojugo = " Sprite 350";
    inputbebida7.style.display = "grid";
});
const selecSprite500 = document.querySelector(".selec500-3");
selecSprite500.addEventListener("click",()=>{
    tamañojugo = " Sprite 500";
    inputbebida7.style.display = "grid";
});
const selecSpritelitro = document.querySelector(".seleclitro-3");
selecSpritelitro.addEventListener("click",()=>{
    tamañojugo = " Sprite 1L";
    inputbebida7.style.display = "grid";
});
const selecSpritelitro15 = document.querySelector(".seleclitro3-15");
selecSpritelitro15.addEventListener("click",()=>{
    tamañojugo = " Sprite 1,5L";
    inputbebida7.style.display = "grid";
});
const selecCoronaChica = document.querySelector(".selecCoronaChica");
selecCoronaChica.addEventListener("click",()=>{
    tamañojugo = " Corona chica";
    inputbebida8.style.display = "grid";
});
const selecCoronaGrande = document.querySelector(".selecCoronaGrande");
selecCoronaGrande.addEventListener("click",()=>{
    tamañojugo = " Corona grande";
    inputbebida8.style.display = "grid";
});



let num=0;
let nombrepedido="";
//FUNCION PARA APARECER CUADRO PARA SELECCIONAR CANTIDAD
//bebida
function bebida9 (){
    inputbebida9.style.display = "grid";
}
function bebida10 (){
    inputbebida10.style.display = "grid";
}
function bebida11 (){
    inputbebida11.style.display = "grid";
}
function bebida12 (){
    inputbebida12.style.display = "grid";
}
function bebida13 (){
    inputbebida13.style.display = "grid";
}
function bebida14 (){
    inputbebida14.style.display = "grid";
}
function bebida15 (){
    inputbebida15.style.display = "grid";
}
function bebida16 (){
    inputbebida16.style.display = "grid";
}
function bebidaagua1 (){
    inputbebidaagua1.style.display = "grid";
}
function bebidaagua2 (){
    inputbebidaagua2.style.display = "grid";
}

//BOTONES DE SELECCION
//bebidaS
//bebida1
function selecbebida1 (){
    comida.style.display = "grid";
    inputbebida1.style.display = "none";
    num = cantidadbebida1.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    cantidadbebida1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida2 (){
    comida.style.display = "grid";
    inputbebida2.style.display = "none";
    num = cantidadbebida2.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    cantidadbebida2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida3 (){
    comida.style.display = "grid";
    inputbebida3.style.display = "none";
    num = cantidadbebida3.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    cantidadbebida3.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida4 (){
    comida.style.display = "grid";
    inputbebida4.style.display = "none";
    num = cantidadbebida4.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    cantidadbebida4.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida5 (){
    comida.style.display = "grid";
    inputbebida5.style.display = "none";
    num = cantidadbebida5.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    cantidadbebida5.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida6 (){
    comida.style.display = "grid";
    inputbebida6.style.display = "none";
    num = cantidadbebida6.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    cantidadbebida6.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida7 (){
    comida.style.display = "grid";
    inputbebida7.style.display = "none";
    num = cantidadbebida7.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    cantidadbebida7.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida8 (){
    comida.style.display = "grid";
    inputbebida8.style.display = "none";
    num = cantidadbebida8.value;
    objpedido.push(num + tamañojugo);
    objCantidad.push(num);
    objNombre.push(tamañojugo);
    console.log(objNombre);
    cantidadbebida8.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida9 (){
    comida.style.display = "grid";
    inputbebida9.style.display = "none";
    num = cantidadbebida9.value;
    objpedido.push(num + " Heineken");
    objCantidad.push(num);
    objNombre.push("Heineken");
    cantidadbebida9.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida10 (){
    comida.style.display = "grid";
    inputbebida10.style.display = "none";
    num = cantidadbebida10.value;
    objpedido.push(num + " Miller");
    objCantidad.push(num);
    objNombre.push("Miller");
    cantidadbebida10.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida11 (){
    comida.style.display = "grid";
    inputbebida11.style.display = "none";
    num = cantidadbebida11.value;
    objpedido.push(num + " Salta");
    objCantidad.push(num);
    objNombre.push("Salta");
    cantidadbebida11.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida12 (){
    comida.style.display = "grid";
    inputbebida12.style.display = "none";
    num = cantidadbebida12.value;
    objpedido.push(num + " Stella");
    objCantidad.push(num);
    objNombre.push("Stella");
    cantidadbebida12.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida13 (){
    comida.style.display = "grid";
    inputbebida13.style.display = "none";
    num = cantidadbebida13.value;
    objpedido.push(num + " Imperial");
    objCantidad.push(num);
    objNombre.push("Imperial");
    cantidadbebida13.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida14 (){
    comida.style.display = "grid";
    inputbebida14.style.display = "none";
    num = cantidadbebida14.value;
    objpedido.push(num + " Patagonia");
    objCantidad.push(num);
    objNombre.push("Patagonia");
    cantidadbebida14.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida15 (){
    comida.style.display = "grid";
    inputbebida15.style.display = "none";
    num = cantidadbebida15.value;
    objpedido.push(num + " Blend Remolacha");
    objCantidad.push(num);
    objNombre.push("Blend Remolacha");
    cantidadbebida15.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebida16 (){
    comida.style.display = "grid";
    inputbebida16.style.display = "none";
    num = cantidadbebida16.value;
    objpedido.push(num + " Blend Curcumsa");
    objCantidad.push(num);
    objNombre.push("Blend Curcumsa");
    cantidadbebida16.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebidaagua1 (){
    comida.style.display = "grid";
    inputbebidaagua1.style.display = "none";
    num = cantidadbebidaagua1.value;
    objpedido.push(num + " Agua");
    objCantidad.push(num);
    objNombre.push("Agua");
    cantidadbebidaagua1.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}
function selecbebidaagua2 (){
    comida.style.display = "grid";
    inputbebidaagua2.style.display = "none";
    num = cantidadbebidaagua2.value;
    objpedido.push(num + " Agua saborizada");
    objCantidad.push(num);
    objNombre.push("Agua saborizada");
    cantidadbebidaagua2.value=null;
    pedido.innerHTML = null;
    pedido.innerHTML = objpedido.toString();
}


//BOTONES CANCELAR
//CANCELAR bebidaS
//bebida1
function cancelarbebida1 (){
    inputbebida1.style.display = "none";
    cantidadbebida1.value = null;
}
function cancelarbebida2 (){
    inputbebida2.style.display = "none";
    cantidadbebida2.value = null;
}
function cancelarbebida3 (){
    inputbebida3.style.display = "none";
    cantidadbebida3.value = null;
}
function cancelarbebida4 (){
    inputbebida4.style.display = "none";
    cantidadbebida4.value = null;
}
function cancelarbebida5 (){
    inputbebida5.style.display = "none";
    cantidadbebida5.value = null;
}
function cancelarbebida6 (){
    inputbebida6.style.display = "none";
    cantidadbebida6.value = null;
}
function cancelarbebida7(){
    inputbebida7.style.display = "none";
    cantidadbebida7.value = null;
}
function cancelarbebida8 (){
    inputbebida8.style.display = "none";
    cantidadbebida8.value = null;
}
function cancelarbebida9 (){
    inputbebida9.style.display = "none";
    cantidadbebida9.value = null;
}
function cancelarbebida10 (){
    inputbebida10.style.display = "none";
    cantidadbebida10.value = null;
}
function cancelarbebida11 (){
    inputbebida11.style.display = "none";
    cantidadbebida11.value = null;
}
function cancelarbebida12 (){
    inputbebida12.style.display = "none";
    cantidadbebida12.value = null;
}
function cancelarbebida13 (){
    inputbebida13.style.display = "none";
    cantidadbebida13.value = null;
}
function cancelarbebida14 (){
    inputbebida14.style.display = "none";
    cantidadbebida14.value = null;
}
function cancelarbebida15 (){
    inputbebida15.style.display = "none";
    cantidadbebida15.value = null;
}
function cancelarbebida16 (){
    inputbebida16.style.display = "none";
    cantidadbebida16.value = null;
}


//HORA
const d = new Date();
let hora = d.getHours();
let minutos = d.getMinutes();
let horaComienzo = hora+":"+minutos;
