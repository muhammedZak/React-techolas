import React from 'react';

const Message = ({ userName }) => {
  return (
    <div id='profile-card' style={{ marginTop: '10px' }}>
      <h1>Welcome, {userName}</h1>
    </div>
  );
};

export default Message;
