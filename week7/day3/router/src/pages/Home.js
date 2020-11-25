import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
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
  return (
    <div>
      <h1 className='title'>
        Students
    </h1>
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
  )
}

export default Home
