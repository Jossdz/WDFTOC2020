import { useState, createContext, useContext } from 'react'

// Contexto
export const Context = createContext()

// Proveedor del Contexto

export const CtxProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = () => setUser({
    name: 'Joss',
    description: 'liywehrlqiwehrwq',
    email: 'carloscorrea.dev@gmail.com'
  })

  const logout = () => setUser(null)

  const addProfilePic = img => setUser({ ...user, img })

  const value = { user, login, logout, addProfilePic }


  return (
    <Context.Provider {...props} value={value} />
    // <Context.Provider value={value}>
    //  {children}
    // </Context.Provider/>
  )
}

export function useUserCtx() {
  return useContext(Context)
}