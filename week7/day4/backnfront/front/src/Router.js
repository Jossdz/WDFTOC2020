import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import CreateProject from './pages/CreateProject'

// const Home = () => <h1>Home</h1>
// const ProjectDetail = () => <h1>Project</h1>
// const CreateProject = () => <h1>Create Project</h1>


function RouterApp() {
  return (
    <Router>
      <LayoutApp>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route
            path='/project/create'
            component={CreateProject}
            exact
          />
          <Route
            path='/project/:projectId'
            component={ProjectDetail}
            exact
          />
        </Switch>
      </LayoutApp>
    </Router>
  )
}

export default RouterApp
