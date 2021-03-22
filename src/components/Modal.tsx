import React from 'react'

export interface Modal {
    children: any
}

function Modal ({children}:Modal) {
    return (
        <div className="modal fade modal-dialog-scrollable exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    {children}
                    
                </div>
            </div>
        </div>

    )
}

export default Modal
