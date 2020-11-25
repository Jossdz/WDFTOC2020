import React, { useState } from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'
import FormikAdd from './FormikAdd'

export default function MovieList() {
  const [movies, setMovies] = useState([
    { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
    { id: "EXN9npPlo", title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
    { id: "lecqGHnAb", title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
  ])


  function addNewMovie(movie) {
    setMovies([...movies, movie])
  }

  return (
    <div>
      <h1>Movies</h1>
      {/* <AddMovie addNewMovie={addNewMovie} /> */}
      <FormikAdd addNewMovie={addNewMovie} />
      {movies.map(movie => <MovieCard {...movie} key={movie.id} />)}


    </div>
  )
}
