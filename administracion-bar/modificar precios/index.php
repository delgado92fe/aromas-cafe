<?php
//include ("datosprecios.php");
include "../../baseDatos/conexionDB.php";
$baseDatos = "SELECT * FROM precios_aromas";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="../../imagenes/aromaslogo.png">
    <title>Aromas Cafe Bar</title>
</head>
<body>
    <form class="form"> <!--action="modificarPrecios.php" method="post"-->
        <center><h2 for="caja_busqueda">AROMAS CAFE</h2></center>
        <div class="conten_input">
            <div class="orden">
                <p class="porden">N° de orden</p>
                <p class="pinput" type="text" id="orden"></p>
            </div>
            <input class="input" type="text" name="producto" id="producto" placeholder="producto">
        </div>
        <input type="button" class="input_enviar" id="enviar" value="BUSCAR">
    </form>
    <button class="botonRegresar"><a class="claseA" href="../../">Regresar</a></button>

    <div id="datos">
        <div class="table_item">orden</div>
        <div class="table_item">productos</div>
        <div class="table_item descripcion">descripcion</div>
        <div class="table_item">precios</div>
        <div class="table_item">Editar</div>
<?php
$i=1;
$result = mysqli_query($conex, $baseDatos);
while($row=mysqli_fetch_assoc($result)){?>
    
    <div class="table_item_modificar"><?php echo $i;?></div>
    <div class="table_item_modificar"><?php echo $row['nombre'];?></div>
    <div class="table_item_modificar"><?php echo $row['descripcion'];?></div>
    <div class="table_item_modificar"><?php echo $row['precio'];?></div>
    <a href="actualizar.php?id=<?php echo $row["id"];?>" class="table_item_modificar">Editar</a>
    
<?php 
$i++;
} mysqli_free_result($result);?>

    </div>



    <script src="codigo.js"></script>
</body>
</html>