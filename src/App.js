import React, { useState, useEffect } from 'react';
import './App.css'
import StockHeader from './Header.js';
import StockTable from './StockTable.js';
import AddStockForm from './AddStockForm';

function App() {
  const [update, setUpdate] = useState(false);

  return (
    <div className="ui container center aligned">
      <StockHeader />
      <AddStockForm update={update} setUpdate={setUpdate} />
      <StockTable update={update} setUpdate={setUpdate} />
    </div >
  );
}

export default App;
