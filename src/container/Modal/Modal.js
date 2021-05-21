import React, { Component } from "react";
import ModalCss from "./Modal.module.css";
import Aux from "../../HOC/Auxe";

class Modal extends Component {
  render() {
    return (
      <Aux>
        <div className={ModalCss.Modal}></div>
      </Aux>
    );
  }
}

export default Modal;
