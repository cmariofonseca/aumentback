import { connect } from 'mongoose';

// Conexión con base de datos MongoDB Atlas
(async () => {
  try {
    const db = await connect('mongodb+srv://usuario:usuario@aumentest.hbat1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    console.log('DB connected to', db.connection.name);
  } catch (error) {
    console.log(error);
  }
})()
