<?php

include("connection.php");

$response = [];

$sql = "SELECT * FROM news";
$selec = mysqli_query($mydb, $sql);


while ($a = $selec->fetch_assoc()){
    $response[] = $a;
}

echo json_encode($response, JSON_UNESCAPED_SLASHES);


?>