import React, { useState, useEffect } from 'react';
import './App.css'
import StockHeader from './Header.js';
import StockTable from './StockTable.js';
import AddStockForm from './AddStockForm';

function App() {
  const [stock, setStock] = useState('');

  return (
    <div className="ui container center aligned">
      <StockHeader />
      <AddStockForm stock={stock} setStock={setStock} />
      <StockTable stock={stock} setStock={setStock} />
    </div >
  );
}

export default App;
