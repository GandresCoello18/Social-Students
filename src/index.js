import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import App from './componentes/redireccionar';
import General from './pages/home';
import Tareas from './pages/pages-tarea';
import Codigo from './pages/pages-codigo';
import Login from './pages/login';

//https://gandrescoello18.github.io/social-students/

if(window.location.href === 'https://gandrescoello18.github.io/social-students/'){
    window.location.href = "login";
    //ReactDOM.render(<Login /> , document.getElementById('root'));
}

if(window.location.href === 'https://gandrescoello18.github.io/social-students/login'){
        ReactDOM.render(<Login /> , document.getElementById('root'));   
    }

if(window.location.href === 'https://gandrescoello18.github.io/social-students/general'){
        ReactDOM.render(<General /> , document.getElementById('root'));   
    }

if(window.location.href === 'https://gandrescoello18.github.io/social-students/tareas'){
        ReactDOM.render(<Tareas /> , document.getElementById('root'));   
    }

if(window.location.href === 'https://gandrescoello18.github.io/social-students/codigo'){
        ReactDOM.render(<Codigo /> , document.getElementById('root'));   
    }