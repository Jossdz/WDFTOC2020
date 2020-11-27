import { createContext, useState, useContext } from 'react'

const MyContext = createContext()

const MyCtxProvider = ({ children }) => {
  const [stateVal, setStateVal] = useState({
    name: 'Joss',
    age: 23,
    cool: true
  })

  return (
    <MyContext.Provider value={stateVal}>
      {children}
    </MyContext.Provider>
  )
}

// -------------------------------------

export default function App() {

  return (
    <MyCtxProvider>
      <Family />
    </MyCtxProvider>
  )
}

function Family() {
  return (
    <Person />
  )
}

function Person() {
  return (<Id />)
}

function Id() {
  const { name } = useContext(MyContext)
  return <p>Hey my name is: {name} </p>
}