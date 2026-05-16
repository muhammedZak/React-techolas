import React from 'react';
import '../styles/ProfileCard.css';

const Product = ({ productName, price, inStock }) => {
  return (
    <div id='profile-card' style={{ marginTop: '10px' }}>
      <p>
        {productName} - ${price} - {inStock ? 'Availabe' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default Product;
