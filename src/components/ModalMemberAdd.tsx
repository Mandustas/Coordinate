import MemberAddMultiselect from './MemberAddMultiselect'
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'

function ModalMemberAdd() {
    return (
        <>
            <Modal modelType={CreateTypes.ModalMemberAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Добавить участников</h5>
                    <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                </div>
                <div className="modal-body" style={{ height: "400px" }}>
                    <form>
                        <div className="form-group">
                            <label>Доступные для поиска</label>
                            <MemberAddMultiselect></MemberAddMultiselect>
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

export default ModalMemberAdd
