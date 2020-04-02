import React from "react";
import Portal from "../Portal/Portal";
import "./Modal.css";
import CloseIcon from "../../utils/CloseIcon";

class Modal extends React.Component {
  render() {
    const { children, toggle, on } = this.props;

    return (
      <Portal>
        {on && (
          <div className="ModalWrapper">
            <div className="ModalCard">
              <button className="CloseButton" onClick={toggle}>
                <CloseIcon name="close" />
              </button>
              {children}
            </div>
            <div className="ModalBackdrop" onClick={toggle} />
          </div>
        )}
      </Portal>
    );
  }
}
export default Modal;