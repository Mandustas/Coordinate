import React from 'react'
import Modal from './Modal'
import { CreateTypes, FilterTypes } from './ReviewPage'

function ModalOperationFilter() {
    return (
<>
            <Modal modelType={FilterTypes.ModalOperationsHistoryFilter}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Фильтрация истории</h5>
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
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" className="btn btn-dark" data-dismiss="modal">Применить</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalOperationFilter
