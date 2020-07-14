import React, { useState } from 'react'

import { Input, SendButton, WrapperInput } from '../css/styles'

export default function Login({ onClose }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  function hanldeCahngeValue(event) {
    const { name, value } = event.currentTarget
    setValues({ [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setTimeout(() => {
      console.log('>>>>>>>>>>>', values)
      onClose()
    }, 1000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <WrapperInput>
          <Input
            onChange={hanldeCahngeValue}
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={values.name}
          />
        </WrapperInput>
        <WrapperInput>
          <Input
            onChange={hanldeCahngeValue}
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            value={values.email}
          />
        </WrapperInput>
        <WrapperInput>
          <Input
            onChange={hanldeCahngeValue}
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={values.password}
          />
        </WrapperInput>
        <SendButton type='submit'>Send</SendButton>
      </form>
    </div>
  )
}
