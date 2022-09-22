import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CoinList } from './components/CoinList';
import { CoinDetail } from './components/CoinDetail';
import { TrendsList } from './components/TrendsList';
import { NewsFeed } from './components/NewsFeed';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CoinList />} />
        <Route path="trends" element={<TrendsList />} />
        <Route path="newsfeed" element={<NewsFeed />}/>
        <Route path="coins/:coinId" element={<CoinDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
