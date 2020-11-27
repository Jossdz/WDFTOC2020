import { useUserCtx } from '../hooks/context'

function Navbar() {
  const { user, login, logout } = useUserCtx()

  return user ? (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
      <div>
        <button onClick={login}>Login</button>
      </div>
    )
}

export default Navbar
