import React from 'react'
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Divider,
  message,
  DatePicker
} from 'antd'

import { createProject } from '../services/projects'

const { Title } = Typography



function CreateProject({ history }) {
  const [form] = Form.useForm()

  async function submitForm(project) {
    // TODO: Enviar el proyecto al backend... mediante nuestro servicio y..... Redirigir al inicio.
    let send = true
    Object.entries(project).map(val => {
      if (val[1] === undefined) {
        message.error(`Campo ${val[0]} vacio`)
        send = false
      }
    })
    if (send) {
      await createProject(project)
      form.resetFields()
      // usamos history que es un prop que existe para los componentes del Router y su metodo push para redirigir que recibe una ruta.
      history.push('/')
    }
  }

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Row>
        <Col span={24}>
          <Title level={1}>Create a new project:</Title>
          <Divider />

          <Form form={form} layout="vertical" onFinish={submitForm}>
            <Form.Item name="title" label="Title:">
              <Input />
            </Form.Item>

            <Form.Item name="description" label="Description:">
              <Input />
            </Form.Item>

            <Form.Item name="deadline" label="Deadline:">
              <DatePicker />
            </Form.Item>

            <Button type="primary" block htmlType="submit">
              Create
            </Button>

          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default CreateProject
