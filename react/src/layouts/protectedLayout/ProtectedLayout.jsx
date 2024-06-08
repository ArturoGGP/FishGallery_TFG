import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import './protectedlayout.css'
import axiosClient from "../../axios-client";

function ProtectedLayout() {
    const { usuario, token, setUsuario, manejarToken } = useStateContext();
    const emailsString = import.meta.env.VITE_EMAILS;
    let emails = [];
    
    try {
      emails = JSON.parse(emailsString);
    } catch (e) {
      console.error("Error parsing VITE_EMAILS:", e);
    }

    if (!token) {
        return <Navigate to="/login" />;
    }

    function Logout(e){
        e.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUsuario({})
                manejarToken(null)
            })
    }

    useEffect(() =>{
        axiosClient.get('/user')
            .then(({data}) =>{
                setUsuario(data);
            })
    }, [])

    // Verifica si el usuario tiene acceso a la ruta de administración
    const hasAccessToAdmin = usuario && usuario.email && emails.includes(usuario.email);

    if (!hasAccessToAdmin && ((window.location.pathname.startsWith('/administarProductos')) || (window.location.pathname.startsWith('/administarUsuarios')) || (window.location.pathname.startsWith('//contenedor-de-imagenes')))) {
        return <Navigate to="/mientorno" />;
    }


    return (
        <div id="layout">
            
            <div className="sidebar">
                <Link to="/mientorno">Email</Link>
                {hasAccessToAdmin && (
                    <div>
                        <Link to="/administarProductos">Productos</Link>
                        <Link to="/administarUsuarios">Usuarios</Link>
                        <Link to="/contenedor-de-imagenes">Imágenes</Link>
                    </div>
                    )}

                <Link to="/">Inicio</Link>
                <div></div>
            </div>
            <header id="cabeceraPanel">
                <div className="desloguear">
                    <span id="nombreUsuarioPanel">{usuario.name}</span>
                    <button type="button" className="btn btn-light" onClick={Logout}>Cerrar sesión</button>
                </div>
            </header>
            <div className="content">
                <Outlet />     
            </div>
        </div>
    );
}

export default ProtectedLayout;
