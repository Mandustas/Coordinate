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
    if (status == TargetStatuses.Finded) {
        statusPic = <div className="target-status-circle green "></div>
    } else if (status == TargetStatuses.Attention) {
        statusPic = <div className="target-status-circle yellow pulse"></div>
    } else if (status == TargetStatuses.NotFound) {
        statusPic = <div className="target-status-circle red"></div>
    }
    return (
        <div className="col">
            <div className="card target-card mt-2 mb-1 " data-bs-toggle="modal" data-bs-target=".modal-target">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex align-items-center">
                            {statusPic}
                            <h5 className="mb-1">{title}</h5>
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
