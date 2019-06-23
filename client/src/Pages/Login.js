import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Page} from '../Components/Containers/LayoutsElements'

function Login({ login }) {
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = () => {
    // add axios api call...
    console.log('submitted...')
  }

  return (
    <Page>
      <h1>Login</h1>
      <Link to="/signup">Not a member? Sign up.</Link>
    </Page>
  )
}

export default Login