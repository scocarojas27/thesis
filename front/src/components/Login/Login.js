import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css"
import api from '../../api/'

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
      event.preventDefault();
    }
  
    async function handleValidation(){ 
      const _email = email
      const _password = password
      const payload = {email: _email, password: _password}
      console.log(payload)
      const validation = await api.validateProfesor(payload).then(res => {
        window.alert('Bienvenido(a)')
      })
      if (validation){
        return true
      }
      else{
        return false
      }
    }

    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" className="login-button" disabled={!validateForm()} onClick={handleValidation}>
           <Link to={props.ruta} className='text-link'>Login</Link>
          </Button>
        </Form>
      </div>
    );
  }