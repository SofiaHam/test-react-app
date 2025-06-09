// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Імпорт Link для навігації
import { useCart } from '../../context/CartContext'; // Імпорт хука для доступу до кошика
import './Header.css'; // Імпорт стилів для шапки

function Header() {
  const { getTotalItems } = useCart(); // Отримуємо загальну кількість товарів у кошику

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Квітковий Світ</Link> {/* Посилання на головну сторінку */}
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/products">Каталог</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/contact">Контакти</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              Кошик ({getTotalItems()}) {/* Відображення кількості товарів */}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="auth-links">
        <Link to="/login">Вхід</Link>
        <Link to="/register">Реєстрація</Link>
      </div>
    </header>
  );
}

export default Header;