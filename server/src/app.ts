import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
    res.send('api test is successful');
});

export default app;
