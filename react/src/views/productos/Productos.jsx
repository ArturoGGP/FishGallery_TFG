import {
    obtenerListaProductos,
    obtenerListaTiposPescado,
    obtenerListaFormatosVenta,
    obtenerListaTiposEscamado,
    obtenerListaPaises,
} from "../../utils/obtencionListados";
import React, { useEffect, useState } from "react";
import "./productos.css";
import MenuFiltros from "../../components/menuFiltros/MenuFiltros";
import noResults from "../../assets/noresult.png";
import LazyLoad from "react-lazy-load";
import ScrollUp from "../../components/scrollUp/ScrollUp";

function Productos() {
    const [listaProductos, setListaProductos] = useState([]);
    const [listaTiposPescado, setListaTiposPescado] = useState([]);
    const [listaTiposEscamado, setListaTiposEscamados] = useState([]);
    const [listaFormatosVenta, setListaFormatosVenta] = useState([]);
    const [listaPaises, setListaPaises] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [tipoPescado, setTipoPescado] = useState(0);
    const [busqueda, setBusqueda] = useState("");

    function manejarTipoPescado(tipo) {
        setTipoPescado(tipo);
    }

    function manejarBusqueda(search) {
        setBusqueda(search);
    }

    function filtrarProducto(producto) {
        if (producto.tipoPescado_id === parseInt(tipoPescado[0])) return true;
        else if (tipoPescado == 0) return true;
        else return false;
    }

    function filtrarPorBusqueda(producto) {
        if (producto.nombre.toUpperCase().includes(busqueda.toUpperCase()))
            return true;
        else if (busqueda === "") return true;
        else return false;
    }

    useEffect(() => {
        obtenerListaProductos(setCargando, setListaProductos);
        obtenerListaTiposPescado(setCargando, setListaTiposPescado);
        obtenerListaFormatosVenta(setCargando, setListaFormatosVenta);
        obtenerListaTiposEscamado(setCargando, setListaTiposEscamados);
        obtenerListaPaises(setCargando, setListaPaises);
    }, []);

    return (
        <div className="container-fluid top-margin">
            <div className="row">
                <MenuFiltros
                    manejarTipoPescado={manejarTipoPescado}
                    manejarBusqueda={manejarBusqueda}
                ></MenuFiltros>
                <LazyLoad offset={100}>
                    <div>
                        {cargando ? (
                            <div className="col-12 text-center">
                                <p className="looking-for-text">Cargando su contenido...</p>
                            </div>
                        ) : (
                            <div className="container-fluid">
                                <div className="row">
                                    {listaProductos
                                        .filter(filtrarProducto)
                                        .filter(filtrarPorBusqueda)
                                        .map((p) => (
                                            <div
                                                key={p.id}
                                                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 tarjetaProduct"
                                            >
                                                <div className="container-fluid">
                                                    <div className="row card">
                                                        <div className="col-12 imagenTarjetaProduct">
                                                            <img
                                                                src={p.imagen}
                                                                className="card-img-left"
                                                                alt="Imagen del Producto"
                                                            />
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="card-body">
                                                                <div className="container-fluid">
                                                                    <div className="row">
                                                                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6 centro">
                                                                            <h1 className="card-title">
                                                                                {
                                                                                    p.nombre
                                                                                }
                                                                            </h1>
                                                                        </div>
                                                                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6 centro">
                                                                            <span id="precio">
                                                                                {
                                                                                    p.precio
                                                                                }{" "}
                                                                                €
                                                                                <span id="datos">
                                                                                    /{" "}
                                                                                    {parseFloat(
                                                                                        p.porPeso
                                                                                    ).toString()}{" "}
                                                                                    kg
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-text">
                                                                    <div className="container-fluid">
                                                                        <div className="row">
                                                                            <span
                                                                                className="col-4 col-sm-4 col-md-12 col-lg-12 col-xl-4 centro"
                                                                                id="datos"
                                                                                tabIndex="0"
                                                                                data-bs-toggle="tooltip"
                                                                                title="TIPO DE PESCADO"
                                                                            >
                                                                                {listaTiposPescado
                                                                                    .filter(
                                                                                        (
                                                                                            t
                                                                                        ) =>
                                                                                            t.id ===
                                                                                            p.tipoPescado_id
                                                                                    )
                                                                                    .map(
                                                                                        (
                                                                                            t
                                                                                        ) =>
                                                                                            t.nombre
                                                                                    )}
                                                                            </span>
                                                                            <span
                                                                                className="col-4 col-sm-4 col-md-12 col-lg-12 col-xl-4 centro"
                                                                                id="datos"
                                                                                tabIndex="0"
                                                                                data-bs-toggle="tooltip"
                                                                                title="TIPO DE ESCAMADO"
                                                                            >
                                                                                {listaTiposEscamado
                                                                                    .filter(
                                                                                        (
                                                                                            t
                                                                                        ) =>
                                                                                            t.id ===
                                                                                            p.escamado_id
                                                                                    )
                                                                                    .map(
                                                                                        (
                                                                                            t
                                                                                        ) =>
                                                                                            t.nombre
                                                                                    )}
                                                                            </span>
                                                                            <span
                                                                                className="col-4 col-sm-4 col-md-12 col-lg-12 col-xl-4 centro"
                                                                                id="datos"
                                                                                tabIndex="0"
                                                                                data-bs-toggle="tooltip"
                                                                                title="LUGAR DE PROCEDENCIA"
                                                                            >
                                                                                {listaPaises
                                                                                    .filter(
                                                                                        (
                                                                                            t
                                                                                        ) =>
                                                                                            t.id ===
                                                                                            p.pais_id
                                                                                    )
                                                                                    .map(
                                                                                        (
                                                                                            t
                                                                                        ) =>
                                                                                            t.nombre
                                                                                    )}
                                                                            </span>
                                                                            <hr></hr>
                                                                            <p id="datos">
                                                                                <strong>
                                                                                    Servido:{" "}
                                                                                </strong>{" "}
                                                                                {listaFormatosVenta
                                                                                    .filter(
                                                                                        (
                                                                                            f
                                                                                        ) =>
                                                                                            f.id ===
                                                                                            p.formatoVenta_id
                                                                                    )
                                                                                    .map(
                                                                                        (
                                                                                            f
                                                                                        ) =>
                                                                                            f.nombre
                                                                                    )}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </LazyLoad>
                {!cargando &&
                    listaProductos
                        .filter(filtrarProducto)
                        .filter(filtrarPorBusqueda).length === 0 && (
                        <div className="col-12 text-center sinResults">
                            <img className="text-center" src={noResults} />
                        </div>
                    )}
            </div>
            <ScrollUp />
        </div>
    );
}

export default Productos;
