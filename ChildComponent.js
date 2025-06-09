// src/components/ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  const { message, name } = props;

  return (
    <div style={{ padding: '10px', border: '1px solid lightblue', margin: '10px' }}>
      <h3>Child Component</h3>
      <p>{message}</p>
      {name && <p>Привіт, {name}!</p>}
    </div>
  );
}

export default ChildComponent;