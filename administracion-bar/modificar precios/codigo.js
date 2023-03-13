
let orden = document.getElementById("orden");
let producto = document.getElementById("producto");
const enviar = document.getElementById("enviar");

var salida = $.ajax({
    url:'salida.php',
    dataType:'text',
    async:false
}).responseText;
json = JSON.parse(salida);

for(i in json){
    if(producto == json[i].nombre){
        console.log(json[i].nombre+" "+i+1);
    }
}
enviar.addEventListener("click",()=>{
    let cont = 1;
alert("conec")
for(i in json){
    if(producto.value == json[i].nombre){
        alert(json[i].nombre+" "+cont);
        orden.innerHTML = cont;
    }
    cont++;
}
});
