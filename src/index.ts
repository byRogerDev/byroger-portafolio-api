import express from 'express';
import technologiesRouter from './v1/routes/technologies';
import profesionalsRouter from './v1/routes/profesionals';
import personalsRouter from './v1/routes/personals';
import hobbiesRouter from './v1/routes/hobbies';
import bodyParser from "body-parser";

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.get('/', (_, res) => {
    res.send('Hello World!');
});
app.get('/ping', (_, res) => {
    console.log("ping")
    res.send('pong');
});

app.use('/technologies', technologiesRouter)
app.use('/profesionals', profesionalsRouter)
app.use('/personals', personalsRouter)
app.use('/hobbies', hobbiesRouter)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});