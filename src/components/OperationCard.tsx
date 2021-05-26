import axios from "axios";
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
            }
        };
        const isConfirm = window.confirm("Подтвердите завершение операции")
        if (isConfirm) {
            const res = await axios.put('https://localhost:44330/api/operation/' + id, { isSuccess: true }, axiosConfig);
        }
        setTimeout(fetchOperations(), 100);
        setTimeout(fetchActiveOperations(), 100);
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
                                    ? <h2 className="operation-card-title" onClick={handleClick}>{title}</h2>
                                    : <h5 className="operation-card-title" onClick={handleClick}>{title}</h5>
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
