<?php

include "../../baseDatos/conexionDB.php";

if(isset($_POST['mesa'])){
    $dsql = "DELETE FROM `aromasCafeMesa11`";

    if($conex->query($dsql)){
        echo "Eliminado";
    }else{
        echo "falla";
    }
    $conex->close();
}
?>