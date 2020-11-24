import Button from './styles/Button'
import Card from './styles/Card'


export default function StyledApp() {
  return <div>
    <h1>Styled App</h1>
    <Button type="primary">Hola</Button>
    <Button type="secondary">Hola</Button>
    <Button type="danger">Hola</Button>
    <Card picture="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/166/landscape/EGH_ReactAdvPatterns2_Final.png"
      title="React"
      description="qiwerliuqwheriquwheriquwheriquwheiu"
    />
    <br />
    <Card picture="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/166/landscape/EGH_ReactAdvPatterns2_Final.png"
      title="React"
      description="qiwerliuqwheriquwheriquwheriquwheiu"
      theme='dark'
    />
    <br />
    <Card picture="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/166/landscape/EGH_ReactAdvPatterns2_Final.png"
      title="React"
      description="qiwerliuqwheriquwheriquwheriquwheiu"
      theme='blue'
    />
  </div>
}