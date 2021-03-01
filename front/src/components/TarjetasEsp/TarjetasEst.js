import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TarjetasEst.css'

class TarjetasEst extends Component{

    render(){
        return(
            <div className="TarjetasEst">
                <CardDeck>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2020-03/especializaciones-javeriana-cali.jpg"/>
                        <Card.Body>
                            <Card.Title>Especializaciones</Card.Title>
                            <Card.Text>
                            Programas de Especialización ofrecidos en la Facultad de Ingeniería y Ciencias de la 
                            Pontifica Universidad Javeriana Cali
                            </Card.Text>
                            <Button variant="primary" className="button">
                                Ver más
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2020-03/maestrias-javeriana-cali.jpg?h=299a7bbc&itok=UupmJi3s" />
                        <Card.Body>
                            <Card.Title>Maestrías</Card.Title>
                            <Card.Text>
                            Programas de Maestría ofrecidos en la Facultad de Ingeniería y Ciencias de la 
                            Pontifica Universidad Javeriana Cali
                            </Card.Text>
                            <Button variant="primary" className="button">
                                <Link to="/Maestrias" className="text-link">Ver más</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2020-02/Listado-DoctoradoProgramas.jpg?h=299a7bbc&itok=h3fXZzt9" />
                        <Card.Body>
                            <Card.Title>Doctorados</Card.Title>
                            <Card.Text>
                            Programas de Doctorado ofrecidos en la Facultad de Ingeniería y Ciencias de la 
                            Pontifica Universidad Javeriana Cali
                            </Card.Text>
                            <Button variant="primary" className="button">Ver más</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default TarjetasEst