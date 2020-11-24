import { useState } from 'react'

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue)

  return <div>
    <h3>Count: {count}</h3>
    <button onClick={() => setCount(count - 1)}>-</button>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
}