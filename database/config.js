const mongoose = require('mongoose');


const dbConnection = async() => {

  try {
    await mongoose.connect(process.env.DB_CNN);
    // mongoose.set('strictQuery', true) Esta linea se recomienda en un comentario del video
    console.log('DB Online')



  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora d einicializar BD')
  }


}

module.exports = {
  dbConnection
}