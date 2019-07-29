import React from 'react';
import Card from './Card'
import './App.css';

function App() {
  return (
    <div className="container">
      <Card status="paid"/>
      <Card status="submitted"/>
      <Card status="pending"/>
    </div>
  );
}

export default App;
