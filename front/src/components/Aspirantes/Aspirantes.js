import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import TarjetasAsp from "../TarjetasAsp/TarjetasAsp"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Aspirantes.css"

class Aspirantes extends Component{
    
    render(){
        return(
            <div className="Aspirantes">
                <h1 className="title">Aspirantes</h1>
                <TarjetasAsp/>
            </div>
        )
    }
}

export default Aspirantes