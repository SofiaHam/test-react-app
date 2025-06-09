// src/components/UserCard.js
import React from 'react';
import './UserCard.css'; // Імпорт CSS-файлу

function UserCard(props) {
  const { userName, email, avatarUrl } = props;

  return (
    <div className="user-card">
      {avatarUrl && (
        <img src={avatarUrl} alt={`${userName}'s avatar`} className="user-avatar" />
      )}
      <h3 className="user-name">{userName}</h3>
      <p className="user-email">{email}</p>
      <button className="view-profile-btn">Переглянути профіль</button>
    </div>
  );
}

export default UserCard;