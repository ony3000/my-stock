import { useState, useEffect } from 'react';
import { ListApiResponse } from './types/apis';
import { Stock } from './types/models';
import { typedGet, typedPost } from './plugins/axios';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    (async () => {
      const { data, message } = await typedGet<ListApiResponse<Stock>>('stocks/');

      if (message) {
        // error handling
      }

      if (data) {
        setStocks(data.results);
      }
    })();
  }, []);

  const getApi = async () => {
    const response = await typedGet('random-400/');

    console.log(response);
  };

  const postApi = async () => {
    const response = await typedPost('random-500/');

    console.log(response);
  };

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
        <button type="button" onClick={getApi}>Randomly returns 200 or 4xx</button>
        <button type="button" onClick={postApi}>Randomly returns 204 or 5xx</button>
        <ul className="stock-list">
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
