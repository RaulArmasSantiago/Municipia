import React, {Component, Fragment} from 'react'
import img2 from '../../Assets/header1.jpg'
import './style.css'


class HeaderHome extends Component{

    render(){
        return(
            <Fragment>
                
                <header className="masthead">
                    {/* <div className="container h-100">
                        <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="titleHome">Bienvenido</h1>
                            <p className="textHeaderHome">En municipia.MX, te damos la más cordial bienvenida, con la garantía que la única ocupación de la municipalidad, será gobernar, de todo lo demás nos encargamos nosotros.</p>
                        </div>
                        </div>
                    </div> */}
                </header>
            </Fragment>
        )
    }

}

export default HeaderHome