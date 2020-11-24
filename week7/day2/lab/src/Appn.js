import { Button, Timeline, Breadcrumb, Row, Col } from 'antd'

export default function Appn() {
  return (
    <div>
      <h1>New app</h1>
      {/* <Button type="primary">Login</Button>
      <Timeline mode="alternate">
        <Timeline.Item>Crear proyecto de React 2020</Timeline.Item>
        <Timeline.Item>Programar nuestra app de React 2021</Timeline.Item>
        <Timeline.Item>Termina de instalar antd 2022</Timeline.Item>
      </Timeline> */}
      {/* <Calendar /> */}
      {/* <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Catalog</Breadcrumb.Item>
        <Breadcrumb.Item>Item</Breadcrumb.Item>
      </Breadcrumb> */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <Button block>Text</Button>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Button block>Text</Button>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Button block>Text</Button>
        </Col>

      </Row>
    </div>
  )
}
