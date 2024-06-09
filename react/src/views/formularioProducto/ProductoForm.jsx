import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../../axios-client";
import './productoform.css';
import { obtenerListaTiposPescado, obtenerListaFormatosVenta, obtenerListaTiposEscamado, obtenerListaPaises } from '../../utils/obtencionListados';

function ProductoForm() {

    /* Componente ProductoForm en React que maneja el formulario para crear o editar productos.
     Utiliza React hooks como useState y useEffect para el estado y efectos secundarios.
     Obtiene datos dinámicamente al montar el componente, como listas de tipos de pescado, formatos de venta, tipos de escamado y países.
     Si el componente recibe un ID a través de los parámetros de la URL, carga los datos del producto correspondiente para edición.
     El formulario permite enviar los datos, ya sea para crear un nuevo producto o para actualizar uno existente,
     usando axios para realizar solicitudes HTTP. Si la operación es exitosa, redirige a la página de administración de productos.
     Incluye validaciones y manejo de errores para asegurar que todos los campos estén completos. */

    const navigate = useNavigate();
    const { id } = useParams();
    const [listaTiposPescado, setListaTiposPescado] = useState([]);
    const [listaFormatosVenta, setListaFormatosVenta] = useState([]);
    const [listaTiposEscamado, setListaTiposEscamados] = useState([]);
    const [listaPaises, setListaPaises] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [producto, setProducto] = useState({
        id: null,
        nombre: "",
        precio: "",
        porPeso: "",
        tipoPescado_id: null,
        formatoVenta_id: null,
        escamado_id: null,
        pais_id: null,
        imagen: ''
    });

    if (id) {
        useEffect(() => {
            setCargando(true);
            axiosClient
                .get(`/productos/${id}`)
                .then(({ data }) => {
                    setCargando(false);
                    setProducto(data);
                })
                .catch(() => {
                    setCargando(false);
                });
        }, []);
    }

    function enviarForm(e) {
        e.preventDefault();
        if (producto.id) {
            axiosClient.put(`/productos/${id}`, producto).then(() => {
                navigate("/administarProductos");
            })
            .catch((error) => {
                alert("Rellena todos los campos");
                console.error("Error al crear el producto:", error);
            });
        } else {
            axiosClient.post(`/productos`, producto).then(() => {
                navigate("/administarProductos");
            })
            .catch((error) => {
                alert("Rellena todos los campos");
                console.error("Error al crear el producto:", error);
            });
        }
    }

    useEffect(() => {
        obtenerListaTiposPescado(setCargando,setListaTiposPescado);
        obtenerListaFormatosVenta(setCargando,setListaFormatosVenta);
        obtenerListaTiposEscamado(setCargando,setListaTiposEscamados);
        obtenerListaPaises(setCargando,setListaPaises);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 form-contenedor">
                    {producto.id && <h2>Modificar Producto: {producto.nombre}</h2>}
                    {!producto.id && <h2>Nuevo Producto</h2>}
                    {cargando && (
                        <div className="alert alert-info mt-3 col-12">
                            Cargando su contenido...
                        </div>
                    )}
                    {!cargando && (
                        <form onSubmit={enviarForm} className="container">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="id" className="form-label">ID</label>
                                    <input
                                        type="text"
                                        disabled 
                                        className="form-control"
                                        id="id"
                                        name="id"
                                        value={producto.id}
                                        placeholder="ID"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        name="nombre"
                                        value={producto.nombre}
                                        placeholder="Nombre"
                                        onChange={(e) =>
                                            setProducto({
                                                ...producto,
                                                nombre: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="precio-cantidad"
                                        name="precio"
                                        value={producto.precio}
                                        placeholder="Precio"
                                        onChange={(e) =>
                                            setProducto({
                                                ...producto,
                                                precio: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="porPeso" className="form-label">Por peso</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="porPeso"
                                        name="porPeso"
                                        value={parseFloat(producto.porPeso).toString()}
                                        placeholder="Por peso"
                                        onChange={(e) =>
                                            setProducto({
                                                ...producto,
                                                porPeso: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="tipoPescado_id" className="form-label">Tipo de pescado</label>
                                    <select name="tipoPescado" id="tipoPescado_id" className="form-control" value={producto.tipoPescado_id} onChange={(e) =>
                                            setProducto({
                                                ...producto,
                                                tipoPescado_id: e.target.value,
                                            })
                                    }>
                                        {listaTiposPescado.map((item, index) => (
                                            <option key={index} value={item.id}>{item.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="formatoVenta_id" className="form-label">Formato de venta</label>
                                    <select name="formatoVenta" id="formatoVenta_id" className="form-control" value={producto.formatoVenta_id} onChange={(e) =>
                                            setProducto({
                                                ...producto,
                                                formatoVenta_id: e.target.value,
                                            })
                                    }>
                                        {listaFormatosVenta.map((item, index) => (
                                            <option key={index} value={item.id}>{item.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="escamado_id" className="form-label">Escamado</label>
                                    <select name="escamado" id="escamado_id" className="form-control" value={producto.escamado_id} onChange={(e) =>
                                            setProducto({
                                                ...producto,
                                                escamado_id: e.target.value,
                                            })
                                    }>
                                        {listaTiposEscamado.map((item, index) => (
                                            <option key={index} value={item.id}>{item.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="pais_id" className="form-label">Procedencia</label>
                                    <select name="pais" id="pais_id" className="form-control" value={producto.pais_id} onChange={(e) =>
                                            setProducto({
                                                ...producto,
                                                pais_id: e.target.value,
                                            })
                                    }>
                                        {listaPaises.map((item, index) => (
                                            <option key={index} value={item.id}>{item.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagen" className="form-label">Link de imagen &#40;obligatorio&#41;</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="imagen"
                                    name="imagen"
                                    value={producto.imagen}
                                    placeholder="Imagen"
                                    onChange={(e) =>
                                        setProducto({
                                            ...producto,
                                            imagen: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductoForm;