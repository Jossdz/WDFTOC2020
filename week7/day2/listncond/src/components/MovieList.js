import React, { useState } from 'react'
import Card from './Card'

function MovieList() {
  const [movies, setMovies] = useState([
    { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
    { id: "EXN9npPlo", title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
    { id: "lecqGHnAb", title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
  ])
  const [showOscar, setShowOscar] = useState(false)


  const ratingAvg = movies.reduce((acc, current) => acc + current.IMDbRating, 0) / movies.length

  // function deletemovie() {
  //   const moviesCopy = [...movies]
  //   moviesCopy.pop()
  //   console.log(moviesCopy);
  //   setMovies(moviesCopy)
  // }

  // const deletemovie = () => setMovies(movies.filter((el, i) => i < movies.length - 1))
  const deletemovie = id => setMovies(
    movies.filter(el => el.id !== id))


  return (
    <div>
      Avg = {ratingAvg}
      {movies.map(movie => <Card
        key={movie.id}
        {...movie}
        showOscar={showOscar}
        handleDelete={() => deletemovie(movie.id)}
      />)}
      {/* <button onClick={deletemovie}>Delete movie</button> */}
      <button onClick={() => setShowOscar(!showOscar)}>Toggle Oscars</button>
    </div>
  )
}

export default MovieList
