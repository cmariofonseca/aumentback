import express from 'express';
import cors  from 'cors';
import morgan from 'morgan';
import router from '../routes/route';

// Se inicializa app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use(router);

export default app;
