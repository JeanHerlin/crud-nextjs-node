const { Sequelize, Model } = require('sequelize');
const sequelize = new Sequelize('student', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const validate = {
  isFloat: true,
  min: 0,
};

class Student extends Model {}

Student.init(
  {
    numEt: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    moyenne: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate,
    },
  },
  {
    sequelize,
    modelName: 'Student',
    tableName: 'Students',
    timestamps: false,
  }
);

module.exports = Student;