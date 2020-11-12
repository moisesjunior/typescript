import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.use(express.json());
app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
});

app.get('/', helloWorld);