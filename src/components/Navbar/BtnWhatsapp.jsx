import React, {Fragment} from 'react'
import ReactWhatsapp from 'react-whatsapp'
import wsicon from '../../Assets/ws40.png'

const BtnWhatsapp = () => {

    return(
        <Fragment>

            <ReactWhatsapp className=" btn btn-sm btn-primaryWS" number="5217711313134" message="Hola me gustaria tener mas información sobre sus servicios.">
                <label> <i class="fab fa-whatsapp"/> Contáctenos por Whatsapp</label>
            </ReactWhatsapp>
        </Fragment>
    )
}

export default BtnWhatsapp