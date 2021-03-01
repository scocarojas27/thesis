import React, {Component} from 'react';
//import { Button } from '../Button';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types'

class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <Link to={"/Inicio"}>
                    <img alt="PUJ Cali" className="photo" src='https://mg-local.servicios.javerianacali.edu.co/mg-local/assets/images/logosmall.png'/>
                </Link>
                <div className="menu-icon"onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        console.log(item, index)
                        return(
                            <Router>
                                <nav>
                                    <li key={index}>
                                        <a className={item.cName} key={index} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                </nav>
                            </Router>
                        )
                    })}
                </ul>
            </nav>
            
        )
    }
}

export default Navbar