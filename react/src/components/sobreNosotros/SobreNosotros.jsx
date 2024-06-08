import React from 'react'
import '../../views/home/home.css'
import Carousel from '../carousel/Carousel'

function SobreNosotros() {
  return (
    <div className='container-fluid sobreNosotros'>
        <div className='row imagenesSobreNosotros'>
            <div className="col-12 centro">
                <h1 className="centro">SOBRE NOSOTROS</h1>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                <Carousel></Carousel>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 textSobreNosotros'>
                <p>Bienvenidos a <strong><span>Fish Gallery</span></strong>. Desde 1990, nos dedicamos a ofrecer los pescados y mariscos m&aacute;s frescos y de la m&aacute;s alta calidad. Nos enorgullece trabajar con proveedores que comparten nuestro compromiso con la sostenibilidad y la conservaci&oacute;n del medio ambiente marino.</p>
                <h4>Nuestra Misi&oacute;n</h4>
                <p>Brindar productos frescos, saludables y sostenibles es nuestra prioridad. Cada ma&ntilde;ana recibimos pescado y marisco fresco, garantizando que siempre obtenga lo mejor del mar.</p>
                <h4>Lo Que Ofrecemos</h4>
                <ul>
                <li>Frescura Garantizada: Productos frescos recibidos diariamente.</li>
                <li>Variedad: Amplia selecci&oacute;n de pescados y mariscos.</li>
                <li>Calidad: Solo ofrecemos lo mejor, nutritivo y delicioso.</li>
                <li>Servicio Personalizado: Asesoramiento y atenci&oacute;n a sus necesidades.</li>
                </ul>
                <h4>Compromiso con la Comunidad</h4>
                <p>Estamos orgullosos de ser parte de la Región de Murcia y apoyamos diversas iniciativas locales. Gracias por elegirnos como su pescader&iacute;a de confianza. &iexcl;Vis&iacute;tenos hoy!</p>
            </div>
        </div>
    </div>
  )
}

export default SobreNosotros
