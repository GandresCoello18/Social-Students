import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props){
    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Ventana de aviso</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {props.children}
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Continuar</button>
      </div>
    </div>
  </div>
</div>
        , document.getElementById('modal-area'));
}

export default Modal;