import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'
import './style.css'
import nodemailer from 'nodemailer'
import smtpTransport from '../../Nodemailer/nodemailer'

import emailjs from 'emailjs-com'

//Componentes
import HeaderPage from '../Headers/HeaderPage'
import imageHeader from '../../Assets/contacto.jpg'
import Footer from '../Footer/Footer'

//Iconos
import phone from '../../Assets/iconos/phoneWhite.png'
import sobre from '../../Assets/iconos/sobreWhite.png'
import location from '../../Assets/iconos/markerWhite.png'

const Contacto = () => {
    const {register, errors, handleSubmit} = useForm()

    const onFormSubmit = (data, e) => {
        console.log(data)

        var templateParams = {
            name: `Nombre${data.nombre} email de contacto(${data.email})`,
            to_name: "hola@municipia.com.mx",
            feedback: `${data.mansaje}`
        };
        
        emailjs.send('default_service', 'hola_municipia', templateParams, 'user_AtVqQiNbP1TPj7NzOeiWd')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
        e.target.reset()
    }

    return(
        <Fragment>
            <HeaderPage image={imageHeader} title={"Contácteneos"}/>
            <br/>
            <div className="container">
                <h2 className="pageTitle text-left">Contacto</h2>
                <br/>
                <div className="container shadow">
                    <div className="row">
                        <div className="col-md-6 bg-blueMuni">
                            <br/>
                            <h3 className="card-title text-white float-left">Dejanos un mesnaje: </h3>
                            <br/>
                            <br/>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                
                                <div className="form-group">
                                    <labe className="text-white float-left text-form sr-only">Nombre</labe>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre *"
                                        ref={register({
                                            required: {
                                                value: true,
                                                message: "Nombre requerido"
                                            }
                                        })}
                                    />
                                    <span className="text-danger text-small d-block mb-2 float-left">
                                        {errors.nombre && errors.nombre.message}
                                    </span>

                                </div>

                                <div className="form-group">
                                    <labe className="text-white float-left text-form sr-only">Email</labe>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="email"
                                        placeholder="Direccion de correo electronico *"
                                        ref={register({
                                            required: {
                                                value: true,
                                                message: "Correo requerido"
                                            }
                                        })}
                                    />
                                    <span className="text-danger text-small d-block mb-2 float-left">
                                        {errors.email && errors.email.message}
                                    </span>
                                </div>

                                <div className="form-group">
                                    <labe className="text-white float-left text-form sr-only">Email</labe>
                                    <textarea 
                                        className="form-control" 
                                        name="mansaje" 
                                        cols="30" 
                                        rows="7" 
                                        placeholder="Mensaje*"
                                        ref={register({
                                            required: {
                                                value: true,
                                                message: "Mensaje requerido"
                                            }
                                        })}
                                    ></textarea>
                                    <span className="text-danger text-small d-block mb-2 float-left">
                                        {errors.mensaje && errors.mensaje.message}
                                    </span>
                                </div>

                                <button type="submit" class="btn btn-primary btn-lg btn-block">Enviar</button>
                                <br/><br/>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <br/>
                            <h3 className="card-title pageTitle">Nuestras oficinas:</h3>
                            <br/>
                            <div className="container text-left">
                                <label className="text-contact"><img src={phone} alt=""/>&nbsp;&nbsp;771-13-13-13-4</label>
                                <br/>
                                <br/>
                                <label className="text-contact"><img src={sobre} alt=""/>&nbsp;&nbsp;hola@municipia.com.mx</label>
                                <br/>
                                <br/>
                                <label className="text-contact"> <img src={location} alt=""/>&nbsp;&nbsp;Blvd. Valle de San Javier 101, tercer piso, fraccionamiento Valle San Javier, 42086 Pachuca, Hgo, México</label>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Footer/>
        </Fragment>
    )
}

export default Contacto