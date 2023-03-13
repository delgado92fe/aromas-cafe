<?php
//include("datosprecios.php");
include "../../baseDatos/conexionDB.php";
$id = $_GET["id"];
$baseDatos = "SELECT * FROM precios_aromas WHERE id = '$id'";
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
<body class="bodyactualizar">
    <center><img src="../../imagenes/aromaslogo.png" alt="Imagen no disponible" class="logoenactualizar"></center>


    <form class="modificar" action="editar.php" method="post">
        <div class="conenedor-p">
            <div class="contenido-p">productos</div>
            <div class="contenido-p">descripcion</div>
            <div class="contenido-p">precios</div>
            <div class="contenido-p">Operacion</div>
        </div>
        <div class="conenedor-i">
<?php
// readonly=»readonly»
$result = mysqli_query($conex, $baseDatos);
while($row=mysqli_fetch_assoc($result)){?>
        <input type="hidden" class="contenido-i" value="<?php echo $row['id'];?>" name="id">
        <input type="text" class="contenido-i" value="<?php echo $row['nombre'];?>" name="producto">
        <input type="text" class="contenido-i" value="<?php echo $row['descripcion'];?>" name="descripcion">
        <input type="text" class="contenido-i" value="<?php echo $row['precio'];?>" name="precio">
<?php } mysqli_free_result($result);?>
        <input type="submit" value="Actualizar" id="enviar" class="submit">
        </div>
    </form>



    <script src="codigo.js"></script>
</body>
</html>