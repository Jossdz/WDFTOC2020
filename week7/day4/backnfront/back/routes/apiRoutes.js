const { Router } = require('express')
const {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
  updateProject
} = require('../controllers/projects')

const {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask
} = require('../controllers/tasks')

const { catchErr } = require('../middlewares')

const router = Router()

// ----------PROJECT----------
router.get('/projects', catchErr(getAllProjects))
router.post('/projects', catchErr(createProject))
router.get('/projects/:id', catchErr(getSingleProject))
router.put('/projects/:id', catchErr(updateProject))
router.delete('/projects/:id', catchErr(deleteProject))

// ----------TASK----------
router.get('/tasks', catchErr(getAllTasks))
router.post('/tasks', catchErr(createTask))
router.put('/tasks/:id', catchErr(updateTask))
router.delete('/tasks/:id', catchErr(deleteTask))

module.exports = router