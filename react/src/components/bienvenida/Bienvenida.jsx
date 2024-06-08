import React from 'react'
import '../../views/home/home.css'
import local from '../../assets/local2.jpeg'
import pescados from '../../assets/pescados.jpeg'
import TarjetaEnlace from '../tarjetaEnlace/TarjetaEnlace'

function Bienvenida() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 centro">
            <h1 id="bienvenida" className="centro">¡BIENVENID@ A FISH GALLERY!</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-1 limpio"></div>
              <TarjetaEnlace imagen={pescados} enlace={"/productos"} titulo="CATÁLOGO" intro="Échale un vistazo a nuestros productos"/>
            <div className="col-xl-2 limpio"></div>
              <TarjetaEnlace imagen={local} enlace={"/tiendas"} titulo="TIENDAS" intro="Encuentra nuesto local más cercano"/>
            <div className="col-xl-1 limpio"></div>
        </div>
    </div>
  )
}

export default Bienvenida
