import React from 'react'
import { Form, Input, Button } from 'antd'
import { updateProject } from '../services/projects'
import { useHistory } from 'react-router-dom'

function UpdateProjectForm({
  title,
  description,
  deadline,
  _id
}) {
  const [form] = Form.useForm()
  const history = useHistory()

  async function handleSubmit(values) {
    await updateProject(_id, values)
    history.push('/')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{
      title,
      description,
      deadline
    }}>
      <Form.Item name="title" label="Title:">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description:">
        <Input />
      </Form.Item>
      <Form.Item name="deadline" label="Deadline:">
        <Input />
      </Form.Item>
      <Button block type="primary" htmlType="submit">
        Update
      </Button>
    </Form >
  )
}

export default UpdateProjectForm
