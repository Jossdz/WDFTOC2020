import React, { useState, useEffect } from 'react'

function Pepito() {
  const [age, setAge] = useState(5)
  const [name, setName] = useState('Pepito')

  useEffect(() => {
    //MOUNT
    console.log('Este es el momento en que pepito llego a nuestra vida (a nuestra vista)');

    // cleanup || UNMOUNT function es lo que se ejecuta cuando el componente deja de pintarse en la vista
    return () => {
      console.log('Lamentablemente pepito dejo de pintarse en la vista');
    }
  }, [])

  useEffect(() => {
    //UPDATE
    if (age !== 5) {
      console.log('Feliz cumple pepito!');
    }
  }, [age])

  return (
    <div>
      <h2>Hola soy {name} y tengo {age} años</h2>
      <button onClick={() => setName('Jose Madero')}>Change name</button>
      <button onClick={() => setAge(age + 1)}>Cumpleaños de pepito</button>
    </div>
  )
}

export default Pepito
