<?php
include "../../baseDatos/conexionDB.php";

$DBPrecios = "SELECT * FROM precios_aromas";

$resultado = $conex->query($DBPrecios);

class precios {
    public $nombre;
    public $precio;
    function __construct($nombre, $precio){
        $this->nombre = $nombre;
        $this->precio = $precio;
    }
    function get_nombre(){
        return $this->nombre;
    }
    function get_precio(){
        return $this->precio;
    }
}
$i=0;
while($row = $resultado->fetch_assoc()){
    $producto[$i] = $row["nombre"];
    $precios[$i] = $row["precio"];
    //echo $producto[$i]." ".$precios[$i];
    //echo "<br>";
    $i++;
}
$a = new precios($producto, $precios);
$myJSON = json_encode($a);
echo $myJSON;
?>