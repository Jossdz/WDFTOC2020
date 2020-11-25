import React, { useState } from 'react'
import Pepito from './components/Pepito'
import Counter from './components/Counter'

function LifeApp() {
  const [showPepito, setShowPepito] = useState(false)
  return (
    <div>
      <h1>Lifecycle app</h1>
      {/* <Pepito /> */}
      {/* {showPepito && <Pepito />} */}
      <button onClick={() => setShowPepito(!showPepito)}>
        toggle Pepito
      </button>
      {showPepito && <Counter />}
    </div>
  )
}

export default LifeApp
