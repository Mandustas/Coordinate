import React from 'react'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'

export interface ModalObjectAddState{
    x?: number
    y?: number
}

function ModalObjectAdd({x, y}:ModalObjectAddState) {
    return (
        <>
            <Modal modelType={CreateTypes.ModalObjectAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Добавить объект на карту</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label >Название объекта:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Введите название цели поиска"></input>
                        </div>
                        <div className="form-group">
                            <label>Описание объекта:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" style={{ height: "200px" }}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Координаты:</label>
                            <div className="d-flex">
                                <div className="col d-flex align-items-center">
                                    <label htmlFor="" style={{ margin: "10px" }}>N: </label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" value={x}></input>
                                </div>
                                <div className="col d-flex align-items-center">
                                    <label htmlFor="" style={{ margin: "10px" }}>W: </label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" value={y} ></input>
                                </div>
                            </div>
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

export default ModalObjectAdd
