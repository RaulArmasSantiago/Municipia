import React, {Component, Fragment} from 'react'
import './style.css'

class HeaderPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            img: props.image,
            title: props.title
        }
    }

    render(){
        return(
            <Fragment>
                <header className="headerPage">
Holi
                </header>
                {/* <header className="headerPage" style={{backgroundImage: 'URL('+this.state.img+')'}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="titleHome">{this.state.title}</h1>
                        </div>
                        </div>
                    </div>
                </header> */}
            </Fragment>
        )
    }
}

export default HeaderPage