import React, {Component} from 'react';
import Login from '../Login/Login';
import Navbar from "../Navbar/Navbar";
import "./Profesores2.css"
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import api from '../../api'

class Profesores2 extends Component{
    
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

    setCursos = async() =>{
        var nombre = ''
        const cursos2 = this.state.cursos
        var newCursos = []

        for(var i=0; i<cursos2.length; i++){
            api.getCursoById(cursos2[i]).then((response) => {
                nombre = response.data.data.nombre
                console.log("this is" + nombre)
                newCursos.push(nombre)
                this.setState({cursos: newCursos})
            })
            .catch((err) => {console.log(err)})
        }
    }
    componentDidMount() { 

        api.getProfesorById("5fc160888f7069272a1462a6").then((response) => {
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
        this.setCursos()        
        console.log(this.state)
        return(
            <div className="Profesores">
                <h1 className="title">Bienvenido(a) {this.state.nombre}</h1>
                <CardDeck>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Cursos</Card.Title>
                            <Card.Text>
                            {this.state.cursos.map(c => <li><a href="/IngReq">{c}</a></li>)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Información personal</Card.Title>
                            <Card.Text>
                               Nombre: {this.state.nombre}
                            </Card.Text>
                            <Card.Text>
                               Título: {this.state.titulo}
                            </Card.Text>
                            <Card.Text>
                               Áreas: {this.state.areas.map(a => <li>{a}</li>)}
                            </Card.Text>
                            <Button variant="primary" className="button">
                                Editar
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Horas de consulta</Card.Title>
                            <Card.Text>
                            {this.state.horaConsulta.map(hc => <li>{hc}</li>)}
                            </Card.Text>
                            <Button variant="primary" className="button">
                                Editar
                            </Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Profesores2