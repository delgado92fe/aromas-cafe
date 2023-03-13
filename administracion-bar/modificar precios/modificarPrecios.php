<?php
//include ("datosprecios.php");
include "../../baseDatos/conexionDB.php";

    if(isset($_POST['producto'])){
    $producto = $_POST['producto'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];

    $query = "INSERT INTO precios_aromas(nombre, precio, descripcion) VALUES ('$producto','$precio','$descripcion')";
    $result = $conex->query($query);
    if($result){
        echo "<script>alert('correcto'); location='index.php';</script>";
    }else{
        echo "<script>alert('ERROR');</script>";
    }
};

?>