import express from 'express';
import technologiesRouter from './routes/technologies';

const app = express();
const port = 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.get('/', (_, res) => {
    res.send('Hello World!');
});
app.get('/ping', (_, res) => {
    console.log("ping")
    res.send('pong');
});

app.use('/technologies', technologiesRouter)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});