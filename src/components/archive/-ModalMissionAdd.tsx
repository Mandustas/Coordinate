import React from 'react'
import MemberSelect from './-MemberSelect'
import Modal from '../Modal'
import ObjectSelect from './-ObjectSelect'
import { CreateTypes } from '../ReviewPage'

function ModalMissionAdd() {
    return (
        <>
            <Modal modelType={CreateTypes.ModalMissionAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Создать миссию</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label>Участник поиска:</label>
                            <MemberSelect></MemberSelect>

                        </div>
                        <div className="form-group" style={{ height: "300px" }}>
                            <label>Объект поиска:</label>
                            <ObjectSelect></ObjectSelect>
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

export default ModalMissionAdd
