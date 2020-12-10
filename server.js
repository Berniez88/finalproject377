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
  .get(async(req, res) => {
    console.log('GET request detected');
    // res.send(`Lab 5 for ${process.env.NAME}`);
  })
  .post(async(req, res) => {
    console.log('server req:', req.body.course);
    const toFetch = "https://api.planetterp.com/v1/grades?course=".concat(req.body.course);
    const data = await fetch(toFetch);
    const json = await data.json();
    res.json(json);
    console.log('POST request detected');
    console.log('fetch request data', data);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.route('/profapi')
  .get(async(req, res) => {
    console.log('GET request detected');
    // res.send(`Lab 5 for ${process.env.NAME}`);
  })
  .post(async(req, res) => {
    console.log('server req:', req.body.name);
    const name = req.body.name.split(' ')
    const toFetch = "https://api.planetterp.com/v1/professor?name=".concat(name[0],'%20',name[1]);
    const data = await fetch(toFetch);
    const json = await data.json();
    res.json(json);
    console.log('POST request detected');
    console.log('fetch request data', data);
  });