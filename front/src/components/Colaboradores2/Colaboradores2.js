import React, {Component} from 'react';
import Login from '../Login/Login';
import Navbar from "../Navbar/Navbar";
import "./Colaboradores2.css"
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import api from '../../api'

class Colaboradores2 extends Component{
    
    constructor(props){
        super();
        this.state=({
            nombre: '',
            titulo: '',
            cursos: [],
            horaConsulta: [],
            areas: []
        })
    }

    componentDidMount() { 

        api.getProfesorById("5fff6cb3400d86137b87b39d").then((response) => {
            const info = response.data

            this.setState({
                nombre: info.data.nombre,
                titulo: info.data.titulo,
                cursos: info.data.cursos,
                horaConsulta: info.data.horaConsulta,
                areas: info.data.areas
            })
        })
        .catch((err) => {console.log(err)})

    }

    render(){         
        console.log(this.state)
        return(
            <div className="Colaboradores2">
                <h1 className="title">Bienvenido(a) {this.state.nombre}</h1>
                <CardDeck>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Agregar noticia</Card.Title>
                            <Card.Text>
                            Agregar noticias relacionadas con la actualidad de la facultad y sus diferentes programas
                            </Card.Text>
                            <Button variant="primary" className="button">
                                <a className="text-link" href="/Colaboradores3">Agregar</a>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Información personal</Card.Title>
                            <Card.Text>
                               Nombre: {this.state.nombre}
                            </Card.Text>
                            <Card.Text>
                               Cargo: {this.state.titulo}
                            </Card.Text>
                            <Button variant="primary" className="button">
                                Editar
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Agregar formaatos</Card.Title>
                            <Card.Text>
                            Agregar un formato para diligencias relacionadas a los estudiantes y a la faucltad
                            </Card.Text>
                            <Button variant="primary" className="button">
                                Agregar
                            </Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Colaboradores2