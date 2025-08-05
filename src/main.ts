import { products } from "./products";

const container = document.getElementById("product-list");

if (container) {
  products.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <span class="price">$${product.price.toFixed(2)}</span>
    `;

    container.appendChild(card);
  });
}
