import React from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'

function ModalTargetAdd() {
    return (
        <>
            <Modal modelType={CreateTypes.ModalTargetCreate}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Добавить цель</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label >Название</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Введите название цели поиска"></input>
                        </div>
                        <div className="form-group">
                            <label>Описание цели:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" style={{ height: "200px" }}></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" className="btn btn-dark" data-dismiss="modal">Добавить</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalTargetAdd
