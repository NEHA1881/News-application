import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      {news.length > 0 ? (
        news.map((item) => <NewsItem key={item.id} title={item.title} content={item.content} />)
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default NewsList;
