const express = require('express');
const { allStudents, newStudent, findStudent, deleteStudent, putStudent, patchStudent } = require('./controllers/register');
const { addCourse, allCourses, patchCourse } = require('./controllers/registerCourses');
const routes = express();

routes.get('/students', allStudents);
routes.get('/students/:id', findStudent);
routes.post('/students', newStudent);
routes.delete('/students/:id', deleteStudent);
routes.get('/courses', allCourses);
routes.post('/courses', addCourse);
routes.put('/students/:id', putStudent)
routes.patch('/courses/:id', patchCourse);

module.exports = {routes};