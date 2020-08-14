import React, {Fragment} from 'react'
import './style.css'

//Componentes
import Header from '../Headers/HeaderPage'
import Footer from '../Footer/Footer';
import Vacante from './Vacante'

// Vacantes y Becarios
import vacantesList from '../Listas/Vacantes'

const Career = () => {

    const renderVacantes = () => {
        const vacante = vacantesList.map((vacante, index) => {
            return(
                <Vacante vacante={vacante} index={index + 1}/>
            )
        })
        return vacante
    }

    return(
        <Fragment>
            <Header/>
            <br/>
            <div className="container">
                <h2 className="pageTitle text-left">Career</h2>
                <br/>

                <div className="shadow container">
                    <br/>
                    <p className="textCareer">
                        Nuestro departamento de talento humano, orienta sus actividades para seleccionar a los mejores perfiles, 
                        y hacer de municipia.MX, una firma competitiva. Porque conocemos de su probada capacidad profesional, 
                        ofrecemos a nuestros colaboradores tareas exigentes y desafiantes, garantizando una retribución justa en base a conocimiento, 
                        experiencia y solución de encomiendas, así como crecimiento y desarrollo profesional. 
                        Por otro lado, en municipia.MX estamos convencidos que el escenario de la nueva normalidad, 
                        es una gran oportunidad para los recién graduados, ya que, a través de nuestro programa de becarios, 
                        tendrán experiencias reales, que pondrán a prueba sus habilidades para destacar en el ámbito laboral y 
                        continuar su carrera dentro de una compañía con altos estándares de calidad y excelencia.
                    </p>
                    <br/>

                    <h3 className="titleCards text-left">Vacantes:</h3>
                    <br/>
                    <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        {renderVacantes()}
                    </div>

                    <br/>
                </div>
            </div>
            <br/>
            <Footer/>
        </Fragment>
    )
}

export default Career