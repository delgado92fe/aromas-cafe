
<?php
include "../../baseDatos/conexionDB.php";
$i=0;
$sql = "SELECT * FROM `cierrecajaaromas` WHERE 1";
$result = $conex->query($sql);

$totalFinal=0;
$totalmesa1=[];
$totalmesa2=[];
$totalmesa3=[];
$totalmesa4=[];
$totalmesa5=[];
$totalmesa6=[];
$totalmesa7=[];
$totalmesa8=[];
$totalmesa9=[];
$totalmesa10=[];
$totalmesa11=[];
$totalmesa12=[];
$totalmesa13=[];

$pedidomesa1=[];
$pedidomesa2=[];
$pedidomesa3=[];
$pedidomesa4=[];
$pedidomesa5=[];
$pedidomesa6=[];
$pedidomesa7=[];
$pedidomesa8=[];
$pedidomesa9=[];
$pedidomesa10=[];
$pedidomesa11=[];
$pedidomesa12=[];
$pedidomesa13=[];
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

<button class="botonRegresar"><a class="claseA" href="../../">Regresar</a></button>

<?php
$cont1=0;
$cont2=0;
$cont3=0;
$cont4=0;
$cont5=0;
$cont6=0;
$cont7=0;
$cont8=0;
$cont9=0;
$cont10=0;
$cont11=0;
$cont12=0;
$cont13=0;
while($row = $result->fetch_assoc()) {
    
    $nombre[$i] = $row["nombre"];
    $total[$i] = $row["total"];
    $mesa[$i] = $row["mesa"];
    
    switch($mesa[$i]){
        case "mesa1": $totalmesa1[$cont1] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa1[$cont1] = $nombre[$i];
        $cont1++;
        break;
        case "mesa2": $totalmesa2[$cont2] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa2[$cont2] = $nombre[$i];
        $cont2++;
        break;
        case "mesa3": $totalmesa3[$cont3] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa3[$cont3] = $nombre[$i];
        $cont3++;
        break;
        case "mesa4": $totalmesa4[$cont4] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa4[$cont4] = $nombre[$i];
        $cont4++;
        break;
        case "mesa5": $totalmesa5[$cont5] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa5[$cont5] = $nombre[$i];
        $cont5++;
        break;
        case "mesa6": $totalmesa6[$cont6] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa6[$cont6] = $nombre[$i];
        $cont6++;
        break;
        case "mesa7": $totalmesa7[$cont7] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa7[$cont7] = $nombre[$i];
        $cont7++;
        break;
        case "mesa8": $totalmesa8[$cont8] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa8[$cont8] = $nombre[$i];
        $cont8++;
        break;
        case "mesa9": $totalmesa9[$cont9] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa9[$cont9] = $nombre[$i];
        $cont++;
        break;
        case "mesa10": $totalmesa10[$cont10] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa10[$cont10] = $nombre[$i];
        $cont10++;
        break;
        case "mesa11": $totalmesa11[$cont11] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa11[$cont11] = $nombre[$i];
        $cont11++;
        break;
        case "mesa12": $totalmesa12[$cont12] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa12[$cont12] = $nombre[$i];
        $cont12++;
        break;
        case "mesa13": $totalmesa13[$cont13] = $total[$i];
        $totalFinal += $total[$i];
        $pedidomesa13[$cont13] = $nombre[$i];
        $cont13++;
        break;
    }
    $i++;
}
?>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 1";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa1 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa1[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 2";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa2 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa2[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 3";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa3 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa3[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 4";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa4 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa4[$j];?></p>
            </div>
    <?php   $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 5";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa5 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa5[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 6";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa6 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa6[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 7";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa7 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa7[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 8";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa8 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa8[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 9";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa9 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa9[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 10";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa10 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa10[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 11";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa11 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa11[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 12";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa12 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "nombre: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa12[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<div class="contenedor">
    <h3 class="mesa"> <?php echo "mesa 13";?></h3>
    <?php
    $j=0;
    foreach($pedidomesa13 as $value){
        ?><div class="content">
                <p class="nombre"> <?php echo "pedido: ".$value;?></p>
                <p class="totalmesas"> <?php echo "total: ".$totalmesa13[$j];?></p>
            </div>
    <?php
    $j++;
    }
?></div>
<?php
//$salida = (int)$totalFinal;
?><div class="contFinal">
    <p id="total" class="totalTexto">TOTAL:</p>
    <p class="totalNum"><?php echo "$totalFinal"; ?></p>
</div>
<button id="botonEliminar">Eliminar Total</button>

<script>
    let total=document.querySelector(".totalNum");
    let botonEliminar=document.getElementById("botonEliminar");
    botonEliminar.addEventListener("click",()=>{
        $.post('cierre.php',{
            reset: "borrar",
        })
        location.assign("cierredecaja.php");
    })
</script>
</body>
</html>