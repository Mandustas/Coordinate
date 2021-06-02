import axios from 'axios';
import config from '../config/config.json'
import { useActions } from '../hooks/useActions';
import Modal from './Modal'
import { CreateTypes } from './ReviewPage'

function ModalMemberAdd() {
    const { fetchActiveOperations } = useActions()
    async function MemberAddHandler() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        const res = await axios.post(config.API_SERVER_URL + 'user/addusers', {}, axiosConfig);

        $("#" + CreateTypes.ModalMemberAdd).modal('hide')
        fetchActiveOperations()
    }

    return (
        <>
            <Modal modelType={CreateTypes.ModalMemberAdd}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Оповещение участников о ПСР</h5>
                    <button type="button" className="btn close" data-bs-dismiss="modal" aria-label="Close">
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
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={() => MemberAddHandler()}>Отправить</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalMemberAdd
