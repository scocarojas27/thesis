import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AgregarFeed.css"
import api from '../../api/'

export default function AgregarEntrada() {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
  
    function validateForm() {
        return titulo.length > 0 && descripcion.length > 0;
      }

    function handleSubmit(event) {
      event.preventDefault();
    }

    /*async function updateEntrada(payload) {
        api.updateCursoById(payload.id, payload).then(res =>  {
            window.alert('Noticia agregada exitosamente')
        })
    }*/

    async function agregarAlFeed(){ 
      const _titulo = titulo
      const _descripcion = descripcion
      const payload = {titulo: _titulo, descripcion: _descripcion, imagen: imagen}
      console.log(payload)
      api.insertNoticia(payload).then(res => {
        window.alert("Noticia agregada exitosamente")
      })
      .catch((err) => {console.log(err)})
    }

    return (
        <div className="AgregarFeed">
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
          <Form.Group>
              <Form.File 
                id="imagen" 
                label="Imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                feedbackTooltip
              />
          </Form.Group>
          <Button block size="lg" type="submit" className="login-button" disabled={!validateForm()} onClick={agregarAlFeed}>
           Agregar
          </Button>
          <Button block size="lg" type="submit" className="login-button">
           <a className="text-link" href="/Colaboradores2">Atrás</a>
          </Button>
        </Form>
      </div>
    );
  }