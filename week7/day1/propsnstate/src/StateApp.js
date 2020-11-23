import {useState} from 'react'

const StateApp = () => {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count+1)
  }

  return (
    <div>
      <h1>Count State: {count}</h1>
      <button onClick={add}>+1</button>
    </div>
  )
}

export default StateApp
