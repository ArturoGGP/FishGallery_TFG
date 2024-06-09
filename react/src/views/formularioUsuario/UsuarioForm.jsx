import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../../axios-client";
import './usuarioForm.css';

function UsuarioForm() {

    /* Componente UsuarioForm en React que maneja el formulario para crear o editar usuarios.
    Utiliza React hooks como useState y useEffect para el estado y efectos secundarios.
    Si el componente recibe un ID a través de los parámetros de la URL, carga los datos del usuario correspondiente para edición.
    El formulario permite enviar los datos, ya sea para crear un nuevo usuario o para actualizar uno existente,
    usando axios para realizar solicitudes HTTP. Si la operación es exitosa, redirige a la página de administración de usuarios.
    Incluye validaciones y manejo de errores para asegurar que todos los campos estén completos. */

    const navigate = useNavigate();
    const { id } = useParams();
    const [cargando, setCargando] = useState(false);
    const [usuario, setUsuario] = useState({
        id: null,
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    if (id) {
        useEffect(() => {
            setCargando(true);
            axiosClient
                .get(`/usuarios/${id}`)
                .then(({ data }) => {
                    setCargando(false);
                    setUsuario(data);
                })
                .catch(() => {
                    setCargando(false);
                });
        }, []);
    }

    function enviarForm(e){
      e.preventDefault();
      if(usuario.id){
        axiosClient.put(`/usuarios/${id}`, usuario)
                  .then(()=>{
                    navigate('/administarUsuarios')
                  })
                  .catch((error) => {
                    alert("Rellena todos los campos");
                    console.error("Error al crear el producto:", error);
                  })
      } else {
        axiosClient.post(`/usuarios`, usuario)
                  .then(()=>{
                    navigate('/administarUsuarios')
                  })
                  .catch((error) => {
                    alert("Rellena todos los campos");
                    console.error("Error al crear el producto:", error);
                  })
      }
    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-12 form-contenedor">
                {usuario.id && <h2>Modificar Usuario: {usuario.name}</h2>}
                {!usuario.id && <h2>Nuevo Usuario</h2>}
                {cargando && (
                    <div className="alert alert-info mt-3 col-12">
                        Cargando su contenido...
                    </div>
                )}
                {!cargando && (
                    <form onSubmit={enviarForm} className="mt-3 col-12">
                        <div className="form-group">
                            <input
                                    type="text"
                                    className="form-control col-12"
                                    value={usuario.id}
                                    disabled 
                                    placeholder="ID"
                                  />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control col-12"
                                value={usuario.name}
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control col-12"
                                value={usuario.email}
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        email: e.target.value,
                                    })
                                }
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control col-12"
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        password: e.target.value,
                                    })
                                }
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control col-12"
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        password_confirmation: e.target.value,
                                    })
                                }
                                placeholder="Confirmar Contraseña"
                            />
                        </div>
                        <button type="submit" className="btn btn-info">
                            Guardar
                        </button>
                    </form>
                )}
            </div>

            </div>
        </div>
    );
}

export default UsuarioForm;
