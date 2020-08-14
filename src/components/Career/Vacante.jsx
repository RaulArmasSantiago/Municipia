import React, {Fragment} from 'react'
import './style.css'

const Vacante = ({index,vacante}) => {
    return (
        <Fragment>
            <div className="card">
                <div className="card-heade bg-blueMuni" role="tab" id="headingOne1">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                        aria-controls="collapseOne1">
                        <h4 className="mb-0 ml-3 text-white titleVacante">
                        {index}.- {vacante.titulo} <i className="fas fa-angle-down rotate-icon"></i>
                        </h4>
                    </a>
                </div>

                {/* <!-- Card body --> */}
                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                    <div className="card-body">

                        <h6 className="text-left titleVacante text-blueMuni">{vacante.subtitulo}</h6>
                        <br/>
                        <h6 className="text-blueMuni text-left">Requisitos:</h6>
                        <ul>
                            <li className="text-left"><b>Carrera:</b> {vacante.requisitos.carrera}</li>
                            <li className="text-left"><b>Carrera:</b> {vacante.requisitos.plus}</li>
                            <li className="text-left"><b>Edad:</b> {vacante.requisitos.edad}</li>
                            <li className="text-left"><b>Sexo:</b> {vacante.requisitos.sexo}</li>
                            <li className="text-left"><b>Experiencia:</b> {vacante.requisitos.experiencia}</li>
                            <li className="text-left"><b>Horario:</b> {vacante.requisitos.horario}</li>
                        </ul>

                        <h6 className="text-blueMuni text-left">Descripción y detalle de actividades</h6>
                        <ul>
                            {vacante.actividades.map((actividad, key) => (
                                <li className="text-left" key={key + 1}>{actividad}</li>
                            ))}
                        </ul>

                        <h6 className="text-blueMuni text-left">Aptitudes</h6>
                        <ul>
                            {vacante.aptitudes.map((aptitud, key) => (
                                <li className="text-left" key={key + 1}>{aptitud}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Vacante