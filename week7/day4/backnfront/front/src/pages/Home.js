import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../services/projects'

const { Title, Text } = Typography

function Home() {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    async function getProjects() {
      const { data: allProjects } = await getAllProjects()

      setProjects(allProjects)
    }

    getProjects()
  }, [])
  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Title level={1}>Projects</Title >
      <Row gutter={[16, 16]}>
        {projects?.map(project => (
          <Col xs={24} sm={24} md={12} key={project._id}>
            <Card title={project.title} extra={<Link
              to={`/project/${project._id}`}>
              details
            </Link>}>
              <p>{project.description}</p>
              <Text type="secondary">Deadline: {project.deadline}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
