import React, { Fragment } from 'react';
import logo from '../../Assets/logoNegativo.png'
import './style.css'
import BtnWhatsapp from '../Navbar/BtnWhatsapp';

const Footer = () => {

    return(
        <Fragment>
            <div className="bg-blueMuni container-fluid">
                <div className="row justify-content-center">
                    <div className="container col-sm-12 col-md-4 col-lg-4">
                        <br/>
                        <label className="textFooter"><i class="fas fa-map-marker-alt"/> Boulevard Valle de San Javier, 101, Fraccionamiento Valle de San Javier, 42086 Pachuca, Hgo., México</label>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <br/>
                        
                        <center>
                            <img src={logo} alt="municipia.mx"/>
                        </center>
                        <br/>
                        <br/>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <br/>
                        <label className="textFooter"><i class="fas fa-envelope"/> hola@municiìa.com.mx</label>
                        <br/>
                        <label className="textFooter"><i class="fas fa-phone-alt"/> 77 11 31 31 34</label>
                        <br/>
                        <BtnWhatsapp/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <label className="textFooter">Municipia.mx <i class="far fa-copyright"/> 2020. Todos los Derechos reservados.</label>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer