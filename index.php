<?php

// MAIN

?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>ITX Test</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <header>
            <h1 onclick="goHome()">📱 Tienda Móvil</h1>
            <div id="breadcrumb">Inicio</div>
            <div id="cart-count">🛒 0</div>
        </header>

        <input type="text" id="search" placeholder="Buscar por marca o modelo..." oninput="filterProducts()" />

        <main id="product-list"></main>

        <script src="js/utils.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
