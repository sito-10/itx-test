# ITX Frontend Test

Mini aplicación para la compra de móviles con backend en PHP y caché en Python.


## Tecnologías
- Frontend: HTML, CSS, JavaScript
- Backend: PHP + Python (cache)
- API simulada
- Almacenamiento local con expiración

- Lo he planteado de la siguiente manera porque estoy más familiarizado con estas tecnologías actualmente, en el caso de usar React, sería adaptarlo a dicho lenguaje y familiarizarme con la estructura de trabajo de un nuevo equipo lo cual no es problema ya que en todo cambio se necesita esa adaptación.


- Se ha creado un archivo .env donde se almacenarán las variables de entorno necesarias para los accesos, configuraciones de URLs y todo aquello que se clasifique como "privado".

## Ejecutar en local
1. Copia la estructura de carpetas.
2. Levanta un servidor PHP (XAMPP o similar).
3. Abre `/index.php` en tu navegador.

## 🗂️ESTRUCTURA DEL PROYECTO

```css

itx-test/
│── index.php
│── css/
│   └── styles.css
│── js/
│   └── main.js
│   └── utils.js
│── api/
│   ├── get_products.php
│   ├── get_product_details.php
│   └── add_to_cart.php
│── utils/
│   └── cache.py
├── README.md
└── .gitignore
```


## POSIBLES MEJORAS

Otra opción es la creación de clases estáticas para pintar el HTML y clases objeto para el procesamiento de los datos, y mediante AJAX usar el recargo de zonas parciales.

La estructura sería algo similar a esto:

```css

itx-test/
│── index.php
│── classes/
|   └── products/
|       └── products_obj.php
|       └── products_viewer.php
│── css/
│   └── styles.css
│── js/
│   └── main.js
│   └── utils.js
│── api/
│   ├── get_products.php
│   ├── get_product_details.php
│   └── add_to_cart.php
│── utils/
│   └── cache.py
├── README.md
└── .gitignore
```

## USO
Se han generado dos ramas:

main: para el uso en producción
dev: para realizar cambios y posibles mejoras con el paso del tiempo.
Lo ideal podría ser trabajar siempre en "dev" y realizar "pull-requests" con la rama main siempre y cuando se hayan realizado los tests y se hayan verificado correctamente.