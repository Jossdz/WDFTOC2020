import React from 'react'
import formik, { Formik, Field, Form } from 'formik'

function FormikAdd({ addNewMovie }) {

  return (
    <Formik initialValues={{
      title: '',
      director: '',
      IMDbRating: '',
      hasOscars: false
    }}
      onSubmit={(values, { resetForm }) => {
        const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
        addNewMovie({ ...values, id })
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="title">Title</label>
        <Field id="title" name="title" placeholder="La vida de [name]" />
        <label htmlFor="director">Director</label>
        <Field id="director" name="director" placeholder="Hackerman" />
        <label htmlFor="hasOscars">Has Oscars</label>
        <Field type='checkbox' id="hasOscars" name="hasOscars" placeholder="9.2" />
        <label htmlFor="IMDbRating">IMDbRating</label>
        <Field id="IMDbRating" name="IMDbRating" placeholder="9.2" />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

export default FormikAdd
