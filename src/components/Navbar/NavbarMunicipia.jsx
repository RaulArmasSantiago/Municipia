import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo150x68.png'
import './style.css'

class NavbarMunicipia extends Component{
    
    render(){
        return(
            <Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navWhite">
                    <a class="navbar-brand ml-4" href="#"><img src={logo} alt="municipia.mx"/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link text-dark" to="/">Inicio <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/nosotros">Nosotros</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/servicios">Servicios</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/career">Career</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
            // <Navbar className="fixed-top " bg="light" expand="lg">
            //     <Navbar.Brand href="#home">
            //         <img src={logo} alt="" width="150"/>
            //     </Navbar.Brand>
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="ml-auto">
            //             <Link className="nav-link" to="/">Inicio</Link>
            //             <Link className="nav-link" to="/Nosotros">Nosotros</Link>
            //             <Link className="nav-link" to="/Servicios">Servicios</Link>
            //             <Link className="nav-link" to="/Blog">Blog</Link>
            //             <Link className="nav-link" to="/Contacto">Contacto</Link>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        )
    }
}

export default NavbarMunicipia