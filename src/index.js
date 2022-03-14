import express from 'express';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Global variables


// Routes
app.use(require('./routes/index'));

// Static files




// Server is listenning
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})
