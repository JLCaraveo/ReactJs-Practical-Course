import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'

import Header from '../components/Header'


import '../assets/styles/components/Register.scss'

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: [event.target.value]
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.registerRequest(form)
    props.history.push('/')
  }

  return (
    <React.Fragment>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form
            onSubmit={handleSubmit}
            className="register__container--form">
            <input 
            name="name" 
            onChange={handleInput} 
            className="input" 
            type="text" 
            placeholder="Nombre" 
            />
            <input 
            name="email" 
            onChange={handleInput}  className="input" 
            type="text" 
            placeholder="Correo" 
            />
            <input 
            name="password" 
            onChange={handleInput}  className="input" 
            type="password" 
            placeholder="Contraseña" 
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/">Iniciar sesión</Link>
        </section>
      </section>
    </React.Fragment>
  )
}

const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps)(Register)