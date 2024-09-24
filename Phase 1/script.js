// script.js

// Array of products
const products = [
  { name: "Smartphone", price: 99.99, category: "electronics" },
  { name: "Jacket", price: 59.99, category: "clothing" },
  { name: "Smart Watch", price: 19.99, category: "accessories" },
  { name: "Iphone", price: 29.99, category: "electronics" },
  { name: "Jeans", price: 89.99, category: "clothing" },
  { name: "Tablet", price: 299.99, category: "electronics" },
  { name: "T-shirt", price: 39.99, category: "clothing" },
];

// Function to display products
function displayProducts(productsToDisplay) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the current products

  // Loop through the array and create product elements
  productsToDisplay.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
        `;
    productList.appendChild(productDiv);
  });
}

// Function to filter products based on category
function filterProducts() {
  const filter = document.getElementById("filter").value;

  // Filter the product array based on the selected category
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  // Display the filtered products
  displayProducts(filteredProducts);
}

// Initial load: display all products
window.onload = function () {
  displayProducts(products);
};
