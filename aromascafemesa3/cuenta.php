<?php
include "../baseDatos/conexionDB.php";

$consulta = "SELECT * FROM aromasCafeMesa3 WHERE 1";

class pedido {
    public $nombrePedido;
    public $cantidad;
    
    function __construct($nombrePedido, $cantidad){
        $this->nombrePedido = $nombrePedido;
        $this->cantidad = $cantidad;
    }
    function get_nombrePedido(){
        return $this->nombrePedido;
    }
    function get_cantidad(){
        return $this->cantidad;
    }
}
$i=0;
$resultado = mysqli_query($conex, $consulta);
while($row = mysqli_fetch_assoc($resultado)){
    $textoPedido = $row["pedido"];
    $pedido = explode(',',$textoPedido);
    $aa = ($row["cantidad"]);
    $bb = explode( ',', $aa);
    for($a=0; $a<count($pedido); $a++){
        //echo $pedido[$a]." ".$bb[$a];
        $pedid[$i]=$pedido[$a];
        $unidades[$i]=$bb[$a];
        $i++;
        /*echo "<br>";
        echo $pedid[$a]." ".$unidades[$a];
        echo "<br>";*/
    }

    $nombre = new pedido($pedid, $unidades);
}
//echo $nombre;
$myJSON = json_encode($nombre);
echo $myJSON;
?>