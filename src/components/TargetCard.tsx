import axios from "axios";
import config from '../config/config.json'
import "../components/TargetCard.css"
import { useActions } from "../hooks/useActions";
import { TargetStatuses } from "./TargetPanel";


export interface TargerCardProps {
    id: number;
    key: number;
    title: string;
    date: any;
    description: string;
    status: number;
    onClick?: any

}
function TargetCard({ id, key, title, date, description, status, onClick }: TargerCardProps) {
    const { fetchActiveOperations } = useActions()

    let statusPic;
    if (status === TargetStatuses.Finded) {
        statusPic = <div className="target-status-circle green "></div>
    } else if (status === TargetStatuses.Attention) {
        statusPic = <div className="target-status-circle yellow pulse"></div>
    } else if (status === TargetStatuses.NotFound) {
        statusPic = <div className="target-status-circle red"></div>
    }

    async function targetDeleteHandler(id: number, title: string) {
        const isDelete = window.confirm("Подтвердите удаление цели " + title)
        if (isDelete) {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const res = await axios.delete(config.API_SERVER_URL + 'target/' + id, axiosConfig);
        }
        setTimeout(fetchActiveOperations(), 100);
    }


    return (
        <div className="col">
            <div className="card target-card mt-2 mb-1 d-flex"
                style={{ background: "none" }}
            >
                <div className="card-body text-dark" >
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex align-items-center">
                            {statusPic}
                            <h5 className="mb-1" style={{ paddingRight: "10px" }}>{title}</h5>
                            <i className="fa fa-pencil mission-delete-button" style={{ fontSize: "16px" }} onClick={onClick}></i>
                            <i className="fa fa-trash-o mission-delete-button" style={{ fontSize: "16px" }} onClick={() => targetDeleteHandler(id, title)}></i>
                        </div>
                        <small className="text-muted">{date}</small>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TargetCard
