const express = require('express');
const app = express();
const os = require('os');
const sslRedirect = require('heroku-ssl-redirect');

require('dotenv').config();

if (process.env.NODE_ENV === "production") {
  app.use(cors({
    origin: '#',
    optionsSuccessStatus: 200
  }));
  app.use(history({
    verbose: true
  }));
}

app.use(sslRedirect());

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
