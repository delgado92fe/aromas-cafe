<?php
include "../baseDatos/conexionDB.php";
//date_default_timezone_set("America/Argentina/Buenos_Aires"); ZONA HORARIA
date_default_timezone_set("America/Argentina/Buenos_Aires");
$timestamp = date("Y-m-d H:i:s");
$hora = date("H:i");

if(isset($_POST['nombre'])){
    $nombre = $_POST['nombre'];
    $cantidad = $_POST['numero'];
    $horaComienzo = $hora;
    $dbini = "INSERT INTO aromasCafeMesa9(pedido, horainicio, timestamp, cantidad) VALUES ('$nombre','$horaComienzo','$timestamp','$cantidad')";
    $result = mysqli_query($conex,$dbini);
    if($result){
        echo "cantidad $cantidad";
    }else{
        echo "error";
    }
}else{
    echo "ERRORASO";
};

//ESTE IF ES PARA CARGAR HORA FINAL
if(isset($_POST['horafinal'])){
    $horafinal = $hora;
    $dbfin = "INSERT INTO aromasCafeMesa9(horafin, timestamp) VALUES ('$horafinal','$timestamp')";
    $result = mysqli_query($conex,$dbfin);
    if($result){
        echo "pedido mesa 1 hora $horafinal";
    }else{
        echo "error";
    }
}


?>