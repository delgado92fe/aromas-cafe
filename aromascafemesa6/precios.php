<?php
include "../baseDatos/conexionDB.php";

$consulta = "SELECT * FROM precios_aromas WHERE 1";

$result = $conex->query($consulta);
$i=0;
$producto=[];

class productos{
    public $nombre;
    public $descripcion;
    public $precio;

    function __construct($nombre, $descripcion, $precio){
        
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
    }
    function get_nombre(){
        return $this->nombre;
    }
    function get_descripcion(){
        return $this->descripcion;
    }
    function get_precio(){
        return $this->precio;
    }
}

while($row = $result->fetch_assoc()){
    $nombre = $row['nombre'];
    $descripcion = $row['descripcion'];
    $precio = $row['precio'];

    $producto[$i]= new productos($nombre, $descripcion, $precio);
    $i++;
};
echo json_encode($producto);



?>