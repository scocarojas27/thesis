import React, {Component} from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import { StreamApp, NotificationDropdown, FlatFeed } from 'react-activity-feed';
import Aspirantes from './components/Aspirantes/Aspirantes';
import Estudiantes from './components/Estudiantes/Estudiantes';
import Profesores from './components/Profesores/Profesores';
import Profesores2 from './components/Profesores2/Profesores2';
import Inicio from './components/Inicio/Inicio'
import 'react-activity-feed/dist/index.css';
import Especializaciones from './components/Especializaciones/Especializaciones';
import Maestrias from './components/Maestrias/Maestrias';
import Colaboradores from './components/Colaboradores/Colaboradores';
import EspIngesoft from './components/EspIngesoft/EspIngesoft';
import EspIngesoft2 from './components/EspIngesoft2/EspIngesoft2';
import CursosAsp from './components/CursosAsp/CursosAsp';
import MsIngesoft from './components/MsIngesoft/MsIngesoft';
import MsIngesoft2 from './components/MsIngesoft2/MsIngesoft2';
import CursosEst from './components/CursosEst/CursosEst';
import IngReq from './components/IngReq/IngReq';
import AgregarEntrada from './components/AgregarEntrada/AgregarEntrada';
import AgregarNoticia from './components/AgregarNoticia/AgregarNoticia';
import Colaboradores2 from './components/Colaboradores2/Colaboradores2';
import Colaboradores3 from './components/Colaboradores3/Colaboradores3';

class App extends Component {
  /*state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };*/

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
              <Route exact path="/"><Redirect to="/Inicio"/></Route>
              <Route exact path={"/Aspirantes"} component={Aspirantes}/>
              <Route exact path={"/Estudiantes"} component={Estudiantes}/>
              <Route exact path={"/Profesores"} component={Profesores}/>
              <Route exact path={"/Colaboradores"} component={Colaboradores}/>
              <Route exact path={"/Inicio"} component={Inicio}/>
              <Route exact path={"/Especializaciones"} component={Especializaciones}/>
              <Route exact path={"/Maestrias"} component={Maestrias}/>
              <Route exact path={"/EspIngesoft"} component={EspIngesoft}/>
              <Route exact path={"/Profesores2"} component={Profesores2}/>
              <Route exact path={"/EspIngesoft2"} component={EspIngesoft2}/>
              <Route exact path={"/CursosAsp"} component={CursosAsp}/>
              <Route exact path={"/MsIngesoft"} component={MsIngesoft}/>
              <Route exact path={"/MsIngesoft2"} component={MsIngesoft2}/>
              <Route exact path={"/CursosEst"} component={CursosEst}/>
              <Route exact path={"/IngReq"} component={IngReq}/>
              <Route exact path={"/AgregarNoticia"} component={AgregarNoticia}/>
              <Route exact path={"/Colaboradores2"} component={Colaboradores2}/>
              <Route exact path={"/Colaboradores3"} component={Colaboradores3}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
