<?php

include "../../baseDatos/conexionDB.php";

class pedido{
  public $horainit;
  public $orden;
  public $final;
  public $unidades;

  function __construct($horainit, $orden, $final, $unidades, $timestamp){
    $this->horainit = $horainit;
    $this->orden = $orden;
    $this->final = $final;
    $this->timestamp = $timestamp;
    $this->unidades = $unidades;
  }
  function get_horainit(){
    return $this->horainit;
  }
  function get_orden(){
    return $this->orden;
  }
  function get_final(){
    return $this->final;
  }
  function get_timestamp(){
    return $this->timestamp;
  }
  function get_unidades(){
    return $this->unidades;
  }
}
//fecha actual
date_default_timezone_set("America/Argentina/Buenos_Aires");
$fecha_ac = date("Y-m-d H:i:s");
//recuperacin solo de fecha del pedido
$res = $conex->query("SELECT timestamp FROM aromasCafeMesa13");
$ro = $res->fetch_assoc();
$fecha_bd = $ro["timestamp"];
//echo "fecha actual: $fecha_ac y fecha BD: $timestamp_bd";

//recuperacion de datos de toda la tabla
$sql = "SELECT * FROM `aromasCafeMesa13` WHERE 1";
$result = $conex->query($sql);
$i=0;
$j=0;

while($row = $result->fetch_assoc()) {
  $timestamp = $row["timestamp"];
  if($row["horainicio"] != null){
    $horainit = $row["horainicio"];
  }
  $salidaPedido = $row["pedido"];
  $salidaCantidades = $row["cantidad"];
  $cantidadesSeparadas = explode(',',$salidaCantidades);
  $pedidoSeparado = explode(',',$salidaPedido);
  for ($a=0; $a<count($pedidoSeparado); $a++){
    $pedido[$i] = $pedidoSeparado[$a];
    $unidades[$i] = $cantidadesSeparadas[$a];
    $i++;
  }
  //if($row["horafin"] != null){
    $horafin[$j] = $row["horafin"];
  //}
  //echo $row["horainicio"];
  $j++;
}
//echo $horainit;
$mesa = new pedido($horainit, $pedido, $horafin, $unidades, $timestamp);
$myJSON = json_encode($mesa);
echo $myJSON;


?>