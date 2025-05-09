<?php

header("Content-Type: application/json");

echo json_encode([
    ["id" => 1, "brand" => "Apple", "model" => "iPhone 14", "price" => "999€"],
    ["id" => 2, "brand" => "Samsung", "model" => "Galaxy S22", "price" => "899€"]
]);
?>
