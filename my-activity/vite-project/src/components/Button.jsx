import React from 'react';

const Button = ({ buttonText, bgColor, textColor, onclick }) => {
  return (
    <button
      onClick={onclick}
      style={{ backgroundColor: bgColor, color: textColor }}>
      {buttonText}
    </button>
  );
};

export default Button;
