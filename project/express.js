const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Sample news data
const news = [
  { id: 1, title: 'Breaking News: React is awesome!', content: 'React has become a popular library for building user interfaces.' },
  { id: 2, title: 'Express.js simplifies backend development', content: 'Learn how to use Express.js for creating APIs efficiently.' },
  { id: 3, title: 'Frontend vs Backend', content: 'Understanding the difference between frontend and backend development.' },
];

// News API route
app.get('/api/news', (req, res) => {
  res.json(news);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
