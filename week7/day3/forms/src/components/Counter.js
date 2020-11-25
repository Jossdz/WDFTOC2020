import React, { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  let currentTime = 0

  useEffect(() => {

    const timer = setInterval(() => {
      console.log('e');
      setCount(currentTime)
      currentTime++
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h1>Counter: {count}s</h1>
    </div>
  )
}

export default Counter
