import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Login({ login }) {
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = () => {
    // add axios api call...
    console.log('submitted...')
  }

  return (
    <section className="pageContainer">
      <h1>Login</h1>
      <Link to="/signup">Not a member? Sign up.</Link>
    </section>
  )
}

export default Login