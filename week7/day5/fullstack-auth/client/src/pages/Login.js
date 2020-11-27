import React from 'react'
import { Row, Col, Form, Input, Button, Typography, Divider } from 'antd'
import { loginFn } from '../services/auth'
import { useContextInfo } from '../hooks/context'

const { Title } = Typography

const Login = ({ history }) => {
  const [form] = Form.useForm()
  const { login } = useContextInfo()

  async function handleSubmit(userInput) {
    const { data } = await loginFn(userInput)
    login(data);
    history.push('/profile')
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Login</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name='email' label="Email:">
            <Input />
          </Form.Item>
          <Form.Item name='password' label="Password:">
            <Input.Password />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
