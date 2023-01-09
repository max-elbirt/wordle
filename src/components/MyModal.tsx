import React, {ReactElement, ReactPropTypes, useContext} from "react";
import {ModalProps} from "../types/ModalProps";
import {Modal, ModalDialog, ModalHeader, ModalTitle} from "react-bootstrap";
import {ModalsContext} from "../context/ModalsContext";

export const MyModal = ({children, show, onClose, title}: ModalProps) => {

    const modalCtx = useContext(ModalsContext);

    if (!show) {
        return null;
    }

    return (
        <Modal show={true} className={'modal fade'} onHide={() => modalCtx.setShowLoginModal(false)}>
            <ModalHeader closeButton>
                <ModalTitle className={'d-flex flex-row justify-content-between'}>
                    <span>{title}</span>
                </ModalTitle>
            </ModalHeader>
                {children}
                <button onClick={onClose}>Close</button>
        </Modal>
    )

}