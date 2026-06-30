const express = require('express');
require('dotenv').config();

const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

// JSON 요청 body 읽기
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API 라우트 연결
app.use('/api', routes);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
  console.log(`http://localhost:${port}`);
});