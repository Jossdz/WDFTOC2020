import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/student/Student'

//Dummy components
// const Home = () => <h1 className="title">Home</h1>
const Profile = () => <h1 className="title">Profile</h1>
// const Student = () => <h1 className="title">Student</h1>


const students = [
  {
    name: 'Ayhan',
    description: 'qwliuehrlqiweurlqiwuhe',
    id: 1
  },
  {
    name: 'Fran',
    description: 'qwliuehrlqiweurlqiwuhe',
    id: 2
  },
  {
    name: 'Maria',
    description: 'qwliuehrlqiweurlqiwuhe',
    id: 3
  },
  {
    name: 'Isa',
    description: 'qwliuehrlqiweurlqiwuhe',
    id: 4
  },
]

function RouterApp() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <hr /> */}
      <div className="columns">
        <div className="column is-6 is-narrow">
          <ul>
            {students.map(student => (
              <li>
                <Link to={`/student/${student.id}`}>
                  {student.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="column is-6 is-narrow">
          <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Profile} path='/profile' />
            <Route component={Student} path='/student/:id' />
          </Switch>
        </div>
      </div>


    </Router>
  )
}

export default RouterApp
