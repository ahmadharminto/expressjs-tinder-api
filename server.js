import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './routes.js'
import Cors from 'cors'

const env = dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://${env.parsed.DB_USER}:${env.parsed.DB_PASS}@${env.parsed.DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(Cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => console.log(`Listening on localhost:${port}`));