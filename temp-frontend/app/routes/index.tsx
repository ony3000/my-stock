import { useState, useEffect } from 'react';
import { ListApiResponse } from '~/types/apis';
import { Stock } from '~/types/models';
import { typedGet, typedPost } from '~/plugins/axios';

export default function Index() {
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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div>
        <button type="button" onClick={getApi}>Randomly returns 200 or 4xx</button>
        <button type="button" onClick={postApi}>Randomly returns 204 or 5xx</button>
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
