import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";

function App() {
  // Product data stored in state
  const [products] = useState([
    { name: "Smartphone", price: 99.99, category: "electronics" },
    { name: "Jacket", price: 59.99, category: "clothing" },
    { name: "Smart Watch", price: 19.99, category: "accessories" },
    { name: "Iphone", price: 29.99, category: "electronics" },
    { name: "Jeans", price: 89.99, category: "clothing" },
    { name: "Tablet", price: 299.99, category: "electronics" },
    { name: "T-shirt", price: 39.99, category: "clothing" },
  ]);
  // Active filter state
  const [filter, setFilter] = useState("all");

  // Event handler to change the filter state
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Function to get filtered products
  const getFilteredProducts = () => {
    return filter === "all"
      ? products
      : products.filter((product) => product.category === filter);
  };
  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="filter">
        <label htmlFor="filter">Filter by category:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      <ProductList products={getFilteredProducts()} />
    </div>
  );
}

export default App;
