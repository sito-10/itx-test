# Node.js

Es necesario tener instalado node

Para verificarlo:

```
npm -v
node -v
```

obtendremos algo como:

```
v22.15.0
10.9.2

```

Tras ello, cremos el proyecto con Vite (React + JS)

```
npm create vite@latest itx-test -- --template react
cd itx-test
npm install
```

Instalamos las dependencias necesarias

```
npm install react-router-dom axios
```

# ESTRUCTURA DEL PROYECTO


```css

itx-test/
└── src/
    ├── components/
    │   ├── Header.jsx
    │   ├── SearchBar.jsx
    │   └── ProductCard.jsx
    ├── context/
    │   └── CartContext.jsx
    ├── pages/
    │   ├── ProductList.jsx
    │   └── ProductDetails.jsx
    ├── services/
    │   ├── api.js
    │   └── cache.js
    ├── App.jsx
    └── main.jsx
    
```

## 🔧 Scripts

```bash
npm run dev     # Inicia en modo desarrollo
npm run build   # Compila para producción
npm run test    # Lanza los tests
npm run lint    # Verifica el código con ESLint
```