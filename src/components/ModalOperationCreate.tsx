import React from 'react'

import Modal from "./Modal"
import { CreateTypes } from "./ReviewPage"

function ModalOperationCreate() {
    return (
        <>
            <Modal modelType={CreateTypes.ModalOperationAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Создать операцию</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <div className="d-flex">
                                <input type="text" className="form-control border border-dark" id="exampleFormControlInput1" placeholder="Введите название операции">
                                </input>
                                {/* <input type="submit" className="btn btn-outline-dark" style={{marginLeft:"10px"}}></input>
                            <input type="submit" className="btn btn-outline-dark" style={{marginLeft:"10px"}}></input> */}
                                {/* <button className="btn btn-outline-dark" type="submit" style={{ marginLeft: "10px" }}><i className="fa fa-check" aria-hidden="true"></i></button> */}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" className="btn btn-dark" data-dismiss="modal">Создать</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalOperationCreate
