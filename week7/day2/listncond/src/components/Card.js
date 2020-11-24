import React from 'react'

export default function Card({
  title,
  director,
  handleDelete,
  hasOscars,
  IMDbRating,
  showOscar
}) {
  // function renderOscar() {
  //   if (hasOscars) {
  //     return <p>Got the Oscar Award!  </p>
  //   } else {
  //     return <p>Great movie but no Oscars!  </p>
  //   }
  // }

  return <div>
    <h2>{title} {IMDbRating >= 9 ? '💚' : '💩'}</h2>
    <p>Director: {director}</p>
    {/* {hasOscars ?
      <p>Got the Oscar Award!  </p> :
      <p>Great movie but no Oscars!  </p>} */}
    {hasOscars && showOscar && '🏆'}
    <br />
    <button onClick={handleDelete}>❌</button>
  </div>
}