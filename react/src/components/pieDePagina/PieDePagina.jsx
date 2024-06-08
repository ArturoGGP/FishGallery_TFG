import React from 'react'
import '../../views/home/home.css'
import telefonoIcono  from '../../assets/telefono.svg'
import emailIcono  from '../../assets/email.svg'

function PieDePagina() {
  return (
    <footer className="container-fluid">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-4">
                <h3>Fish Gallery</h3>
                <br />
                <p>Somos una empresa dedicada a ofrecer pescado fresco y sostenible del mar a tu mesa. Nuestra pasión es garantizar calidad y preservar nuestros océanos para las futuras generaciones. ¡Bienvenidos a nuestro mundo marino!</p>
            </div>
            <div className="col-2"></div>
            <div className="col-4">
            <h3>Contacta con nosotros</h3>
            <div><img className="iconoFooter" src={telefonoIcono} alt="" /><span>+34 666 666 666</span></div>
            <div><img className="iconoFooter" src={emailIcono} alt="" /><span>usuario@gmail.com</span></div>
            </div>
            <div className="col-1"></div>
        </div>
        <hr />
        <div className="row text-center">
            <span className="col-12">© Copyright 2024 Fish Gallery.</span>
        </div>
    </footer>
  )
}

export default PieDePagina
