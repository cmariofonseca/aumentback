import app from './config/index.config'
import './database/index.database'

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares


// Global variables

// Llamado a base de datos



// Static files




// Server is listenning
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})
