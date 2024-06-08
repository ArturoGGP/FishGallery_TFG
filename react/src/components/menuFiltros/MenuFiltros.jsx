import React from "react";
import { obtenerListaTiposPescado } from "../../utils/obtencionListados";
import { useState } from "react";
import { useEffect } from "react";
import './menufiltros.css';

function MenuFiltros(props) {
    const [selectedTipoPescado, setSelectedTipoPescado] = useState("");
    const [busqueda, setBusqueda] = useState("");
    const [listaTiposPescado, setListaTiposPescado] = useState([]);
    const [cargando, setCargando] = useState(true);

    function asignarTipoPescado(e) {
        const selectedOptions = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setSelectedTipoPescado(selectedOptions);
        props.manejarTipoPescado(selectedOptions);
    }

    function asignarBusqueda(e) {
      setBusqueda(e.target.value);
      props.manejarBusqueda(e.target.value);
    }

    useEffect(() => {
        obtenerListaTiposPescado(setCargando, setListaTiposPescado);
    }, []);

    return (
        <div className="col-12 mx-auto">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <select
                            className="form-select"
                            aria-label="Selecciona un tipo de pescado"
                            value={selectedTipoPescado}
                            onChange={asignarTipoPescado}
                        >
                            <option value={0}>Todos</option>
                            {listaTiposPescado.map((tipo, index) => (
                                <option key={index} value={tipo.id}>
                                    {tipo.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <input
                            type="text"
                            placeholder="Buscar por nombre"
                            value={busqueda}
                            onChange={asignarBusqueda}
                            className="form-control mb-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuFiltros;
