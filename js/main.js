document.addEventListener("DOMContentLoaded", loadProducts);

async function loadProducts() {
    let products = getCache("products");
    if( !products) {
        const res = await fetch("http://localhost/api/get_products.php");
        products = await res.json();
        saveCache("products", products);
    }
    
    renderProducts(products);
}

function renderProducts(products) {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `<strong>${p.brand}</strong><br>${p.model}<br>${p.price}`;
        list.appendChild(card);
    });
}

function filterProducts() {
    const term = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? "" : "none";
    });
}
