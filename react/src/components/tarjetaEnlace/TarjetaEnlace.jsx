import React from "react";
import '../../views/home/home.css'
import { Link } from 'react-router-dom'

function TarjetaEnlace(props) {
    return (
        <div
            id="enlacePescados"
            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4"
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 limpio">
                        <img id="imagenTarjetasEnlaces" src={props.imagen} alt="" />
                    </div>
                    <div className="col-6 centro textoEnlaces">
                        <div id="textoEnlacePescados">
                            <h2>{props.titulo}</h2>
                            <p>{props.intro}</p>
                        </div>
                        <button
                            className="button"
                        >
                            <Link to={props.enlace}><span className="blanco">Ir </span></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaEnlace;
