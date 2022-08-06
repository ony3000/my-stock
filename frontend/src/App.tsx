import { useState, useEffect } from 'react';
import { ListApiResponse } from './types/apis';
import { Stock } from './types/models';
import axios from './plugins/axios';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<ListApiResponse<Stock>>('stocks/');

      setStocks(data.results);
    })();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ul>
          {stocks.map((stock) => (
            <li key={stock.code}>
              {stock.krName}
              {' '}
              (
              {stock.code}
              )
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
