const { Schema, model } = require('mongoose')

const projectSchema = new Schema({
  title: String,
  description: String,
  deadline: String,
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, {
  timestamps: true
})

module.exports = model('Project', projectSchema)