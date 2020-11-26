const Project = require('../models/Project')
const Task = require('../models/Task')

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find().populate('tasks')

  res.status(200).json(projects)
}
exports.getSingleProject = async (req, res) => {
  const { id } = req.params
  const project = await Project.findById(id).populate('tasks')

  res.status(200).json(project)
}
exports.createProject = async (req, res) => {
  const { title, description, deadline } = req.body
  const newProject = await Project.create({
    title,
    description,
    deadline
  })

  res.status(201).json(newProject)
}
exports.updateProject = async (req, res) => {
  const { id } = req.params
  const { title, description, deadline } = req.body

  await Project.findByIdAndUpdate(id, { title, description, deadline })

  res.status(202).json({ messaje: 'Project updated' })
}
exports.deleteProject = async (req, res) => {
  const { id } = req.params

  await Project.findByIdAndDelete(id)

  res.status(200).json({ messaje: 'Project deleted' })
}
