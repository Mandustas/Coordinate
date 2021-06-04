import axios from "axios";
import config from '../config/config.json'
import { useEffect } from "react";
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
        const isDelete = window.confirm("Подтвердите удаление миссии")
        if (isDelete) {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            };
            const res = await axios.delete(config.API_SERVER_URL + 'Mission/' + id, axiosConfig);
        }
        setTimeout(fetchActiveOperations(), 100);
    }
    return (
        <div className="col">
            <div className="card mission-card mb-2">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="mb-3 d-flex align-items-center">
                            <h5 className="" style={{ paddingRight: "10px", margin: "0px" }}>Миссия #{id}</h5>
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
                                        isDesired={detectedObject.isDesired}
                                    ></MissionObjectItem>)
                                })
                                : null
                        }
                        {
                            detectedObjects.length == 0
                                ?
                                <div className="list-empty" style={{margin:0}}>
                                    Объекты не назначены
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionCard
