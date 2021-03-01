import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Especializaciones.css'

class Especializaciones extends Component{

    render(){
        return(
            <div className="Especializaciones">
                <h1 className="title">Especializaciones</h1>
                <ListGroup>
                    <ListGroup.Item className="esp">Especialización en Gerencia de Contrucciones</ListGroup.Item>
                    <ListGroup.Item className="esp"><a className="esp" href="/EspIngesoft">Especialización en Ingeniería de Software</a></ListGroup.Item>
                    <ListGroup.Item className="esp">Especialización en Logística</ListGroup.Item>
                    <ListGroup.Item className="esp">Especialización en Sistemas Gerenciales de Ingeniería</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Especializaciones