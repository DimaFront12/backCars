const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://dd08022006:uyWIv8gnd4yxVP3x@playgroundcluster.i7lqi.mongodb.net/Cars-service';

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL);
    console.log('Успешно подключились к MongoDB')
  }
  catch (err) {
    console.log('При подключении MongoDB возникла ошибка')
    console.error(err);
  }
}

module.exports = connectToDatabase;
