import React, {Component, Fragment} from 'react'
import './style.css'

class CardService extends Component{
    constructor(props){
        super(props)
        this.state = {
            service: props.service
        }
    }

    

    render(){
        return(

            <div className="col-md-4 card-container">
                <div className="card-flip" style={{ height: "250px"}}>

                    <div className="card front bg-dark">
                        <img src={this.state.service.image} className="card-img opacitiCardImage" alt="..."/>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-white">{this.state.service.name}</h3>
                        </div>
                    </div>

                    <div className="card back">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.service.name}</h5>
                            <div className="scroll">
                                <p className="card-text">{this.state.service.description}</p>
                            </div>
                            
                            <a href="#" className="card-link float-left">Ver más</a>
                        </div>
                        {/* <div className="card-footer">
                            <a href="#" className="card-link float-left">Ver más</a>
                        </div> */}
                    </div>
                    
                </div>
                <br/>
            </div>

            // <Col lg="4">
            //     <Card style={{ width: '18rem' }}>
            //         <Card.Img variant="top" src={this.state.service.image} />
            //         <Card.Body className="heightCardBody">
            //             <Card.Title>{this.state.service.name}</Card.Title>
            //             <Card.Text>
            //             {this.state.service.description}
            //             </Card.Text>
            //         </Card.Body>
            //         <Card.Body>
            //             <Card.Link href="#">Ver mas</Card.Link>
            //         </Card.Body>
            //     </Card>
            //     <br/>
            // </Col>
        )
    }
}

export default CardService;
