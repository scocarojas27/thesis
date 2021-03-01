import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CursosAsp.css'
import api from '../../api/'

class CursosAsp extends Component{

    constructor(props){
        super();
        this.state=({
            id: 1,
            nombre: '',
            descripcion: '',
            horarios: '',
            contenidos: [],
            noticias: [],
            profesor: ''

        })
    }

    componentDidMount() { 
        api.getCursoById(1).then((response) => {
            const info = response.data
            this.setState({
                nombre: info.data.nombre,
                descripcion: info.data.descripcion,
                horarios: info.data.horarios,
                contenidos: info.data.contenidos,
                noticias: info.data.noticias,
                profesor: info.data.profesor
            })
        })
        .catch((err) => {console.log(err)})
    }
    render(){
        return(
            <div className="CursosAsp">
                <h1 className="title">{this.state.nombre}</h1>
                <CardDeck>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Descripción</Card.Title>
                            <Card.Text>
                            {this.state.descripcion}
                            </Card.Text>
                            <Button variant="primary" className="button">
                                <Link to="/Especializaciones" className="text-link">Ver más</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Información General</Card.Title>
                            <Card.Text>
                            Horarios:  
                            {this.state.horarios}
                            </Card.Text>
                            <Card.Text>
                            Profesor: 
                            {this.state.profesor}
                            </Card.Text>
                            <Button variant="primary" className="button">Ver más</Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Contenidos</Card.Title>
                            <Card.Text>
                            {this.state.contenidos.map(contenido => <li>{contenido}</li>)}
                            </Card.Text>
                            <Button variant="primary" className="button">Ver más</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default CursosAsp