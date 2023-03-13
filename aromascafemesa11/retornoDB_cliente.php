<?php
include "../baseDatos/conexionDB.php";

if(isset($_POST['identificador_unico'])){
    $identificadorunico = $_POST['identificador_unico'];
    $dbIU = "INSERT INTO `aromasCafeMesa11`(identificadorunico) VALUES ('$identificadorunico')";
    
    $conect = mysqli_query($conex,$dbIU);
    if($conect){
        echo "conect correcto $identificadorunico";
    }else{
        echo "conect error $identificadorunico";
    }
}else{
    echo "vacio";
}

?>
<?php
$res = $conect->query("SELECT identificadorunico FROM aromasCafeMesa11");
$ro = $res->fetch_assoc();
$salida = $ro['identificadorunico'];

if($salida == null){
    echo "vacio";
}

?>