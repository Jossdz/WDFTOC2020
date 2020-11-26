import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

function Home() {
  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    async function getPokemons() {
      const { data: { results } } = await axios.get(baseURL)
      setPokemons(results)
    }

    getPokemons()
  }, [])

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemons ? <ul>
        {pokemons.map((pokemon, i) => <li>
          <Link to={`/pokemon/${i + 1}`}>
            {pokemon.name}
          </Link>
        </li>)}
      </ul> : <p>Loading...</p>}
    </div>
  )
}

export default Home
