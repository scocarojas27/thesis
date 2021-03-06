import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MsIngesoft.css'

class MsIngesoft extends Component{

    constructor(props){
        super(props);
        this.icons = {
            nextIcon: <span className="next-icon"> &gt;&gt; </span>,
            prevIcon: <span className="next-icon"> &lt;&lt; </span>
        }
    }

    render(){
        const {nextIcon, prevIcon} = this.icons;
        return(
            <div className="TarjetasEst">
                <Carousel className="position" nextIcon={nextIcon} prevIcon={prevIcon}>
                    <Carousel.Item>
                        <img
                        className="image" 
                        src="https://www.javerianacali.edu.co/sites/default/files/styles/image_1100x700/public/2020-02/especializacion-en-ingenieria-de-software-1100x700.jpg?h=299a7bbc&itok=Bur1Y5Jm"
                        alt="Asignaturas"
                        href="EspIngesoft2"
                        />
                        <Carousel.Caption>
                            <h2 className="text"><a className="text" href="/MsIngesoft2">Asignaturas</a></h2>
                            <p className="text">Asignaturas del programa de Maestría en Ingeniería de Software</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className="image"
                        src="https://www.javerianacali.edu.co/sites/default/files/styles/image_1000x500_/public/2020-02/Maria-Enith-1000x500.jpg?h=5dabf909&itok=YV8sdy-B"
                        alt="Perfil del estudiante"
                        />

                        <Carousel.Caption>
                            <h2 className="text">Actualidad laboral</h2>
                            <p className="text">Novedades laborales relacionadas a los contenidos del programa de Maestría en Ingeniería de Software</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="image" 
                        src="https://www.javerianacali.edu.co/sites/default/files/styles/image_800x600/public/2020-02/PlanEstudiosPosgrados_5.jpg?h=827069f2&itok=8FjMV_DL"
                        alt="Información financiera"
                        />
                        <Carousel.Caption>
                            <h2 className="text">Recursos</h2>
                            <p className="text">Recursos y enlaces de inteŕes relacionados al contenido del programa de Maestría en Ingeniería de Software</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default MsIngesoft