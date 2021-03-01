import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CursosEst.css'
import api from '../../api'

class CursosEst extends Component{

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
        this.icons = {
            nextIcon: <span className="next-icon"> &gt;&gt; </span>,
            prevIcon: <span className="next-icon"> &lt;&lt; </span>
        }
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
        const {nextIcon, prevIcon} = this.icons;
        return(
            <div className="CursosEst">
                <h1 className="title">{this.state.nombre}</h1>
                <CardDeck>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Descripción</Card.Title>
                            <Card.Text>
                            {this.state.descripcion}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Información General</Card.Title>
                            <Card.Text>
                            Horarios: {this.state.horarios}
                            </Card.Text>
                            <Card.Text>
                            Profesor: {this.state.profesor}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Contenidos</Card.Title>
                            <Card.Text>
                            {this.state.contenidos.map(contenido => <li>{contenido}</li>)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <h2 className="title">Noticias</h2>
                <Carousel className="position" nextIcon={nextIcon} prevIcon={prevIcon}>
                    {this.state.noticias.map(noticia => 
                    <Carousel.Item>
                        <img
                        className="image" 
                        src="https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2020-02/especializacion-en-ingenieria-de-software-1100x700.jpg?h=299a7bbc&itok=Bur1Y5Jm"
                        alt="Asignaturas"
                        href="EspIngesoft2"
                        />
                        <Carousel.Caption>
                            <h2 className="text">{noticia.titulo}</h2>
                            <p className="text">{noticia.descripcion}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)}
                </Carousel>
            </div>
        )
    }
}

export default CursosEst