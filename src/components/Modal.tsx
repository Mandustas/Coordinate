import React from 'react'
import "../components/Modal.css"

export interface ModalProps {
    children: any
    modelType: string
}

function Modal({ children, modelType }: ModalProps) {
    return (
        <div id={`${modelType}`} className={`modal fade modal-dialog-scrollable ${modelType}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
