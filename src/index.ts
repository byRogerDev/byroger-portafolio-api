import express from 'express';
import technologiesRouter from './v1/routes/technologies';
import profesionalsRouter from './v1/routes/profesionals';
import personalsRouter from './v1/routes/personals';
import hobbiesRouter from './v1/routes/hobbies';
import bodyParser from "body-parser";
import axios from 'axios';
import helmet from 'helmet';

import { swaggerDocument } from './swagger';
const app = express();
const port = 3001;
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  }));
app.use(cors());
app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.get('/', (_, res) => {
    res.send('Hello World!');
});
app.get('/ping', (_, res) => {
    console.log("ping")
    res.send('pong');
});

app.get('/obs/:from/:to/:id', (req: any, res: any) => {

  var text = req.query.text;
  var id = req.params.id;
  var to = req.params.to;
  var from = req.params.from;

  var config = {
    'method': 'get',
    'url': `https://script.google.com/macros/s/${id}/exec?text=${text}&source=${from}&target=${to}`,
    'maxRedirects': 20
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

});

app.use('/technologies', technologiesRouter)
app.use('/profesionals', profesionalsRouter)
app.use('/personals', personalsRouter)
app.use('/hobbies', hobbiesRouter)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});