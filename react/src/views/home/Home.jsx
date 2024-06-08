import React from 'react'
import imagenPescaderia from '../../assets/pescaderia3.jpg'
import Bienvenida from '../../components/bienvenida/Bienvenida'
import SobreNosotros from '../../components/sobreNosotros/SobreNosotros'
import LazyLoad from 'react-lazy-load'
import facebook from "../../assets/icons8-facebook-128.svg"
import instagram from "../../assets/icons8-instagram.svg"
import twitter from "../../assets/icons8-twitter.svg"
function Home() {
  return (
    <div className="container-fluid">               
      <div className="row">
          <div id="portadaEnv" className="col-12">
            <img id="portada" src={imagenPescaderia} alt="" />
          </div>
            <div>
                <Bienvenida />
                <SobreNosotros />

            </div> 
      </div>
      <div class="container">
        <div class="row top-margen">
            <div className="col-12 centro">
              <h1 id="bienvenida" className="centro">NUESTRAS REDES SOCIALES</h1>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 centro">
                <a href="https://www.facebook.com/?locale=es_ES" target="_blank"><img src={facebook}/></a>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 centro">
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram}/></a>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 centro">
                <a href="https://x.com/home" target="_blank"><img src={twitter}/></a>
            </div>
        
        </div>
    </div>
    </div>
  )
}

export default Home
