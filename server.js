import _ from './config.js';
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './routes.js'
import Cors from 'cors'

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(Cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => console.log(`Listening on localhost:${port}`));