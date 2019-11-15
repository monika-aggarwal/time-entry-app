import React, { useState } from 'react'
import { login, register } from 'shared/actions/auth'
import connect from 'shared/connect'

// const login = data => console.log(data)

const SCREEN = {
  REGISTER: 'register',
  LOGIN: 'login'
}

const AuthComponent = ({ login, register, errorMessage }) => {
  const [{ email = '', password = '' }, setState] = useState({})
  const [screen, setScreen] = useState(SCREEN.REGISTER)

  function onChange(field, value) {
    setState(prev => ({
      ...prev,
      [field]: value
    }));
  }

  function onSubmit() {
    if (screen === SCREEN.LOGIN) {
      login(email, password)
    } else {
      register(email, password).then(status => {
        if (status === 'success') {
          changeScreen()
        }
      })
    }
  }

  function changeScreen() {
    let newScreen
    newScreen = screen === SCREEN.REGISTER ? SCREEN.LOGIN : SCREEN.REGISTER
    setScreen(newScreen)
  }

  return (
    <div>
      <div>
        {
          screen === SCREEN.LOGIN &&
          <div onClick={() => changeScreen()}>go To register</div>
        }
      </div>
      <input type='email' onChange={({ target: { value } }) => onChange('email', value)} placeholder='email' value={email} />
      <input type='password' onChange={({ target: { value } }) => onChange('password', value)} placeholder='password' value={password} />
      <button onClick={() => onSubmit()}>{screen}</button>
      {
        screen === SCREEN.REGISTER &&
        <button onClick={() => changeScreen()}>go to Login</button>
      }
      {
        errorMessage && <span>{errorMessage}</span>
      }
    </div>
  )
}

const props = ({ auth: { errorMessage } }) => ({ errorMessage })

export default connect({ props, actions: { login, register } })(AuthComponent)