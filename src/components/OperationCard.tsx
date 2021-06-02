import axios from "axios";
import config from '../config/config.json'
import "../components/OperationCard.css"
import { useActions } from "../hooks/useActions";

export interface OperationCardProps {
    key: number
    id: number
    title: string
    isActive?: boolean
    coordinator: string
    members: number
    targets: number
    date: any
}
function OperationCard({ isActive, title, key, id, coordinator, members, targets, date }: OperationCardProps) {
    const { fetchOperations, fetchActiveOperations } = useActions()

    function handleClick() {
        document.location.href = "/operation/missions";
    }
    async function OperationCompleteHandler(id: number) {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        const isConfirm = window.confirm("Подтвердите завершение операции")
        if (isConfirm) {
            const res = await axios.put(config.API_SERVER_URL + 'operation/' + id, { isSuccess: true }, axiosConfig);
        }
        fetchOperations()
        fetchActiveOperations()
    }
    return (
        <div className={` ${isActive ? 'col-12' : 'col-md-12 col-xl-4 mb-4'} `} >
            <div className="card operation-card "
                style={{ background: "none" }}
            >
                <div className="card-body">
                    <div className="operation-card-header">
                        <div className="operation-card-header-title" >
                            {
                                isActive
                                    ? <h2 className="operation-card-title operation-card-title-underline" onClick={handleClick}>{title}</h2>
                                    : <h5 className="operation-card-title ">{title}</h5>
                            }
                            {isActive
                                ? <i className="fa fa-check complete-operation-button" onClick={() => OperationCompleteHandler(id)}></i>
                                : null
                            }
                        </div>

                        <div className="operation-card-date text-muted">{date}</div>
                    </div>
                    <div className="operation-card-coordinator card-subtitle mb-2 text-muted">
                        {coordinator}
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="card-text">Учаcтников: {members}</div>
                        <div className="card-text">Целей: {targets}</div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default OperationCard
