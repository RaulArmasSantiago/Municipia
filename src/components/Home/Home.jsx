import React, {Component, Fragment} from 'react'
import './style.css'

// Componentes

import HeaderHome from '../Headers/HeaderHome'

import Footer from '../Footer/Footer'

//React Botstrapp


import consultoria from '../../Assets/consultoria.jpg'

class Home extends Component{

    

    render(){
        return(
            <Fragment>
                <HeaderHome/>
                
                <br/>

                <div className="container justify-content-center">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="card mb-3" >
                                <div class="row no-gutters">
                                    
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="titleCards">Bienvenido</h3>
                                        <p class="card-text pText">
                                            En municipia.MX, te damos la más cordial bienvenida, 
                                            con la garantía que la única ocupación de la municipalidad, será gobernar, de todo lo demás nos encargamos nosotros.
                                            <br/><br/>
                                            Somos un grupo de talentos en constante sinergia, 
                                            especializados en temas referentes al ámbito municipal, 
                                            comprometidos con la profesionalización constante, 
                                            siempre listos y actualizados con las nuevas disposiciones 
                                            aplicables a la municipalidad, en apego al marco normativo vigente, 
                                            lo que nos permite ofrecer soluciones eficaces a nuestros clientes.
                                        </p>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                        <img src={consultoria} class="card-img" alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="container shadow bgGris justify-content-center">
                    
                </div>
                <br/>
                <Footer/>
                
            </Fragment>
        )
    }
}

export default Home