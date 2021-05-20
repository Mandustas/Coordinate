import "../components/MissionCard.css"
import MissionObjectItem from "./MissionObjectItem"

export interface MissionCardProps {
    key: number,
    id: number,
    detectedObjects: any[],
    memberName: string,
}

function MissionCard({ key, id, detectedObjects, memberName }: MissionCardProps) {
    function missionDeleteHandler(id: number) {
        alert("mission " + id + "deleted")
    }
    return (
        <div className="col">
            <div className="card mission-card mb-2">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-1" style={{ paddingRight: "10px" }}>Миссия #{id}</h5>
                            <i className="fa fa-trash-o mission-delete-button" style={{ fontSize: "16px" }} onClick={() => missionDeleteHandler(1)}></i>
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
