import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CoinDetail.css';

export const CoinDetail = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoinData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // El operador de encadenamiento opcional ?. permite leer el valor de una propiedad de un objetos sin tener que validar expresamente que sea válida
  const htmlDescription = coinData?.description?.en;

  return (
    <div className="coin-detail-container">
      <h2 className="coin-detail-name">{coinData.name}</h2>
      <div className="coin-img-and-table">
        <div className="coin-detail-image-container">
          <img
            className="coin-detail-image"
            src={coinData?.image?.large}
            alt="Asset image"
          />
        </div>

        <table className="coin-table">
          <thead>
            <th>Market Cap Rank</th>
            <th>USD</th>
            <th>EUR</th>
          </thead>
          <tbody>
            <tr>
              <td>{coinData?.market_data?.market_cap_rank}</td>
              <td>{coinData?.market_data?.current_price?.usd} $</td>
              <td>{coinData?.market_data?.current_price?.eur} €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="coin-detail-description"
        dangerouslySetInnerHTML={{ __html: htmlDescription }}
      />
    </div>
  );
};
