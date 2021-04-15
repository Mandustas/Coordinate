import Modal from './Modal'
import { CreateTypes } from './ReviewPage'

function ModalMemberAdd() {
    return (
        <>
            <Modal modelType={CreateTypes.ModalMemberAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Оповещение участников о ПСР</h5>
                    <button type="button" className="btn close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body" style={{ height: "300px" }}>
                    <form>
                        <div className="form-group">

                            <div className="form-group">
                                <textarea className="form-control" id="usersCallTextArea" style={{ height: "250px" }} placeholder="Введите сообщение для участников поиска"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" className="btn btn-dark" data-dismiss="modal">Отправить</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalMemberAdd
