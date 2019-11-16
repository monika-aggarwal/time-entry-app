// import path from 'path'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import render from './render'
import api from './api/firefbase'
import configureStore from 'shared/store'
require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
api(app)
app.use((req, res, next) => {
  res.locals.store = configureStore({})
  next()
})
app.use(render);

let port = process.env.PORT || 8500
app.listen(port, () => {
  console.log(`Server started on PORT ${port}`)
})

export default app
