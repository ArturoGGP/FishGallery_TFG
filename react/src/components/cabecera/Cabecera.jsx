import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/fish-logo.svg'
import '../../views/home/home.css'

function Cabecera() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <nav className="navbar navbar-expand-md fixed-top kanit-regular">
                <img id="logo" src={logo} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <div>    
                        <ul className="d-md-none navbar-nav">
                            <div className="container-fluid">
                            <div className="row">
                                <div className="col-4 d-md-none centro">
                                <li className="nav-item centro">
                                    <Link className="nav-link centro" to={"/"}>INICIO</Link>
                                </li>
                                </div>
                                <div className="col-4 d-md-none  centro">
                                <li className="nav-item centro">
                                    <Link className="nav-link centro" to={"/productos"}>PESCADOS</Link>
                                </li>
                                </div>
                                <div className="col-4 d-md-none  centro">
                                <li className="nav-item centro">
                                    <Link className="nav-link centro" to={"/tiendas"}>TIENDAS</Link>
                                </li>
                                </div>
                            </div>
                            </div>
                        </ul>
                    </div>    

                    <div className="d-md-none centro">
                        <button className="btn btn-light" type="button">MiEntorno</button>
                    </div>
                

                    <div className="d-none d-md-block" id="ulDefault">
                        <ul className="navbar-nav me-auto" id="ulDefault">
                            <li className="nav-item centro alineacionLi">
                                <Link className="nav-link centro" to={"/"}>INICIO</Link>
                            </li>
                            <li className="nav-item centro alineacionLi">
                                <Link className="nav-link centro" to={"/productos"}>PESCADOS</Link>
                            </li>
                            <li className="nav-item centro alineacionLi">
                                <Link className="nav-link centro" to={"/tiendas"}>TIENDAS</Link>
                            </li>
                        </ul>
                    </div>

                    <span className="d-flex d-none d-md-block">
                        <Link to={"/mientorno"}><button className="btn btn-light" type="button">MiEntorno</button></Link>
                    </span>
                   
                </div>
            </nav>
        </div>
    </div>       
    )
}

export default Cabecera
