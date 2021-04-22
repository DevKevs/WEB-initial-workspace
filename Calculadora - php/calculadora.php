
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Calculadora</title>
</head>
<body>
    <form class="frm" action="calculadora.php" method="get">
        <h1>Calculadora en PHP</h1>
        <input type="text" name="numero1" placeholder="Primer numero">   
        <input type="text" name="numero2" placeholder="Segundo numero"> 
        <div class="row">
            <input type="submit" name="" value="Sumar"> 
        </div>
        <output type="number" name="">
    </form>
</body>
</html>

<?php
    if(isset($_GET['numero1']) && isset($_GET['numero2']) && is_numeric($_GET['numero1']) && is_numeric($_GET['numero2']));
    {
        $numero1 = $_GET['numero1'];
        $numero2 = $_GET['numero2'];
        echo $numero1 + $numero2;
    }

?>