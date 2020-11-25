import React from 'react'

function Student(props) {
  console.log(props);

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
      <h1 className="title">
        Student: {students[props.match.params.id - 1].name}
      </h1>
    </div>
  )
}

export default Student
