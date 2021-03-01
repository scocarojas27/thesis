import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import { StreamApp, NotificationDropdown, FlatFeed } from 'react-activity-feed';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import "./Inicio.css"
import 'react-activity-feed/dist/index.css';
import api from '../../api'

class Inicio extends Component{
    
    constructor(props){
        super();
        this.state=({
            noticias: []
        })
    }

    componentDidMount() { 

        api.getAllNoticias().then((response) => {
            const info = response.data
            console.log("Estas son "+info)
            this.setState({
                noticias: info.data
            })
        })
        .catch((err) => {console.log(err)})

    }

    render(){
        console.log(this.state)
        return(
            <div className="Inicio">
                {this.state.noticias.map(n => 
                        <Card border="primary" style={{ width: '70rem' }} className="position">
                            <Card.Body>
                                <Card.Img variant="top" src={n.imagen}/>
                                <Card.Title>{n.titulo}</Card.Title>
                                <Card.Text>
                                {n.descripcion}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
            </div>
        )
    }
}

export default Inicio