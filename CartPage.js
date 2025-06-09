// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext'; // Імпортуємо useCart
import './CartPage.css'; // Будемо використовувати цей CSS файл для стилів кошика

function CartPage() {
  // Деструктуризуємо необхідні функції та стан з useCart
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="cart-page">
      <h2>Ваш Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній.</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                  )}
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{item.price.toFixed(2)} грн x {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-from-cart-button"
                >
                  Видалити
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Загальна сума: {getTotalPrice().toFixed(2)} грн</h3> {/* <--- Використовуємо getTotalPrice */}
            <button className="checkout-button">Оформити замовлення</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;