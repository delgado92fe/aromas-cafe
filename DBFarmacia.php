<?php
$conex = mysqli_connect("localhost","u828958451_delgadofranco9","Libertadores7","u828958451_cronogramaAimo");

date_default_timezone_set("America/Argentina/Buenos_Aires");
$mee=date("m");//cambiar el 4 por m
switch($mee){
    case 1: $mes="enero";
    break;
    case 2: $mes="febrero";
    break;
    case 3: $mes="marzo";
    break;
    case 4: $mes="abril";
    break;
    case 5: $mes="mayo";
    break;
    case 6: $mes="junio";
    break;
    case 7: $mes="julio";
    break;
    case 8: $mes="agosto";
    break;
    case 9: $mes="septiembre";
    break;
    case 10: $mes="octubre";
    break;
    case 11: $mes="noviembre";
    break;
    case 12: $mes="diciembre";
    break;
}

$consulta = "SELECT * FROM $mes";
$resultado = $conex->query($consulta);
$i=0;
if($resultado){
    while($ro = $resultado->fetch_array()){
        $name[$i] = $ro['farmacias'];
        $i++;
    }
}

//pasando a JSON;
$entrega = json_encode($name);
echo $entrega;

?>