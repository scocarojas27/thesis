import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Maestrias.css'

class Maestrias extends Component{

    render(){
        return(
            <div className="TarjetasEst">
                <h1 className="title">Maestrías</h1>
                <ListGroup>
                    <ListGroup.Item className="esp">Maestría en Ingeniería</ListGroup.Item>
                    <ListGroup.Item className="esp">Maestría en Ingeniería Civil</ListGroup.Item>
                    <ListGroup.Item className="esp"><a className="esp" href="/MsIngesoft">Maestría en Ingeniería de Software</a></ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Maestrias