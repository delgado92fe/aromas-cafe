<?php
//include ("datosprecios.php");
include "../../baseDatos/conexionDB.php";

$id = $_POST['id'];
$producto = $_POST['producto'];
$precio = $_POST['precio'];
$descripcion = $_POST['descripcion'];


$actualizar = "UPDATE precios_aromas SET nombre='$producto',precio='$precio',descripcion='$descripcion' WHERE id='$id'";


$resultado = mysqli_query($conex, $actualizar);

if($resultado){
    echo "<script>alert('correcto'); location='index.php';</script>";
}else{
    echo "<script>alert('ERROR');</script>";
}


?>