import axios from "axios";
import "../components/MissionCard.css"
import { useActions } from "../hooks/useActions";
import MissionObjectItem from "./MissionObjectItem"

export interface MissionCardProps {
    key: number,
    id: number,
    detectedObjects: any[],
    memberName: string,
}

function MissionCard({ key, id, detectedObjects, memberName }: MissionCardProps) {
    const { fetchActiveOperations } = useActions()

    async function missionDeleteHandler(id: number) {
        const isDelete = window.confirm("Подтвердите удаление миссии" )
        if (isDelete) {
            const res = await axios.delete('https://localhost:44330/api/Mission/' + id);
        }
        setTimeout(fetchActiveOperations(), 100);
    }
    return (
        <div className="col">
            <div className="card mission-card mb-2">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-1" style={{ paddingRight: "10px" }}>Миссия #{id}</h5>
                            {
                                detectedObjects.length == 0
                                    ? <i className="fa fa-trash-o mission-delete-button" style={{ fontSize: "16px" }} onClick={() => missionDeleteHandler(id)}></i>
                                    : null
                            }

                        </div>
                        <small className="text-muted">{memberName}</small>
                    </div>
                    <div className="row">
                        {
                            detectedObjects != null
                                ? detectedObjects.map((detectedObject: any) => {
                                    return (<MissionObjectItem
                                        id={detectedObject.id}
                                        key={detectedObject.id}
                                        title={detectedObject.title}
                                        x={detectedObject.x}
                                        y={detectedObject.y}
                                    ></MissionObjectItem>)
                                })
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionCard
