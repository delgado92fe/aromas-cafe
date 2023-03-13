let arrayProductos=[];
let arrayPrecio=[];

class cierreMEesa{
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }
}
//MESA2
let cierreTexto2=[];
let cierreTotal2=[];
//MESA3
let cierreTexto3=[];
let cierreTotal3=[];
//MESA4
let cierreTexto4=[];
let cierreTotal4=[];






function precios(){
    var salidaPrecio = $.ajax({
        url:'bajadaPrecios.php',
        dataType:'text',
        async: false
    }).responseText;
    jso = JSON.parse(salidaPrecio);
    
    for(a in jso.nombre){
        arrayProductos[a] = jso.nombre[a];
        arrayPrecio[a] = jso.precio[a];
    }
}
precios();
//CARGANDO CREATEeLEMENT
//mesa1
let comienzomesa1 = document.createElement("p");
let cierremesa1 = document.createElement("p");
let pedidosmesa1 = document.createElement("div");
//mesa2
let comienzomesa2 = document.createElement("p");
let cierremesa2 = document.createElement("p");
let pedidosmesa2 = document.createElement("div");
//mesa3
let comienzomesa3 = document.createElement("p");
let cierremesa3 = document.createElement("p");
let pedidosmesa3 = document.createElement("div");
//mesa4
let comienzomesa4 = document.createElement("p");
let cierremesa4 = document.createElement("p");
let pedidosmesa4 = document.createElement("div");
//mesa5
let comienzomesa5 = document.createElement("p");
let cierremesa5 = document.createElement("p");
let pedidosmesa5 = document.createElement("div");
//mesa6
let comienzomesa6 = document.createElement("p");
let cierremesa6 = document.createElement("p");
let pedidosmesa6 = document.createElement("div");
//mesa7
let comienzomesa7 = document.createElement("p");
let cierremesa7 = document.createElement("p");
let pedidosmesa7 = document.createElement("div");
//mesa8
let comienzomesa8 = document.createElement("p");
let cierremesa8 = document.createElement("p");
let pedidosmesa8 = document.createElement("div");
//mesa9
let comienzomesa9 = document.createElement("p");
let cierremesa9 = document.createElement("p");
let pedidosmesa9 = document.createElement("div");
//mesa10
let comienzomesa10 = document.createElement("p");
let cierremesa10 = document.createElement("p");
let pedidosmesa10 = document.createElement("div");
//mesa11
let comienzomesa11 = document.createElement("p");
let cierremesa11 = document.createElement("p");
let pedidosmesa11 = document.createElement("div");
//mesa12
let comienzomesa12 = document.createElement("p");
let cierremesa12 = document.createElement("p");
let pedidosmesa12 = document.createElement("div");
//mesa13
let comienzomesa13 = document.createElement("p");
let cierremesa13 = document.createElement("p");
let pedidosmesa13 = document.createElement("div");


//CARGANDO LET'S & CONT
let json="";
let horain="";

//ID mesas
const mesa1 = document.getElementById("mesa1");
const mesa2 = document.getElementById("mesa2");
const mesa3 = document.getElementById("mesa3");
const mesa4 = document.getElementById("mesa4");
const mesa5 = document.getElementById("mesa5");
const mesa6 = document.getElementById("mesa6");
const mesa7 = document.getElementById("mesa7");
const mesa8 = document.getElementById("mesa8");
const mesa9 = document.getElementById("mesa9");
const mesa10 = document.getElementById("mesa10");
const mesa11 = document.getElementById("mesa11");
const mesa12 = document.getElementById("mesa12");
const mesa13 = document.getElementById("mesa13");

//ID total
//const totalContenido = document.getElementById("totalContenido");
const totalContenidoMesa1 = document.getElementById("totalContenidoMesa1");
const totalContenidoMesa2 = document.getElementById("totalContenidoMesa2");
const totalContenidoMesa3 = document.getElementById("totalContenidoMesa3");
const totalContenidoMesa4 = document.getElementById("totalContenidoMesa4");
const totalContenidoMesa5 = document.getElementById("totalContenidoMesa5");
const totalContenidoMesa6 = document.getElementById("totalContenidoMesa6");
const totalContenidoMesa7 = document.getElementById("totalContenidoMesa7");
const totalContenidoMesa8 = document.getElementById("totalContenidoMesa8");
const totalContenidoMesa9 = document.getElementById("totalContenidoMesa9");
const totalContenidoMesa10 = document.getElementById("totalContenidoMesa10");
const totalContenidoMesa11 = document.getElementById("totalContenidoMesa11");
const totalContenidoMesa12 = document.getElementById("totalContenidoMesa12");
const totalContenidoMesa13 = document.getElementById("totalContenidoMesa13");

//ALERT POR MESA
//1ra mesa
const alertmesa1 = document.querySelector(".mesa1");
alertmesa1.addEventListener("click",alerta_mesa1);
function alerta_mesa1(){
    alertmesa1.style.background = "rgb(43, 43, 42)";
}
//2da mesa
const alertmesa2 = document.querySelector(".mesa2");
alertmesa2.addEventListener("click",alerta_mesa2);
function alerta_mesa2(){
    alertmesa2.style.background = "rgb(43, 43, 42)";
}
//3ra mesa 
const alertmesa3 = document.querySelector(".mesa3");
alertmesa3.addEventListener("click",alerta_mesa3);
function alerta_mesa3(){
    alertmesa3.style.background = "rgb(43, 43, 42)";
}
//4ta mesa
const alertmesa4 = document.querySelector(".mesa4");
alertmesa4.addEventListener("click",alerta_mesa4);
function alerta_mesa4(){
    alertmesa4.style.background = "rgb(43, 43, 42)";
}
//5ta mesa
const alertmesa5 = document.querySelector(".mesa5");
alertmesa5.addEventListener("click",alerta_mesa5);
function alerta_mesa5(){
    alertmesa5.style.background = "rgb(43, 43, 42)";
}
//6ta mesa
const alertmesa6 = document.querySelector(".mesa6");
alertmesa6.addEventListener("click",alerta_mesa6);
function alerta_mesa6(){
    alertmesa6.style.background = "rgb(43, 43, 42)";
}
//7ma mesa
const alertmesa7 = document.querySelector(".mesa7");
alertmesa7.addEventListener("click",alerta_mesa7);
function alerta_mesa7(){
    alertmesa7.style.background = "rgb(43, 43, 42)";
}
//8va mesa 
const alertmesa8 = document.querySelector(".mesa8");
alertmesa8.addEventListener("click",alerta_mesa8);
function alerta_mesa8(){
    alertmesa8.style.background = "rgb(43, 43, 42)";
}
//9na mesa
const alertmesa9 = document.querySelector(".mesa9");
alertmesa9.addEventListener("click",alerta_mesa9);
function alerta_mesa9(){
    alertmesa9.style.background = "rgb(43, 43, 42)";
}
//10ma mesa
const alertmesa10 = document.querySelector(".mesa10");
alertmesa10.addEventListener("click",alerta_mesa10);
function alerta_mesa10(){
    alertmesa10.style.background = "rgb(43, 43, 42)";
}
//11va mesa
const alertmesa11 = document.querySelector(".mesa11");
alertmesa11.addEventListener("click",alerta_mesa11);
function alerta_mesa11(){
    alertmesa11.style.background = "rgb(43, 43, 42)";
}
//12va mesa
const alertmesa12 = document.querySelector(".mesa12");
alertmesa12.addEventListener("click",alerta_mesa12);
function alerta_mesa12(){
    alertmesa12.style.background = "rgb(43, 43, 42)";
}
//13va mesa 
const alertmesa13 = document.querySelector(".mesa13");
alertmesa13.addEventListener("click",alerta_mesa13);
function alerta_mesa13(){
    alertmesa13.style.background = "rgb(43, 43, 42)";
}

//HORA
const d = new Date();
let pedidoParaGuardar="";
let pedidoParaGuardarmesa1="";
let pedidoParaGuardarmesa2="";

var contador1 =0;
var contador2 =0;
var contador3 =0;
var contador4 =0;
var contador5 =0;
var contador6 =0;
var contador7 =0;
var contador8 =0;
var contador9 =0;
var contador10 =0;
var contador11 =0;
var contador12 =0;
var contador13 =0;

//FUNCIO QUE RECIBE AJAX
function realTime(){

    //repito el codigo para mesa1
    function mesa1(){
        var tabla = $.ajax({
            url:'salidadbmesa1.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
        console.log("json "+json);
    //CARGANDO HORA INICIO
        let pedido1 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa1 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido1 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa1.innerHTML = pedido1;
        }else{
            comienzomesa1.innerHTML = horainicio_mesa1;
            horain_mesa1 = json.horainit;

            if(contador1 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido1 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                                
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa1.style.background = "blue";
                    }
                }
                totalContenidoMesa1.innerHTML = totaldefinitivo;
                pedidosmesa1.innerHTML = pedido1;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa1 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa1.innerHTML = horaCierre_mesa1;
                }
                contador1++;
            }
            return 
        }//CIERRA FUNCTION MESA1
    }
    //comienza mesa2
    function mesa2(){
        //var contador =0;
        var tabla = $.ajax({
            url:'salidadbmesa2.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido2 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa2 = `<p class="horainicio">${json.horainit}</p>`;
        horain_mesa2 = json.horainit;
        if(json.orden == null){
            pedido2 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa2.innerHTML = pedido2;
        }else{
        comienzomesa2.innerHTML = horainicio_mesa2;
            horain_mesa2 = json.horainit;
            if(contador2 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() ==    arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                cierreTotal2.push(totalCobrar);
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido2 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                                cierreTexto2.push(json.unidades[j] + json.orden[j]);
                            }
                        }
                    //pedido2 +=`<p class="pedidomesa2">${json.orden[j]}</p>`;
                        alertmesa2.style.background = "blue";
                    }
                }
                totalContenidoMesa2.innerHTML = totaldefinitivo;
                pedidosmesa2.innerHTML = pedido2;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                    horaCierre_mesa2 = `<p class="horacierre">${json.final[j]}</p>`;
                    cierremesa2.innerHTML = horaCierre_mesa2;
                }
                contador2++;
            }
        return 
        }
    }//CIERRA FUNCTION MESA2

    //repito el codigo para mesa3
    function mesa3(){
        var tabla = $.ajax({
            url:'salidadbmesa3.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido3 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa3 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido3 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa3.innerHTML = pedido3;
        }else{
            comienzomesa3.innerHTML = horainicio_mesa3;
            if(json.horainit != null){
                horain_mesa3 = json.horainit;
            }
            if(contador3 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                    for(i in arrayProductos){
                        if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                            total = json.unidades[j] * arrayPrecio[i];
                            totalCobrar +=total;
                            cierreTotal3.push(totalCobrar);
                            totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                            pedido3 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            cierreTexto3.push(json.unidades[j] + json.orden[j])
                        }
                    }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                    alertmesa3.style.background = "blue";
                    }
                }
                totalContenidoMesa3.innerHTML = totaldefinitivo;
                pedidosmesa3.innerHTML = pedido3;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                    horaCierre_mesa3 = `<p class="horacierre">${json.final[j]}</p>`;
                    cierremesa3.innerHTML = horaCierre_mesa3;
                }
                contador3++;
            }
            return 
        }
    }//CIERRA MESA3
    
    //repito el codigo para mesa4
    function mesa4(){
        var tabla = $.ajax({
            url:'salidadbmesa4.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido4 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa4 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido4 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa4.innerHTML = pedido4;
        }else{
            comienzomesa4.innerHTML = horainicio_mesa4;
            horain_mesa4 = json.horainit;

            if(contador4 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                cierreTotal4 = totalCobrar;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido4 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                                cierreTexto4.push(json.unidades[j] + json.orden[j])
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa4.style.background = "blue";
                    }
                }
                totalContenidoMesa4.innerHTML = totaldefinitivo;
                pedidosmesa4.innerHTML = pedido4;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                    horaCierre_mesa4 = `<p class="horacierre">${json.final[j]}</p>`;
                    cierremesa4.innerHTML = horaCierre_mesa4;
                }
            contador4++;
            }
            return 
        }
    }//CIERRA FUNCTION MESA4

    //repito el codigo para mesa5
    function mesa5(){
        var tabla = $.ajax({
            url:'salidadbmesa5.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido5 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa5 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido5 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa5.innerHTML = pedido5;
        }else{
            comienzomesa5.innerHTML = horainicio_mesa5;
            horain_mesa5 = json.horainit;

            if(contador5 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido5 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa5.style.background = "blue";
                    }
                }
                totalContenidoMesa5.innerHTML = totaldefinitivo;
                pedidosmesa5.innerHTML = pedido5;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                    horaCierre_mesa5 = `<p class="horacierre">${json.final[j]}</p>`;
                    cierremesa5.innerHTML = horaCierre_mesa5;
                }
            contador5++;
            }
            return 
        }
    }//CIERRA FUNCTION MESA5
    
    //repito el codigo para mesa6
    function mesa6(){
        var tabla = $.ajax({
            url:'salidadbmesa6.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido6 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa6 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido6 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa6.innerHTML = pedido6;
        }else{
            comienzomesa6.innerHTML = horainicio_mesa6;
            horain_mesa6 = json.horainit;

            if(contador6 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido6 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa6.style.background = "blue";
                    }
                }
                totalContenidoMesa6.innerHTML = totaldefinitivo;
                pedidosmesa6.innerHTML = pedido6;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa6 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa6.innerHTML = horaCierre_mesa6;
                }
            contador6++;
            }
            return 
        }
    }//CIERRA FUNCTION MESA6
    
    //repito el codigo para mesa7
    function mesa7(){
        var tabla = $.ajax({
            url:'salidadbmesa7.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido7 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa7 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido7 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa7.innerHTML = pedido7;
        }else{
            comienzomesa7.innerHTML = horainicio_mesa7;
            horain_mesa7 = json.horainit;

            if(contador7 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido7 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa7.style.background = "blue";
                    }
                }
                totalContenidoMesa7.innerHTML = totaldefinitivo;
                pedidosmesa7.innerHTML = pedido7;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa7 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa7.innerHTML = horaCierre_mesa7;
                }
                contador7++;
            }
            return
        }
    }//CIERRA FUNCTION MESA7
    
    //repito el codigo para mesa8
    function mesa8(){
        var tabla = $.ajax({
            url:'salidadbmesa8.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido8 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa8 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido8 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa8.innerHTML = pedido8;
        }else{
            comienzomesa8.innerHTML = horainicio_mesa8;
            horain_mesa8 = json.horainit;

            if(contador8 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido8 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa8.style.background = "blue";
                    }
                }
                totalContenidoMesa8.innerHTML = totaldefinitivo;
                pedidosmesa8.innerHTML = pedido8;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa8 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa8.innerHTML = horaCierre_mesa8;
                }
            contador8++;
            }
            return
        }
    }//CIERRA FUNCTION MESA8
    
    //repito el codigo para mesa9
    function mesa9(){
        var tabla = $.ajax({
            url:'salidadbmesa9.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido9 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa9 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido9 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa9.innerHTML = pedido9;
        }else{
            comienzomesa9.innerHTML = horainicio_mesa9;
            horain_mesa9 = json.horainit;

            if(contador9 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido9 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa9.style.background = "blue";
                    }
                }
                totalContenidoMesa9.innerHTML = totaldefinitivo;
                pedidosmesa9.innerHTML = pedido9;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa9 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa9.innerHTML = horaCierre_mesa9;
                }
            contador9++;
            }
            return 
        }
    }//CIERRA FUNCTION MESA9
    
    //repito el codigo para mesa10
    function mesa10(){
        var tabla = $.ajax({
            url:'salidadbmesa10.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido10 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa10 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido10 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa10.innerHTML = pedido10;
        }else{
            comienzomesa10.innerHTML = horainicio_mesa10;
            horain_mesa10 = json.horainit;

            if(contador10 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido10 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa10.style.background = "blue";
                    }
                }
                totalContenidoMesa10.innerHTML = totaldefinitivo;
                pedidosmesa10.innerHTML = pedido10;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa10 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa10.innerHTML = horaCierre_mesa10;
                }
            contador10++;
            }
            return
        }
    }//CIERRA FUNCTION MESA10
    
    //repito el codigo para mesa11
    function mesa11(){
        var tabla = $.ajax({
            url:'salidadbmesa11.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido11 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa11 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido11 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa11.innerHTML = pedido11;
        }else{
            comienzomesa11.innerHTML = horainicio_mesa11;
            horain_mesa11 = json.horainit;

            if(contador11 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido11 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa11.style.background = "blue";
                    }
                }
                totalContenidoMesa11.innerHTML = totaldefinitivo;
                pedidosmesa11.innerHTML = pedido11;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa11 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa11.innerHTML = horaCierre_mesa11;
                }
                contador11++;
            }
            return
        }
    }//CIERRA FUNCTION MESA11
    
    //repito el codigo para mesa12
    function mesa12(){
        var tabla = $.ajax({
            url:'salidadbmesa12.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido12 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa12 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido12 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa12.innerHTML = pedido12;
        }else{
            comienzomesa12.innerHTML = horainicio_mesa12;
            horain_mesa12 = json.horainit;

            if(contador12 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido12 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa12.style.background = "blue";
                    }
                }
                totalContenidoMesa12.innerHTML = totaldefinitivo;
                pedidosmesa12.innerHTML = pedido12;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa12 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa12.innerHTML = horaCierre_mesa12;
                }
                contador12++;
            }
            return
        }
    }//CIERRA FUNCTION MESA12
    
    //repito el codigo para mesa13
    function mesa13(){
        var tabla = $.ajax({
            url:'salidadbmesa13.php',
            dataType:'text',
            async:false
        }).responseText;
        json = JSON.parse(tabla);
    //CARGANDO HORA INICIO
        let pedido13 = "";
        let totaldefinitivo="";
        let total=0;
        let totalCobrar=0;
        horainicio_mesa13 = `<p class="horainicio">${json.horainit}</p>`;
        if(json.orden == null){
            pedido13 =`<div class="contenpedido"><p class="pedido"> MESA LIBRE</p></div>`;
            pedidosmesa13.innerHTML = pedido13;
        }else{
            comienzomesa13.innerHTML = horainicio_mesa13;
            horain_mesa13 = json.horainit;

            if(contador13 != json.orden.length){
                for(j in json.orden){
                    if(json.orden[j] != null){
                        for(i in arrayProductos){
                            if(json.orden[j].trim() == arrayProductos[i] || json.orden[j].trim() == arrayProductos[i]+" con té" || json.orden[j].trim() == arrayProductos[i]+" con café" || json.orden[j].trim() == arrayProductos[i]+" con leche descremada" || json.orden[j].trim() == arrayProductos[i]+" con mate cocido" || json.orden[j].trim() == arrayProductos[i]+" con leche" || json.orden[j].trim() == arrayProductos[i]+" con sprite" || json.orden[j].trim() == arrayProductos[i]+" con agua"){
                                total = json.unidades[j] * arrayPrecio[i];
                                totalCobrar +=total;
                                totaldefinitivo =`<p class="total"> $ ${totalCobrar}</p>`
                                pedido13 +=`<div class="contenpedido"><p class="pedido"> ${json.unidades[j]} ${json.orden[j]}</p><p class="totalp">$${total}</p></div>`;
                            }
                        }
                    //pedido +=`<p class="pedido"> ${json.orden[j]} </p>`;
                        alertmesa13.style.background = "blue";
                    }
                }
                totalContenidoMesa13.innerHTML = totaldefinitivo;
                pedidosmesa13.innerHTML = pedido13;
    //CARGANDO HORA FIN
                if(json.final[j] != ""){
                horaCierre_mesa13 = `<p class="horacierre">${json.final[j]}</p>`;
                cierremesa13.innerHTML = horaCierre_mesa13;
                }
                contador13++;
            }
        return
        }
    }//CIERRA FUNCTION MESA13

    //setInterval(mesa1,2000);
    //setInterval(mesa2,2000);
    //setInterval(mesa3,2000);
    //setInterval(mesa4,2000);
    //setInterval(mesa5,2000);
    //setInterval(mesa6,2000);
    //setInterval(mesa7,2000);
    //setInterval(mesa8,2000);
    //setInterval(mesa9,2000);
    //setInterval(mesa10,2000);
    //setInterval(mesa11,2000);
    //setInterval(mesa12,2000);
    //setInterval(mesa13,2000);

    //mesa1();
    //mesa2();
    //mesa3();
    mesa4();
    //mesa5();
    //mesa6();
    //mesa7();
    //mesa8();
    //mesa9();
    //mesa10();
    //mesa11();
    //mesa12();
    //mesa13();
}
//setInterval(realTime,2000);
realTime();

//ARRAY SUMA PARA ENVIAR AL PHP
let sumaArrMesa1=0;
let sumaArrMesa2=0;
let sumaArrMesa3=0;
let sumaArrMesa4=0;
let sumaArrMesa5=0;
let sumaArrMesa6=0;
let sumaArrMesa7=0;
let sumaArrMesa8=0;
let sumaArrMesa9=0;
let sumaArrMesa10=0;
let sumaArrMesa11=0;
let sumaArrMesa12=0;
let sumaArrMesa13=0;

//ELIMINAR TABLA
function finalmesa1(){
    $.post('deletedbmesa1.php',{//si no funciona pasar mesa a mayuscula deletdbMESA1
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa1.innerHTML = null;
    pedidosmesa1.innerHTML = null;
    cierremesa1.innerHTML = null;
    totalContenidoMesa1.innerHTML = null;

    //location.href="index.html";
}
function finalmesa2(){
    $.post('deletedbmesa2.php',{//si no funciona pasar mesa a mayuscula deletdbMESA1
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    let cierrePedido = cierreTexto2.toString();
    let cierre = cierreTotal2.toString();
    comienzomesa2.innerHTML = null;
    pedidosmesa2.innerHTML = null;
    cierremesa2.innerHTML = null;
    totalContenidoMesa2.innerHTML = null;

    $.post('../cierreCaja/cierre.php',{
        nombre: cierrePedido,
        total: cierre,
        mesa: "mesa2"
    },function(date){
        console.log(date);
    })
    //location.href="index.html";
}
function finalmesa3(){
    $.post('deletedbmesa3.php',{
        mesa: "mesa"
    })
    alert("mesa cerrada");
    let cierrePedido = cierreTexto3.toString();
    let cierre = cierreTotal3.toString();
    comienzomesa3.innerHTML = null;
    pedidosmesa3.innerHTML = null;
    cierremesa3.innerHTML = null;
    totalContenidoMesa3.innerHTML = null;
    $.post('../cierreCaja/cierre.php',{
        nombre: cierrePedido,
        total: cierre,
        mesa: "mesa3"
    },function(date){
        console.log(date);
    })
    //location.href="index.html";
}
function finalmesa4(){
    $.post('deletedbmesa4.php',{//si no funciona pasar mesa a mayuscula deletdbMESA1
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    let cierrePedido = cierreTexto4.toString();
    let cierre = cierreTotal4.toString();
    comienzomesa4.innerHTML = null;
    pedidosmesa4.innerHTML = null;
    cierremesa4.innerHTML = null;
    totalContenidoMesa4.innerHTML = null;
    $.post('../cierreCaja/cierre.php',{
        nombre: cierrePedido,
        total: cierre,
        mesa: "mesa4"
    },function(date){
        console.log(date);
    })
    //location.href="index.html";
}
function finalmesa5(){
    $.post('deletedbmesa5.php',{//si no funciona pasar mesa a mayuscula deletdbMESA1
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa5.innerHTML = null;
    pedidosmesa5.innerHTML = null;
    cierremesa5.innerHTML = null;
    totalContenidoMesa5.innerHTML = null;
    //location.href="index.html";
}
function finalmesa6(){
    $.post('deletedbmesa6.php',{//si no funciona pasar mesa a mayuscula deletdbMESA6
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa6.innerHTML = null;
    pedidosmesa6.innerHTML = null;
    cierremesa6.innerHTML = null;
    totalContenidoMesa6.innerHTML = null;
    //location.href="index.html";
}
function finalmesa7(){
    $.post('deletedbmesa7.php',{//si no funciona pasar mesa a mayuscula deletdbMESA7
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa7.innerHTML = null;
    pedidosmesa7.innerHTML = null;
    cierremesa7.innerHTML = null;
    totalContenidoMesa7.innerHTML = null;
    //location.href="index.html";
}
function finalmesa8(){
    $.post('deletedbmesa8.php',{//si no funciona pasar mesa a mayuscula deletdbMESA8
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa8.innerHTML = null;
    pedidosmesa8.innerHTML = null;
    cierremesa8.innerHTML = null;
    totalContenidoMesa8.innerHTML = null;
    //location.href="index.html";
}
function finalmesa9(){
    $.post('deletedbmesa9.php',{//si no funciona pasar mesa a mayuscula deletdbMESA9
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa9.innerHTML = null;
    pedidosmesa9.innerHTML = null;
    cierremesa9.innerHTML = null;
    totalContenidoMesa9.innerHTML = null;
    //location.href="index.html";
}
function finalmesa10(){
    $.post('deletedbmesa10.php',{//si no funciona pasar mesa a mayuscula deletdbMESA10
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa10.innerHTML = null;
    pedidosmesa10.innerHTML = null;
    cierremesa10.innerHTML = null;
    totalContenidoMesa10.innerHTML = null;
    //location.href="index.html";
}
function finalmesa11(){
    $.post('deletedbmesa11.php',{//si no funciona pasar mesa a mayuscula deletdbMESA11
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa11.innerHTML = null;
    pedidosmesa11.innerHTML = null;
    cierremesa11.innerHTML = null;
    totalContenidoMesa11.innerHTML = null;
    //location.href="index.html";
}
function finalmesa12(){
    $.post('deletedbmesa12.php',{//si no funciona pasar mesa a mayuscula deletdbMESA12
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa12.innerHTML = null;
    pedidosmesa12.innerHTML = null;
    cierremesa12.innerHTML = null;
    totalContenidoMesa12.innerHTML = null;
    //location.href="index.html";
}
function finalmesa13(){
    $.post('deletedbmesa13.php',{//si no funciona pasar mesa a mayuscula deletdbMESA13
        mesa: "mesa"
    })
    alert("mesa cerrada.");
    comienzomesa13.innerHTML = null;
    pedidosmesa13.innerHTML = null;
    cierremesa13.innerHTML = null;
    totalContenidoMesa13.innerHTML = null;
    //location.href="index.html";
}

mesa1.appendChild(comienzomesa1),//hora inicio
mesa1.appendChild(pedidosmesa1), //pedidos
mesa1.appendChild(cierremesa1);//hora cierre de mesa

mesa2.appendChild(comienzomesa2),//hora inicio
mesa2.appendChild(pedidosmesa2), //pedidos
mesa2.appendChild(cierremesa2);//hora cierre de mesa

mesa3.appendChild(comienzomesa3),//hora inicio
mesa3.appendChild(pedidosmesa3), //pedidos
mesa3.appendChild(cierremesa3);//hora cierre de mesa

mesa4.appendChild(comienzomesa4),//hora inicio
mesa4.appendChild(pedidosmesa4), //pedidos
mesa4.appendChild(cierremesa4);//hora cierre de mesa

mesa5.appendChild(comienzomesa5),//hora inicio
mesa5.appendChild(pedidosmesa5), //pedidos
mesa5.appendChild(cierremesa5);//hora cierre de mesa

mesa6.appendChild(comienzomesa6),//hora inicio
mesa6.appendChild(pedidosmesa6), //pedidos
mesa6.appendChild(cierremesa6);//hora cierre de mesa

mesa7.appendChild(comienzomesa7),//hora inicio
mesa7.appendChild(pedidosmesa7), //pedidos
mesa7.appendChild(cierremesa7);//hora cierre de mesa

mesa8.appendChild(comienzomesa8),//hora inicio
mesa8.appendChild(pedidosmesa8), //pedidos
mesa8.appendChild(cierremesa8);//hora cierre de mesa

mesa9.appendChild(comienzomesa9),//hora inicio
mesa9.appendChild(pedidosmesa9), //pedidos
mesa9.appendChild(cierremesa9);//hora cierre de mesa

mesa10.appendChild(comienzomesa10),//hora inicio
mesa10.appendChild(pedidosmesa10), //pedidos
mesa10.appendChild(cierremesa10);//hora cierre de mesa

mesa11.appendChild(comienzomesa11),//hora inicio
mesa11.appendChild(pedidosmesa11), //pedidos
mesa11.appendChild(cierremesa11);//hora cierre de mesa

mesa12.appendChild(comienzomesa12),//hora inicio
mesa12.appendChild(pedidosmesa12), //pedidos
mesa12.appendChild(cierremesa12);//hora cierre de mesa

mesa13.appendChild(comienzomesa13),//hora inicio
mesa13.appendChild(pedidosmesa13), //pedidos
mesa13.appendChild(cierremesa13);//hora cierre de mesa


//setInterval(location.href="index.html",1000);//un 






