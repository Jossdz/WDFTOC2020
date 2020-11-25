import React, { useState } from 'react'
import useInput from '../hooks/useInput'


function AddMovie({
  addNewMovie
}) {

  // const [title, setTitle] = useState('')
  // Cambiamos la propiedad del estado del componente pore el uso de nuestro custom hook que registra su estado internamente y nos devuelve las propiedades necesarias para controlar el input, solo hace falta agregar este objeto destructuraddo al input por controlar {...titleInput}
  const titleInput = useInput('')
  const directorInput = useInput('')
  const IMDbRatingInput = useInput('')
  const [hasOscars, setHasOscars] = useState(false)


  function handleFormSubmit(event) {
    event.preventDefault()
    const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
    addNewMovie({
      title: titleInput.value,
      director: directorInput.value,
      IMDbRating: IMDbRatingInput.value,
      hasOscars,
      id
    })
    // setTitle('')
    // setDirector('')
    // setIMDbRating('')
    // setHasOscars(false)
  }

  function handleInputChange({ target: { name, value } }) {
    switch (name) {
      // case 'title':
      //   setTitle(value)
      //   break;
      // case 'director':
      //   setDirector(value)
      //   break;
      // case 'IMDbRating':
      //   setIMDbRating(value)
      //   break;
      case 'hasOscars':
        setHasOscars(!hasOscars)
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          {...titleInput}
        />
        <br />
        <label>Director:</label>
        <input
          type="text"
          name="director"
          {...directorInput}
        />
        <br />
        <label>Oscar Awarded:</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={handleInputChange} />
        <br />
        <label>IMDb Rating:</label>
        <input type="text" name="IMDbRating"  {...IMDbRatingInput} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddMovie
