import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AgregarEntrada.css"
import api from '../../api/'

export default function AgregarEntrada() {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
  
    function validateForm() {
        return titulo.length > 0 && descripcion.length > 0;
      }

    function handleSubmit(event) {
      event.preventDefault();
    }

    async function updateEntrada(payload) {
        api.updateCursoById(payload.id, payload).then(res =>  {
            window.alert('Noticia agregada exitosamente')
        })
    }
  
    async function entrada(){ 
      const _titulo = titulo
      const _descripcion = descripcion
      const payload = {titulo: _titulo, descripcion: _descripcion}
      console.log(payload)
      api.getCursoById(1).then(res => {
        const info = res.data
        var noticias = info.data.noticias
        noticias.push(payload)
        info.data.noticias = noticias
        updateEntrada(info.data)
      })
    }

    return (
        <div className="AgregarNoticia">
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group size="lg" controlId="titulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              autoFocus
              type="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="descripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              as="textarea"
              rows={5}
            />
          </Form.Group>
          <Button block size="lg" type="submit" className="login-button" disabled={!validateForm()} onClick={entrada}>
           Agregar
          </Button>
          <Button block size="lg" type="submit" className="login-button">
           <a className="text-link" href="/IngReq">Atrás</a>
          </Button>
        </Form>
      </div>
    );
  }