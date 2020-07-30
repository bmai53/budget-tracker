import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  const handleLogin = (event) => {
    event.preventDefault()

    axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/login', {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <div>
      <form>
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default App;
