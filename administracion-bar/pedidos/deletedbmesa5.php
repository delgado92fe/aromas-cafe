<?php

include "../../baseDatos/conexionDB.php";

if(isset($_POST['mesa'])){
    $dsql = "DELETE FROM `aromasCafeMesa5`";

    if($conex->query($dsql)){
        echo "Eliminado";
    }else{
        echo "falla";
    }
    $conex->close();
}
?>