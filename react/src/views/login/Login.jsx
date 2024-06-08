import React from "react";
import { useState } from "react";
import './login.css';
import iconoUsuario from '../../assets/usuario.png';
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axios-client';
import { useNavigate } from "react-router-dom";

function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const {setUsuario, manejarToken} = useStateContext();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null)

  function enviarForm(e){
    e.preventDefault();
    const carga ={
      email: emailRef.current.value, 
      password: passwordRef.current.value,
    }

    axiosClient.post("/login", carga)
      .then(({data})=>{
        setUsuario(data.usuario)
        manejarToken(data.token)
        navigate(data.redirect_url)
      })

      .catch(error =>{
        const response = error.response;
        if(response && response.status === 422){
          const errors = response.data.errors;
          const errorMessages = Object.values(errors).flat().join(' ');
          setMessage(errorMessages);
        }
      })
  }

  return (
        <div className="tarjeta tarjeta-container">
            <img id="iconoid" className="icono" src={iconoUsuario} />
            <p id="nombreusuarioid" className="nombreusuario"></p>
            <form className="form-signin" onSubmit={enviarForm}>
                {message &&
                  <div className="alert">
                    <p>{message}</p>
                  </div>
                }
                <span id="email" className="email"></span>
                <input
                    ref={emailRef}
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                />
                <input
                    ref={passwordRef}
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                />
                <button
                    className="btn btn-lg btn-primary btn-block btn-signin"
                    type="submit"
                >
                    Entrar
                </button>
            </form>
            <Link className="contraseñaolvidada" to="/signup">¿Olvidaste la contraseña?</Link>
        </div>
    );
}

export default Login;
