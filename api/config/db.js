const { Sequelize } = require('sequelize');

const db = new Sequelize('student', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const connectDB = async () => {
  try {
    await db.authenticate();
    console.log('Database Connected');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;

