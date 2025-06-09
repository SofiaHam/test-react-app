// src/pages/ProductListPage.js
import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import products from '../data/products';
import { useCart } from '../context/CartContext'; // <--- Важливо: імпорт useCart
import './ProductListPage.css';

function ProductListPage() {
  const { addToCart } = useCart(); // <--- Важливо: деструктуризація addToCart з useCart()

  return (
    <div className="product-list-page">
      <h2>Наші Квіти</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart} // <--- Важливо: передача addToCart до ProductCard
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;