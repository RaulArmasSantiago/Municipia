import React, {Component, Fragment} from 'react'
import imageHeader from '../../Assets/servicios.png'
import HeaderPage from '../Headers/HeaderPage'
import './style.css'
import serviciosList from '../Listas/Servicos'
import CardService from '../CardService/CardService'
import Footer from '../Footer/Footer'



class Servicios extends Component{
    constructor(props){
        super(props)
    }

    renderServicos = () =>{
        console.log(serviciosList)
        let servicios = serviciosList.map((servicio, index) => {
            return(
                <CardService service={servicio} key={index}/>
            )
        })
        return servicios
    }

    render(){
        return(
            <Fragment>
                <HeaderPage image={imageHeader} title={"Nuestros Servicios"}/>
                <br/>

                <div className="container">
                    <h2 className="pageTitle text-left">Nuestros Servicios</h2>
                    <br/>
                    <div className="shadow container">
                        <br/>
                        <div className="row">
                            {this.renderServicos()}
                        </div>
                    </div>
                    <br/>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Servicios