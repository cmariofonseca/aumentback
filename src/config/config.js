import express from 'express';
import morgan from 'morgan';
import router from '../routes/route';

// Se inicializa app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use(router);

export default app;
