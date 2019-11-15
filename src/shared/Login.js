import React, { useState } from 'react'

const login = data => console.log(data)
export default () => {
  const [{ email = '', password = '' }, set] = useState({})
  const setData = (data) => set(state => ({ ...state, ...data }))
  return (

    <div>
      <input type='text' onChange={(e) => setData({ email: e.target.value })} placeholder='email' value={email} />
      <input type='password' onChange={(e) => setData({ password: e.target.value })} placeholder='password' value={password} />
      <button onClick={() => login({ email, password })}>Login</button>
    </div>
  )
}
