import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props =>
    props.type === 'primary' ? 'blue' :
      props.type === 'secondary' ? 'gray' :
        'crimson'};
  color: white;
  padding: 10px 25px;
  font-size: 1.2rem;
  border-radius: 15px;
  border: none;
  border-bottom: 2px solid black;
  &:hover{
  border: none;
  }
`
export default Button