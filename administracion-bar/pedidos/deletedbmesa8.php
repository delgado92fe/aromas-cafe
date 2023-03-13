<?php

include "../../baseDatos/conexionDB.php";

if(isset($_POST['mesa'])){
    $dsql = "DELETE FROM `aromasCafeMesa8`";

    if($conex->query($dsql)){
        echo "Eliminado";
    }else{
        echo "falla";
    }
    $conex->close();
}
?>