import React from 'react';

const NewsItem = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NewsItem;
