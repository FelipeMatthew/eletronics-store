import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`CTRL + Click on - http://localhost:${port}/`);
});
