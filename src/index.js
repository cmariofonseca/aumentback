import app from './config/config'
import './database/database'

// Se establece puerto
app.set('port', process.env.PORT || 8000);

// Se levanta servidor
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})
