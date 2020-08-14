import {
    BrowserRouter as Router,
    Route, Redirect, Switch
} from 'react-router-dom'
import React, {Component} from 'react';

//Components
import Navbar from './components/Navbar/NavbarMunicipia'
import Home from './components/Home/Home';
import Page404 from './components/404/page404'
import Nosotros from './components/Nosotros/Nosotros';
import Servicios from './components/Servicios/Servicios';
import Career from './components/Career/Career'
import Contacto from './components/Contacto/Contacto';
import BtnWhatsapp from './components/Navbar/NavbarMunicipia'

class Routes extends Component{
    render(){
        return(
            <Router>
                <main>
                    <Navbar/>
                    
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Nosotros' component={Nosotros}/>
                        <Route exact path='/Servicios' component={Servicios}/>
                        <Route exact path='/career' component={Career}/>
                        <Route exact path='/Contacto' component={Contacto}/>

                        <Route component={Page404}/>
                    </Switch>
                    <BtnWhatsapp/>
                </main>
            </Router>
        )
    }
}

export default Routes