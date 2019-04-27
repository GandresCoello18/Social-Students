import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';

class Nav extends React.Component{
    menu = () => {
        var refe = document.querySelector('.cuadro-menu');
        if(refe.style.display === 'block'){
            refe.style.display = 'none';
        }else{
            refe.style.display = 'block';
        }
    }
    render(){
        var estilos = {
            link: {
                color: "white",
            }
        }
        return(
            <nav className="row navegacion">
                <div className="col-6">
                <h5 className="text-md-center mt-3">Social Students <img src="images/smartphone.png" width="35" height="35" /></h5>
                </div>
                <div className="col-6" onClick={this.menu}>
                <p className="text-right mt-3"><img src="images/menu-button-of-three-horizontal-lines.svg" width="30" height="30" /></p>
                    <div className="row justify-content-end">
                        <div className="col col-md-6 col-lg-4 cuadro-menu">
                            <ul className="nav flex-column"> 
                                <li className="nav-item p-1"><a href="general">General</a></li>
                                <li className="nav-item p-1"><a href="tareas">Tareas y Trabajo</a></li>
                                <li className="nav-item p-1"><a href="codigo">Codigos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;