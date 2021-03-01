import React, {Component} from 'react';
import Login from '../Login/Login';
import Navbar from "../Navbar/Navbar";
import "./Profesores.css"

class Profesores extends Component{
    
    render(){
        return(
            <div className="Profesores">
                <h1 className="title">Profesores</h1>
                <Login ruta="/Profesores2"/>
            </div>
        )
    }
}

export default Profesores