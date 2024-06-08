import React, { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { Link } from "react-router-dom";
import { obtenerListaProductos, obtenerListaTiposPescado, obtenerListaFormatosVenta, obtenerListaTiposEscamado, obtenerListaPaises } from '../../utils/obtencionListados';
import LazyLoad from 'react-lazy-load';

function AdministracionDeProductos() {
    const [listaProductos, setListaProductos] = useState([]);
    const [listaTiposPescado, setListaTiposPescado] = useState([]);
    const [listaTiposEscamado, setListaTiposEscamados] = useState([]);
    const [listaFormatosVenta, setListaFormatosVenta] = useState([]);
    const [listaPaises, setListaPaises] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [paginaActual, setPaginaActual] = useState(1);
    const [meta, setMeta] = useState({});
    
    /*const eliminarProducto = (producto) => {
        if (!window.confirm("¿Seguro/a que quieres eliminar este usuario?")) {
            return;
        }
        axiosClient.delete(`/productos/${producto.id}`).then(() => {
            obtenerListaProductos();
        });
    };*/

    const eliminarProducto = (producto) => {
        if (!window.confirm("¿Seguro/a que quieres eliminar este producto?")) {
            return;
        }
        axiosClient.delete(`/productos/${producto.id}`).then(() => {
            // Filtrar el usuario eliminado de la lista actual
            setListaProductos((prevProductos) =>
                prevProductos.filter((p) => p.id !== producto.id)
            );
        }).catch(error => {
            console.error('Error al eliminar producto:', error);
        });
    };

    const cambiarPagina = (numeroPagina) => {
        setPaginaActual(numeroPagina);
    };

    useEffect(() => {
        obtenerListaProductos(setCargando,setListaProductos, paginaActual, setMeta);
        obtenerListaTiposPescado(setCargando,setListaTiposPescado);
        obtenerListaFormatosVenta(setCargando,setListaFormatosVenta);
        obtenerListaTiposEscamado(setCargando,setListaTiposEscamados);
        obtenerListaPaises(setCargando,setListaPaises);
    }, [paginaActual]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1>Productos</h1>
                        <Link
                            className="btn btn-success"
                            to="/administarProductos/nuevo"
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
                                    <th>Precio</th>
                                    <th>Por Peso</th>
                                    <th>Tipo de Pescado</th>
                                    <th>Formato de Venta</th>
                                    <th>Escamado</th>
                                    <th>Procedencia</th>
                                    <th>Imagen</th>
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
                                    {listaProductos.map((p) => (
                                            <tr key={p.id}>
                                                <td>{p.id}</td>
                                                <td>{p.nombre}</td>
                                                <td>{p.precio}</td>
                                                <td>{parseFloat(p.porPeso).toString()}</td>
                                                <td>{
                                                        listaTiposPescado
                                                        .filter(t => t.id === p.tipoPescado_id)
                                                        .map(t => t.nombre)
                                                    }
                                                </td>
                                                <td>{
                                                        listaFormatosVenta
                                                        .filter(f => f.id === p.formatoVenta_id)
                                                        .map(f => f.nombre)
                                                    }
                                                </td>
                                                <td>{
                                                        listaTiposEscamado
                                                        .filter(t => t.id === p.escamado_id)
                                                        .map(t => t.nombre)
                                                    }
                                                </td>
                                                <td>{
                                                        listaPaises
                                                        .filter(t => t.id === p.pais_id)
                                                        .map(t => t.nombre)
                                                    }
                                                </td>
                                                <td>{p.imagen ? 'Sí' : 'No'}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-warning btn-sm"
                                                    >
                                                        <Link
                                                        className="without-color text-decoration-none"
                                                        to={
                                                            "/administarProductos/" +
                                                            p.id
                                                        }
                                                        >
                                                        Modificar
                                                        </Link>
                                                    </button>
                                                    &nbsp;
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={(e) =>
                                                            eliminarProducto(p)
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

export default AdministracionDeProductos