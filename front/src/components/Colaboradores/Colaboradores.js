import React, {Component} from 'react';
import Login from '../Login/Login';
import Navbar from "../Navbar/Navbar";
import "./Colaboradores.css"

class Colaboradores extends Component{
    
    render(){
        return(
            <div className="Colaboradores">
                <h1 className="title">Colaboradores</h1>
                <Login ruta="/Colaboradores2"/>
            </div>
        )
    }
}

export default Colaboradores