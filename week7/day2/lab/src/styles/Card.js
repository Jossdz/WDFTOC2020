import styled from 'styled-components'

const CardStyles = styled.article`
  width: 30vw;
  height: 400px;
  padding: 1em;
  box-sizing: border-box;
  background-color: ${props =>
    props.theme === 'dark' ? '#232323' :
      props.theme === 'blue' ? 'blue'
        : 'white'};
  color: ${props => props.theme !== 'dark' ? '#232323' : 'white'};
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  img{ 
    width: 100%;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 250px;
  }

  @media(max-width: 900px){
    width: 100%;
    height: auto;
  }
`

export default function Card({ picture, title, description, theme }) {
  return (
    <CardStyles theme={theme}>
      <img src={picture} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardStyles>
  )
}