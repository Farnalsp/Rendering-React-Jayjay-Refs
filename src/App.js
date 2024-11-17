import React, { useState, useRef } from 'react';
import './App.css';

export default function App() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const handleClick = () => {
    const inputValue = inputRef.current.value;
    setValue(inputValue);
    alert('Makasih udah di klik: ' + inputValue);
  };
  return (
    <div className="App">
      <input placeholder='input' ref={inputRef} type='text' />
      <button onClick={handleClick}>Submit</button>
      <h1>{value}</h1>
    </div>
  );
}
