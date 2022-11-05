import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import '../styles/register.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [modulo, setModulo] = useState('');
  const [status, setStatus] = useState('');
  const [button, setButton] = useState(true);
  const history = useNavigate();

  async function handleRegisterButton(e) {
    e.preventDefault();
    // try {
    //   // const req = await requestInfo({ email, password });
    //   localStorage.setItem('user', JSON.stringify(req));
    //   setIsloginSuced(true);
    // } catch (error) {
    //   return setIsLoginValid(false);
    // }
  }

  useEffect(() => {
    function validateInputs() {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const MIN_PASSWORD = 8;
      const MIN_TEXT_LENGTH = 5;
      if (
        email.match(regexEmail)
        && parseFloat(password.length) >= MIN_PASSWORD
        && parseFloat(name.length) >= MIN_TEXT_LENGTH
        && parseFloat(username.length) >= MIN_TEXT_LENGTH
        && parseFloat(modulo.length) > 0
        && parseFloat(status.length) > 0
      ) {
        return setButton(false);
      }
      return setButton(true);
    }

    validateInputs();
  }, [password, email, name, username, modulo, status, history]);

  return (
    <>
    <div className='register-page'>
      <div className='box'>
        <div>Register</div>
        <p>logo</p>
        <form>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
            />
          </label>
          <label htmlFor="name">
            <p>Name</p>
            <input
              type="text"
              value={ name }
              onChange={ ({ target: { value } }) => setName(value) }
            />
          </label>
          <label htmlFor="username">
            <p>Username</p>
            <input
              type="text"
              value={ username }
              onChange={ ({ target: { value } }) => setUsername(value) }
            />
          </label>
          <label htmlFor="modulo">Módulo:
            <select
              name="modulo"
              value={ modulo }
              onChange={ ({ target: { value } }) => setModulo(value) }
            >
              <option value="">Escolha seu Módulo</option>
              <option value="Fundamentos">Fundamentos</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Ciência da Computação">Ciência da Computação</option>
              {/* <option value="Concluído">Concluído</option> */}
            </select> 
          </label>

          <label htmlFor="status">
            <p>Status</p>
            <input
              type="text"
              value={ status }
              onChange={ ({ target: { value } }) => setStatus(value) }
            />
          </label>
          <label htmlFor="Password">
            <p>Password</p>
            <input
              type="password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
            />
          </label>
          <div>
            <button
              type="submit"
              disabled={ button }
              onClick={ handleRegisterButton }
            >
              Registrar
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={ () => history('/login') }
            >
              Voltar ao Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

