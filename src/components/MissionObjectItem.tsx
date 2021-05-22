import React from 'react'
// import { map } from "../components/Map"

export interface MissionObjectItemProps{
    id: number;
    key: number;
    title: string;
    x: string;
    y: string;
}

function MissionObjectItem({id,key,title,x,y}:MissionObjectItemProps) {
    function deleteMissionObject(id: number) {
        alert("object " + id + " deleted from mission")
    }
    return (
        <>
            <div  className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                <div className="object-name" onClick={() => []}>
                    {title}
                </div>
                <div className="delete-object-button" onClick={() => deleteMissionObject(id)}>
                    <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        </>
    )
}

export default MissionObjectItem
