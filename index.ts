import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Define a simple route
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
