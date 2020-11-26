const Project = require('../models/Project')
const Task = require('../models/Task')

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate('project')

  res.status(200).json(tasks)
}

exports.createTask = async (req, res) => {
  const { title, description, projectId } = req.body

  const newTask = await Task.create({
    title,
    description,
    project: projectId
  })

  res.status(201).json(newTask)
}

exports.updateTask = async (req, res) => {
  const { id } = req.params
  const { title, description } = req.body

  await Task.findByIdAndUpdate(id, { title, description })

  res.status(202).json({ message: 'Task updated' })
}

exports.deleteTask = async (req, res) => {
  const { id } = req.params

  await Task.findByIdAndDelete(id)

  res.status(200).json({ message: 'Task deleted' })
}
