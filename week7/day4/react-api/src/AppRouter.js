import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'

// const Home = () => <h1>Home</h1>
// const PokemonDetail = () => <h1>PokemonDetail</h1>


function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/pokemon/:id' component={PokemonDetail} exact />
      </Switch>
    </Router>
  )
}

export default AppRouter
