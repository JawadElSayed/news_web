<?php

include("connection.php");

$search = "%" . $_GET["search"] . "%";
$response = [];

$sql = "SELECT * FROM news WHERE title LIKE ?";
$select = $mydb->prepare($sql);
$select->bind_param("s", $search);
$select->execute();
$array = $select->get_result();

while ($a = $array->fetch_assoc()){
    $response[] = $a;
}

echo json_encode($response, JSON_UNESCAPED_SLASHES);

?>