<?php

include "../../baseDatos/conexionDB.php";

if(isset($_POST['mesa'])){
    $dsql = "DELETE FROM `aromasCafeMesa6`";

    if($conex->query($dsql)){
        echo "Eliminado";
    }else{
        echo "falla";
    }
    $conex->close();
}
?>