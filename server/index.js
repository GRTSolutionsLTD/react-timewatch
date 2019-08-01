// import moment from 'moment';

const express = require('express');

const fs = require('fs');
const bodyParser = require('body-parser');
const ngrok1 = require('ngrok');
const { resolve } = require('path');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? ngrok1 : false;
const logger = require('./logger');
const app = express();

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
// rest contacts
const jsonPath = `${__dirname}\\data\\reports.json`;
app.get('/api/reports/list', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    res.end(data);
  });
});

app.get('/api/reports/add', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    data = JSON.parse(data);
    const record = {
      id: 4,
      enter: new Date(),
      leave: '',
      // date: moment().format('M/DD/YYYY'),
    };
    const newData = [...data, record];
    const jsonData = JSON.stringify(newData);

    fs.writeFile(jsonPath, jsonData, writeFileErr => {
      if (!writeFileErr) {
        res.end(jsonData);
      } else {
        res.end(JSON.stringify(data));
      }
    });
  });
});

app.get('/api/reports/update', (req, res) => {
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    data = JSON.parse(data);
    // const record = data.find(r => r.date === moment().format('M/DD/YYYY'));
    const record = data.find();
    // data = data.remove(r => r.date === moment().format('M/DD/YYYY'));
    record.leave = new Date();
    const newData = [...data, record];
    const jsonData = JSON.stringify(newData);
    fs.writeFile(
      jsonPath,
      jsonData,
      { encoding: 'utf8', flag: 'a' },
      writeFileErr => {
        if (!writeFileErr) {
          res.end(jsonData);
        } else {
          res.end(JSON.stringify(data));
        }
      },
    );
  });
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
  return null;
});
