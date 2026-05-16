import './App.css';

import React, { useState } from 'react';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';

const App = () => {
  const [value, setValue] = useState('New value');
  return (
    <div>
      <h1>App component</h1>
      <ChildA value={value} setValue={setValue} />
      <ChildB value={value} />
    </div>
  );
};

export default App;
