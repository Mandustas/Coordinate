import "../components/TargetCard.css"
import { TargetStatuses } from "./TargetPanel";

export interface TargerCardProps {
    id: number;
    key: number;
    title: string;
    date: any;
    description: string;
    status: number

}
function TargetCard({ id, key, title, date, description, status }: TargerCardProps) {
    let statusPic;
    if (status === TargetStatuses.Finded) {
        statusPic = <div className="target-status-circle green "></div>
    } else if (status === TargetStatuses.Attention) {
        statusPic = <div className="target-status-circle yellow pulse"></div>
    } else if (status === TargetStatuses.NotFound) {
        statusPic = <div className="target-status-circle red"></div>
    }

    function targetDeleteHandler(id: number, title: string) {
        alert("target " + title + " deleted")
    }

    return (
        <div className="col">
            <div className="card target-card mt-2 mb-1">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex align-items-center">
                            {statusPic}
                            <h5 className="mb-1" style={{paddingRight:"10px"}}>{title}</h5>
                            <i className="fa fa-trash-o mission-delete-button" style={{ fontSize: "16px" }} onClick={() => targetDeleteHandler(id,title)}></i>
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
