import React, { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { Link } from "react-router-dom";
import './administracionDeUsuarios.css'
import { obtenerListaUsuarios } from '../../utils/obtencionListados';
import LazyLoad from 'react-lazy-load';

function AdministracionDeUsuarios() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [paginaActual, setPaginaActual] = useState(1);
    const [meta, setMeta] = useState({});

    const eliminarUsuario = (usuario) => {
        if (!window.confirm("¿Seguro/a que quieres eliminar este usuario?")) {
            return;
        }
        axiosClient.delete(`/usuarios/${usuario.id}`).then(() => {
            // Filtrar el usuario eliminado de la lista actual
            setListaUsuarios((prevUsuarios) =>
                prevUsuarios.filter((u) => u.id !== usuario.id)
            );
        }).catch(error => {
            console.error('Error al eliminar usuario:', error);
        });
    };

    const cambiarPagina = (numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    useEffect(() => {
        obtenerListaUsuarios(setCargando, setListaUsuarios, paginaActual, setMeta);
    }, [paginaActual]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1>Usuarios</h1>
                        <Link
                            className="btn btn-success"
                            to="/administarUsuarios/nuevo"
                        >
                            Añadir
                        </Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Última modificación</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            {cargando ? (
                                <tbody>
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            Cargando su contenido...
                                        </td>
                                    </tr>
                                </tbody>
                            ) : (
                                <tbody>  
                                    {listaUsuarios.map((u) => (
                                        <tr key={u.id}>
                                            <td>{u.id}</td>
                                            <td>{u.name}</td>
                                            <td>{u.email}</td>
                                            <td>{u.created_at}</td>
                                            <td>
                                                <button
                                                    className="btn btn-warning btn-sm"
                                                >
                                                    <Link
                                                    className="without-color text-decoration-none"
                                                    to={
                                                        "/administarUsuarios/" +
                                                        u.id
                                                    }
                                                    >
                                                      Modificar
                                                    </Link>
                                                </button>
                                                &nbsp;
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={(e) =>
                                                        eliminarUsuario(u)
                                                    }
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
                <div className="pagination col-12">
                {Array.from({length: meta.last_page}, (_, i) => i + 1).map((numero) => (
                    <button
                        key={numero}
                        className={paginaActual === numero ? "active" : ""}
                        onClick={() => cambiarPagina(numero)}
                    >
                        {numero}
                    </button>
                ))}
            </div>
            </div>
        </div>
    );
}

export default AdministracionDeUsuarios;
