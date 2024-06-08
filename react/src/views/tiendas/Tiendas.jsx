import React, { useEffect } from "react";
import { useState } from "react";
import { obtenerListaTiendas } from "../../utils/obtencionListados";
import "./tiendas.css";
import localizacion from "../../assets/location.png";
function Tiendas() {
    const [listaTiendas, setListaTiendas] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        obtenerListaTiendas(setCargando, setListaTiendas);
    }, []);

    return (
        <div className="container tiendas">
            <div className="row">
                {cargando ? (
                    <div className="col-12 text-center">
                        <p>Cargando su contenido...</p>
                    </div>
                ) : (
                    listaTiendas.map((t) => (
                        <div className="container">
                            <div className="row">
                                <div className="card map-container col-12">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <a href={t.mapa}>
                                                <img
                                                    src={localizacion}
                                                    className="img-fluid rounded-start"
                                                    alt="Card image"
                                                /></a>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                       {t.nombre}
                                                    </h5>
                                                    <p className="card-text">
                                                       {t.direccion}
                                                    </p>
                                                    <p className="card-text">
                                                       Horario: {t.horario}
                                                    </p>
                                                    <p className="card-text">
                                                       {t.telefono}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Tiendas;
