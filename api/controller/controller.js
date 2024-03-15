const Student = require('../model/student');


const StudentController = {
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.sequelize.query(
                'SELECT numEt, nom, moyenne, CASE WHEN moyenne >= 10 THEN "admis(e)" WHEN moyenne >= 5 THEN "redoublant(e)" ELSE "exclu(e)" END AS observation FROM students',
                {
                    type: Student.sequelize.QueryTypes.SELECT
                }
            );

            return students;
        } catch (error) {
            console.error(error);
            throw error; 
        }
    },
    getStats: async (req, res) => {
        try {
            // Minimum
            const minResult = await Student.sequelize.query(
                'SELECT MIN(moyenne) AS minMoyenne FROM students',
                { type: Student.sequelize.QueryTypes.SELECT }
            );

            // Maximum
            const maxResult = await Student.sequelize.query(
                'SELECT MAX(moyenne) AS maxMoyenne FROM students',
                { type: Student.sequelize.QueryTypes.SELECT }
            );

            // Moyenne
            const avgResult = await Student.sequelize.query(
                'SELECT AVG(moyenne) AS avgMoyenne FROM students',
                { type: Student.sequelize.QueryTypes.SELECT }
            );
            const stats = {
                minMoyenne: minResult[0].minMoyenne,
                maxMoyenne: maxResult[0].maxMoyenne,
                avgMoyenne: avgResult[0].avgMoyenne
            }
            return stats;
        } catch (error) {
            console.error(error);
            throw error; // Ajouter cette ligne pour propager l'erreur
        }
    },
  
    addStudent: async (req, res) => {
        try {
            const { nom, moyenne } = req.body;
            const newStudent = await Student.create({ nom, moyenne });
            return res.status(200).send(newStudent);
        } catch (error) {
            console.error(error);
            throw error; 
        }
    },

    deleteStudent: async (req, res) => {
        try {
            const { numEt } = req.params;
            const deletedRows = await Student.destroy({
                where: {
                    numEt,
                },
            });

            if (deletedRows === 0) {
                return res.status(404).send({
                    message: "Étudiant introuvable.",
                });
            }

            return res.status(200).send({
                message: "Étudiant supprimé avec succès.",
            });

        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    updateStudent: async (req, res) => {
        try {
            const { numEt } = req.params;
            const { nom, moyenne } = req.body;

            const updatedStudent = await Student.update(
                {
                    nom,
                    moyenne,
                },
                {
                    where: {
                        numEt,
                    },
                }
            );

            if (updatedStudent[0] === 0) {
                return res.status(404).send({
                    message: "Étudiant introuvable.",
                });
            }

            return res.status(200).send({
                message: "Étudiant mis à jour avec succès.",
            });

        } catch (error) {
            console.error(error);
            throw error;
        }
    },

  };

module.exports = StudentController;
