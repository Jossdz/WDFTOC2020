import React from 'react'

function MovieCard({
  id,
  title,
  director,
  hasOscars,
  IMDbRating
}) {
  return (
    <div>
      <h2>{title} - {hasOscars && <img src='https://i.dailymail.co.uk/1s/2020/02/10/06/24535778-7985929-image-a-1_1581315933170.jpg' width='20px' />}</h2>
      <p><b>{director}</b></p>
      <i>{IMDbRating}</i>
    </div>
  )
}

export default MovieCard
