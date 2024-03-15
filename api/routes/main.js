const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Show all the students and stats: GET
router.get('/', async (req, res) => {
    try {
        const students = await controller.getAllStudents();
        const stats = await controller.getStats();

        res.send({students,stats})
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la récupération des étudiants et des statistiques.');
    }
});

// Add new student: POST
router.post('/student', async (req, res) => {
    try {
      await controller.addStudent(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error adding student.');
    }
});

// Delete student: DELETE
router.delete('/student/:numEt', async (req, res) => {
    try {
      await controller.deleteStudent(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting student.');
    }
});

// Update student: PUT
router.put('/student/:numEt', async (req, res) => {
  try {
      await controller.updateStudent(req, res);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating student.' });
  }
});


module.exports = router;
