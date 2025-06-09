// src/components/ProductCard/ProductCard.jsx (не змінюється)
import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const { name, price, description, imageUrl } = product; // imageUrl вже деструктуризується

  return (
    <div className="product-card">
      {imageUrl && ( // Перевіряємо, чи є URL
        <div className="product-image-container">
          <img src={imageUrl} alt={name} className="product-image" /> {/* Використовуємо imageUrl тут */}
        </div>
      )}
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price.toFixed(2)} грн</p>
      <p className="product-description">{description}</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-button">
        Додати до кошика
      </button>
    </div>
  );
}

export default ProductCard;