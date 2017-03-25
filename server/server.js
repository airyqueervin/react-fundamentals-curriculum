const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})