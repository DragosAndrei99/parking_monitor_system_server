const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  res.status(200).json({
    message: 'Data received successfully',
    data: receivedData
  });
});

app.get('/test', (req, res) => {
  console.log(req);
  
  res.status(200).json({
    message: 'Hello, this is a GET response!',
    timestamp: new Date()
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
