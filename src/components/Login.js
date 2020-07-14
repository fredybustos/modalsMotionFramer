import React, { useState } from 'react'

export default function Login() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  function hanldeCahngeValue(event) {
    const { name, value } = event.currentTarget
    setValues({ [name]: value })
  }

  function handleSubmit() {
    setTimeout(() => {
      console.log('>>>>>>>>>>>', values)
    }, 5000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='wrapper-input'>
          <label htmlFor='name'>Nombre</label>
          <input
            onChange={hanldeCahngeValue}
            type='text'
            name='name'
            id='name'
          />
        </div>
        <div className='wrapper-input'>
          <label htmlFor='email'>Correo</label>
          <input
            onChange={hanldeCahngeValue}
            type='text'
            name='email'
            id='email'
            value={values.email}
          />
        </div>
        <div className='wrapper-input'>
          <label htmlFor='password'>Contraseña</label>
          <input
            onChange={hanldeCahngeValue}
            type='password'
            name='password'
            id='password'
            value={values.password}
          />
        </div>
        <button className='btn' type='submit'>
          Enviar
        </button>
      </form>
    </div>
  )
}
