import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

function PokemonDetail({
  match: { params: { id } },
  history
}) {
  const [pokemon, setPokemon] = useState(null)

  console.log(history);

  useEffect(() => {
    async function getPokemonData() {
      const { data } = await axios.get(`${baseURL}${id}`)
      console.log(data);
      setPokemon(data)
    }

    getPokemonData()
  }, [])

  return pokemon ? (
    <div>
      {/* <h1>{pokemon ? pokemon.name : '' }</h1> */}
      {/* Optional chaining ?. */}
      <h1>{pokemon?.name}</h1>
      <p>Normal</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Shiny</p>
      <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  ) : (
      <h2>Loading...</h2>
    )
}

export default PokemonDetail
