import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsFeed.css';

export const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': 'e4165c19e6msha253d08a59e6bb3p10f7aejsn111737bd5aa0',
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const first10Articles = articles?.slice(0, 10);

  return (
    <div className="news-feed">
      <h2 className="news-feed-title">News</h2>
      {first10Articles?.map((article, _index) => (
        <div key={_index} className="news-feed-item">
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
