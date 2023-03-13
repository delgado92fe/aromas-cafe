<?php
include "../../baseDatos/conexionDB.php";
if(isset($_POST['nombre'])){
    $nombre = $_POST['nombre'];
    $total = $_POST['total'];
    $mesa = $_POST['mesa'];
    $sql = "INSERT INTO cierrecajaaromas(nombre, total, mesa) VALUES ('$nombre','$total','$mesa')";
    $result = mysqli_query($conex,$sql);
    if($result){
        echo"correcto";
    }else{
        echo"ERROR";
    }
}
?>

<?php
if(isset($_POST['reset'])){
    $dsql = "DELETE FROM `cierrecajaaromas`";

    if($conex->query($dsql)){
        echo "Eliminado";
    }else{
        echo "falla";
    }
    $conex->close();
}
?>