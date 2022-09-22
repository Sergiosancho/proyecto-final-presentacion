import React, { useEffect, useState } from 'react';
import { Trend } from './Trend';
import axios from 'axios';
import './TrendsList.css';

export const TrendsList = () => {
  const [trends, setTrends] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTrends(res.data.coins);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="news-feed-title">
        Top-7 trending coins on CoinGecko as searched by users in the last 24
        hours
      </h2>
      <div className="trends-list">
        {trends.map((trend) => {
          return <Trend key={trend.item.id} trend={trend.item} />;
        })}
      </div>
    </div>
  );
};
