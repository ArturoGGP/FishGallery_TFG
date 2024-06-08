import React from 'react';
import './signup.css';
import iconoUsuario from '../../assets/usuario.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axios-client';
import { useState } from 'react';

function Signup() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmacionRef = useRef();

  const {setUsuario, manejarToken} = useStateContext();
  const [error, setError] = useState(null)

  
  function enviarForm(e){
    e.preventDefault();
    const carga ={
      name: nameRef.current.value,
      email: emailRef.current.value, 
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmacionRef.current.value
    }

    axiosClient.post("/signup", carga)
      .then(({data})=>{
        setUsuario(data.usuario)
        manejarToken(data.token)
      })

      .catch(error =>{
        const response = error.response;
        if(response && response.status === 422){
          const errors = response.data.errors;
          const errorMessages = Object.values(errors).flat().join(' ');
          setError(errorMessages);
        }
      })
  }

  return (
    <div className="tarjeta tarjeta-container">
            <img id="iconoid" className="icono" src={iconoUsuario} />
            <p id="nombreusuarioid" className="nombreusuario"></p>
            <form className="form-signin" onSubmit={enviarForm}>
              {error &&
                  <div className="alert">
                    <p>{error}</p>
                  </div>
                }
                <span id="email" className="email"></span>
                <input
                    ref={nameRef}
                    type="name"
                    id="inputName"
                    className="form-control"
                    placeholder="Nombre completo"
                    required
                    autoFocus
                />
                <input
                    ref={emailRef}
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email"
                    required
                    autoFocus
                />
                <input
                    ref={passwordRef}
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                />
                <input
                    ref={passwordConfirmacionRef}
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Repetir contraseña"
                    required
                />
                <button
                    className="btn btn-lg btn-primary btn-block btn-signin"
                    type="submit"
                >
                    Registrarse
                </button>
            </form>
            <Link className="contraseñaolvidada" to="/login">¿Ya tienes cuenta?</Link>
        </div>
  )
}

export default Signup
