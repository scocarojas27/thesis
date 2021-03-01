import React, {Component} from 'react';
import AgregarEntrada from '../AgregarEntrada/AgregarEntrada'
import Navbar from "../Navbar/Navbar";
import "./AgregarNoticia.css"

class AgregarNoticia extends Component{
    
    render(){
        return(
            <div className="Profesores">
                <h1 className="title">Agregar noticia</h1>
                <AgregarEntrada/>
            </div>
        )
    }
}

export default AgregarNoticia