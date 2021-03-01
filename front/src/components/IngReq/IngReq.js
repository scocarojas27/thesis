import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './IngReq.css'
import api from '../../api'

class IngReq extends Component{

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
            <div className="IngReq">
                <h1 className="title">Curso: {this.state.nombre}</h1>
                <CardDeck>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Agregar entrada</Card.Title>
                            <Card.Text>
                            Agregar una noticia sobre la actualidad del curso
                            </Card.Text>
                            <Button variant="primary" className="button">
                                <a className="text-link" href="/AgregarNoticia">Agregar</a>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Agregar trabajo destacado</Card.Title>
                            <Card.Text>
                                Agregar un trabajo sobresaliente relacionado al curso para que los estudiantes puedan acceder al mimso.
                            </Card.Text>
                            <Button variant="primary" className="button">
                                Agregar
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Horario</Card.Title>
                            <Card.Text>
                                {this.state.horarios}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default IngReq