import React, {Component, Fragment} from 'react'
import imageHeader from '../../Assets/portada.jpg'
import HeaderPage from '../Headers/HeaderPage'
import './style.css'
import consultoria from '../../Assets/consultoria.jpg'
import mision from '../../Assets/miniPortada.png'
import vision from '../../Assets/consultoria.jpg'
import valores from '../../Assets/Valores.png'

// Componentes
import Footer from '../Footer/Footer'


class Nosotros extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Fragment>
                <HeaderPage image={imageHeader} title={"¿Quiénes somos?"}/>
                <br/>
                <div className="container">
                    <h2 className="pageTitle text-left">¿Quiénes somos?</h2>
                    <br/>
                    <div className="shadow container" >
                        <br/>
                        <div className="row justify-content-center">

                            <div className="col-md-12">
                            <div className="card mb-3" >
                                <div className="row no-gutters">
                                    
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Sobre nosotros</h3>
                                        <p className="card-text mvv">
                                        Somos un grupo de talentos en constante sinergia, 
                        especializados en temas referentes al ámbito municipal, 
                        comprometidos con la profesionalización constante, 
                        siempre listos y actualizados con las nuevas disposiciones aplicables a la municipalidad, 
                        en apego al marco normativo vigente, lo que nos permite ofrecer soluciones eficaces a nuestros clientes.
                                        </p>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={consultoria} className="card-img" alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <div className="col-md-6 ">
                            <div className="card mb-3 altoMV" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <br/>
                                        <img src={mision} className="card-img" alt="..."/>
                                    </div>

                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Misión</h3>
                                        <p className="card-text">
                                        Contribuir al fortalecimiento de la imagen institucional de los ayuntamientos, 
                                        en materia de transparencia y rendición de cuentas, brindando soluciones que 
                                        garanticen plena confianza entre nuestros clientes.
                                        </p>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                            <div className="col-md-6">
                            <div className="card mb-3 altoMV">
                                <div className="row no-gutters">
                                    
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">Visión</h3>
                                        <p className="card-text">
                                        Consolidarse como un referente de prestigio, 
                                        en la prestación de servicios de consultoría gubernamental, enfocados a los gobiernos municipales.
                                        </p>
                                    </div>
                                    </div>
                                    <div className="col-md-4 alingImg">
                                    <br/>
                                        <img src={mision} className="card-img center" alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Nuestros valores</h3>
                                    <p className="card-text mvv">
                                        En Municipia los valores que nos rigen son la base de nuestro trabjo.
                                    </p>
                                </div>
                                <img src={valores} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        </div>
                        <br/>
                    </div>
                    <br/>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Nosotros