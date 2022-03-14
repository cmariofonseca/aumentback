import express from 'express';
import indexRouter from '../routes/index.route';

// Initializations
const app = express();

// Routes
app.use(indexRouter);

export default app;
