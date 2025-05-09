<?php
header("Content-Type: application/json");

$id = $_GET['id'] ?? 1;
echo json_encode([
    "id"        => $id,
    "brand"     => "Apple",
    "model"     => "iPhone 14",
    "cpu"       => "A15",
    "ram"       => "6GB",
    "os"        => "iOS 16",
    "screen"    => "6.1'' OLED",
    "battery"   => "3240mAh",
    "camera"    => "12MP",
    "weight"    => "174g"
]);
?>
