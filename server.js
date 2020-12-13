// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/api')
  .get(async (req, res) => {
    console.log('Get:', req.query);
    res.send('Got a GET request from /api');
  })
  .post(async (req, res) => {
    console.log('server req:', req.body.course);
    const toFetch = "https://api.planetterp.com/v1/grades?course=".concat(req.body.course);
    const data = await fetch(toFetch);
    const json = await data.json();
    res.json(json);
    console.log('POST request detected');
    console.log('fetch request data', data);
  })
  .put(async (req, res) => {
    res.send('Got a PUT request at /api');
  });



app.route('/profapi')
  .get(async (req, res) => {
    console.log('Query:', req.query);
    res.send('/profapi route');
  })
  .post(async (req, res) => {
    const fullName = req.body.profName;
    console.log(fullName);
    const nameArr = await fullName.split(' ');
    console.log(nameArr);
    const toFetch = "https://api.planetterp.com/v1/professor?name=".concat(nameArr[0], '%20', nameArr[1], '&reviews=true');
    const data = await fetch(toFetch);
    const json = await data.json();
    res.json(json);
    console.log('POST request detected');
    console.log('fetch request data', data);
  })
  .put(async (req, res) => {
    res.send('Got a PUT request at /profapi');
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

