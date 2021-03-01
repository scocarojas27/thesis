import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MsIngesoft2.css'

class MsIngesoft2 extends Component{

    render(){
        return(
            <div className="Maestrias">
                <h1 className="title">Asignaturas Especialización en Ingeniería de Software</h1>
                <ListGroup>
                    <ListGroup.Item className="esp"><a className="esp" href="/CursosEst">Ingeniería de Requisitos</a></ListGroup.Item>
                    <ListGroup.Item className="esp">Arquitectura de Software</ListGroup.Item>
                    <ListGroup.Item className="esp">Estrategia y patrones de diseño de Software</ListGroup.Item>
                    <ListGroup.Item className="esp">Construcción y pruebas de software</ListGroup.Item>
                    <ListGroup.Item className="esp">Desarrollo de Software seguro</ListGroup.Item>
                    <ListGroup.Item className="esp">Sistemas de bases de datos</ListGroup.Item>
                    <ListGroup.Item className="esp">Inteligencia artificial para análisis de datos</ListGroup.Item>
                    <ListGroup.Item className="esp">Ética e impactos de tecnología</ListGroup.Item>
                    <ListGroup.Item className="esp">Gestión y calidad de proyectos de Software</ListGroup.Item>
                    <ListGroup.Item className="esp">Procesamiento distribuido de datos</ListGroup.Item>
                    <ListGroup.Item className="esp">Arquitecturas de software en la nube</ListGroup.Item>
                    <ListGroup.Item className="esp">El Negocio del Software</ListGroup.Item>
                    <ListGroup.Item className="esp">Arquitecturas de integración</ListGroup.Item>
                    <ListGroup.Item className="esp">Líneas de productos de Software</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default MsIngesoft2