import React from 'react';
import Modal from './modal';
import './css/login.css';

class CuadroRegistro extends React.Component{
    state = {
        imagen1: 'images/smartphone.svg',
        imagen2: 'images/notification.svg',
        imagen3: 'images/user.svg',
        text_modal: ''
    }

     registro = (e) => {
         e.preventDefault();
        var correo = document.getElementById('correo');
        if(correo.value === '' || correo.value.indexOf('@') === -1 ){
            this.setState({text_modal: 'Campos vacios o No escribio un correo electronico'});
        }else{
            this.setState({text_modal: 'Gracias por preferir Social Students...'});
            setTimeout(() =>{
                var pagina="general";
                window.location.href=pagina;
            },2000)
        }   
    }

    render(){
        return(
            <div className="cuadro-login" id="root2">
            <Modal isOpen={true}>{this.state.text_modal}</Modal>
                <div className="row align-itens-center">
                    <div className="col-12">
                        <div className="logo">
                            <img src={this.state.imagen1} className="icon-mobile" width="38" height="38" />
                        </div>
                        <h5 className="text-center subtitulo mt-4">Social Students</h5>
                        <div className="row mt-4">
                            <div className="col-6">
                                <div className="ovalo">
                                <img src={this.state.imagen2} className="icon-notification" width="20" height="20" />
                                <p className="text-center">23 Actividades</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="ovalo">
                                <img src={this.state.imagen3} className="icon-notification" width="20" height="20" />
                                <p className="text-center">18 Miembros</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-10">
                                <form>
                                    <input type="email" id="correo" required className="form-control text-center" placeholder="@ - Correo Electronico"/>
                                    <button type="submit" data-toggle="modal" data-target="#exampleModal" className="btn color-btn mt-2 form-control" onClick={this.registro}>Registrarme</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CuadroRegistro;