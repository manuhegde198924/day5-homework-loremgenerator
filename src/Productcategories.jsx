import React from "react";

const ProductCategories = () => {
  // Sample JSON data for product categories and featured products
  const productData = {
    categories: [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Clothing" },
      // Add more categories as needed
    ],
    featuredProducts: [
      { id: 101, name: "Smartphone", category: "Electronics" },
      { id: 102, name: "Laptop", category: "Electronics" },
      { id: 201, name: "T-Shirt", category: "Clothing" },
      // Add more featured products as needed
    ],
  };

  return (
    <div className="product-categories">
      <h2>Product Categories</h2>
      <ul>
        {productData.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h2>Featured Products</h2>
      <ul>
        {productData.featuredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
