import { useState } from 'react';
import '../styles/MultiColor.css';

export default function MultiColor() {
  const [color, setColor] = useState('?');

  const colorStyle = {
    background: color === '?' ? 'white' : color,
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'grid', flexDirection: 'column' }}>
        <button
          onClick={() => setColor('red')}
          style={{
            display: 'block',
            padding: '10px',
            width: '100px',
            background: 'red',
          }}>
          Red
        </button>
        <button
          onClick={() => setColor('green')}
          style={{
            display: 'block',
            padding: '10px',
            width: '100px',
            background: 'green',
          }}>
          Green
        </button>
        <button
          onClick={() => setColor('blue')}
          style={{
            display: 'block',
            padding: '10px',
            width: '100px',
            background: 'blue',
          }}>
          Blue
        </button>
      </div>
      <div style={colorStyle} className='container'>
        {color}
      </div>
    </div>
  );
}
