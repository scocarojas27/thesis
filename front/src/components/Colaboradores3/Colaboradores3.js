import React, {Component} from 'react';
import AgregarFeed from '../AgregarFeed/AgregarFeed'
import Navbar from "../Navbar/Navbar";
import "./Colaboradores3.css"

class Colaboradores3 extends Component{
    
    render(){
        return(
            <div className="Colaboradores3">
                <h1 className="title">Agregar noticia</h1>
                <AgregarFeed/>
            </div>
        )
    }
}

export default Colaboradores3