import React from 'react';
import { Link } from 'react-router-dom';
import './Trend.css';

export const Trend = ({ trend }) => {
  return (
    <Link to={`/coins/${trend.id}`}>
      <div className="trend-card">
        <div className="trend-card-header">
          <img src={trend.thumb} alt="Image of asset" />
          <div className="trend-card-header-title">{trend.name}</div>
        </div>
        <div className="trend-card-body">
          <div>Symbol: {trend.symbol}</div>
          <div>Market Cap Rank: {trend.market_cap_rank}</div>
        </div>
      </div>
    </Link>
  );
};
