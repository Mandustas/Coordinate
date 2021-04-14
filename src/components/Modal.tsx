import React from 'react'
import "../components/Modal.css"

export interface Modal {
    children: any
    modelType: string 
}

function Modal ({children, modelType}:Modal) {
    return (
        <div className={`modal fade modal-dialog-scrollable ${modelType}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    {children}
                    
                </div>
            </div>
        </div>

    )
}

export default Modal
