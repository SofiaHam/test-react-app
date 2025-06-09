// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // <--- Важливо, що CartProvider імпортується

// Імпорти компонентів
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';

// Імпорти сторінок
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';

// Головний CSS для App
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider> {/* <--- Весь ваш контент (маршрути) має бути всередині CartProvider */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Ласкаво просимо до Квіткового Світу!</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
                  <UserCard userName="Флорист Магазину" email="info@flowers.com" avatarUrl="https://via.placeholder.com/80/4CAF50/FFFFFF?text=FM" />
                  <UserCard userName="Менеджер Замовлень" email="orders@flowers.com" />
                </div>
              </div>
            } />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Інші заглушки маршрутів */}
            <Route path="/about" element={<h2 style={{ textAlign: 'center', padding: '50px' }}>Про нас (сторінка в розробці)</h2>} />
            <Route path="/contact" element={<h2 style={{ textAlign: 'center', padding: '50px' }}>Контакти (сторінка в розробці)</h2>} />
            <Route path="/login" element={<h2 style={{ textAlign: 'center', padding: '50px' }}>Вхід (сторінка в розробці)</h2>} />
            <Route path="/register" element={<h2 style={{ textAlign: 'center', padding: '50px' }}>Реєстрація (сторінка в розробці)</h2>} />

            <Route path="*" element={<h2 style={{ textAlign: 'center', padding: '50px', color: 'red' }}>404 - Сторінка не знайдена</h2>} />
          </Routes>
        </main>
      </CartProvider> {/* <--- Закриття CartProvider */}
    </Router>
  );
}

export default App;