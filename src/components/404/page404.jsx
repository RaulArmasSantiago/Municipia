import React, {Component, Fragment} from 'react'

class page404 extends Component{
    render(){
        return(
            <Fragment>
                <header className="notFound">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="titleHome">Pagina no encontrada</h1>
                            <p className="textHeaderHome">En municipia.MX, te damos la más cordial bienvenida, con la garantía que la única ocupación de la municipalidad, será gobernar, de todo lo demás nos encargamos nosotros.</p>
                        </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default page404