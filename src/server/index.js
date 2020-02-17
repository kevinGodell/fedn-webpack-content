const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static('dist'));
}

app.get('/test', (req, res) => {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(3000, () => {
  console.log('Example app listening on port http://localhost:3000!');
});
