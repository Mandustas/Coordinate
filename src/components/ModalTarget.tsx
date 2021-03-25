import React from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'

function ModalTarget() {
    return (
        <>
            <Modal modelType={CreateTypes.ModalTarget}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Цель поиска</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat excepturi, magni harum quas aliquam vitae recusandae. Eaque id, magni dolor a animi, dolorum fugit quaerat in, minima harum eveniet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim? Architecto ad facilis, suscipit perspiciatis, nesciunt, necessitatibus rem similique eos veritatis adipisci voluptates quod neque! Ipsum quod aliquid eum quidem.
                    </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalTarget
