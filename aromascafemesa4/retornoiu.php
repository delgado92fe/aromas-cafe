<?php
include "../baseDatos/conexionDB.php";

$sql = "SELECT * FROM `aromascafemesa4` WHERE 1";

$cantidad=0;
$i=0;

$result = $conex->query($sql);
while($row = $result->fetch_assoc()){
    $con[$i] = $row['identificadorunico'];
$i++;
}
//FOREACH RECORE EL CON, SI HAY ALGUN DATO NUEVO LO GUARDA EL NUEVO SOBRE EL ENTERIOR
foreach($con as $salida){
    if($salida != null){
        $conValor = $salida;
    }
}
//IF CONTROLA EL MENSAJE DE SALIDA SEGUN SU VALOR
if($conValor != null){
    $salidaiu = $conValor;
}else{
    $salidaiu = "vacio";
}
echo json_encode($salidaiu);//salida a cuentaJS
?>