import React, {Component} from 'react';
import Navbar from "../Navbar/Navbar";
import TarjetasEst from '../TarjetasEsp/TarjetasEst';
import "./Estudiantes.css"

class Estudiantes extends Component{
    
    render(){
        return(
            <div className="Estudiantes">
                <h1 className="title">Estudiantes</h1>
                <TarjetasEst/>
            </div>
        )
    }
}

export default Estudiantes