import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    async function getProjects() {
      const { data: allProjects } = await axios
        .get('http://localhost:3000/api/projects')

      console.log(allProjects);
    }

    getProjects()
  }, [])
  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}

export default Home
