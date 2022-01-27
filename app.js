const express = require('express');
const db = require('./src/config/database');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(cors());

require('./src/routes')(app);

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}...`);
});

module.exports = app;
