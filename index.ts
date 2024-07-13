import express from 'express';

const app = express();
const port = 3000;

// Define a simple route
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (_req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
