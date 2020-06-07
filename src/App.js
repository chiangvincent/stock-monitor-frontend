import React, { useState, useEffect } from 'react';
import './App.css'
import StockHeader from './Header.js';
import StockTable from './StockTable.js';
import AddStockForm from './AddStockForm';

function App() {
  const [update, setUpdate] = useState(false);
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);


  return (
    <div className="ui container center aligned">
      <StockHeader />
      <AddStockForm update={update} setUpdate={setUpdate} loading={loading} setLoading={setLoading} />
      <StockTable update={update} setUpdate={setUpdate} stockData={stockData} setStockData={setStockData} loading={loading} setLoading={setLoading} />
    </div >
  );
}

export default App;
