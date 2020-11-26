import React, { useState, useEffect } from 'react'
import { Typography, Skeleton, Divider, Card, Button } from 'antd'
import { getSingleProject, deleteProject } from '../services/projects'
import UpdateProjectForm from '../components/UpdateProjectForm'

const { Title } = Typography

function ProjectDetail({ match: { params: { projectId } }, history }) {
  const [project, setProject] = useState(null)
  const [showEditForm, setShowEditForm] = useState(false)

  useEffect(() => {
    async function getProjectDetail() {
      const { data } = await getSingleProject(projectId)

      setProject(data)
    }

    getProjectDetail()
  }, [])

  async function handleDelete() {
    await deleteProject(projectId)
    history.push('/')
  }

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Title level={1}>Project: </Title>
      {project ? (<div>
        <Title level={2}>{project.title}</Title>
        <p>{project.description}</p>
        {showEditForm && <UpdateProjectForm {...project} />}
        <br />
        <Button
          type="primary"
          onClick={() => setShowEditForm(!showEditForm)}
          block>Edit Project</Button>
        <br />
        <Button
          type="ghost"
          onClick={handleDelete}
          danger
          block
        >Delete Project</Button>
        <Divider>Tasks</Divider>
        {project.tasks.map(task => <Card hoverable title={task.title}>
          {task.description}
        </Card>)}
      </div>) : (
          <Skeleton active />
        )}
    </div>
  )
}

export default ProjectDetail
