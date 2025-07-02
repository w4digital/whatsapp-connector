import cors from 'cors';
import express from 'express';

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));

app.route('/health').get((req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;