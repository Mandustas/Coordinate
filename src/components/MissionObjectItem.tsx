import React from 'react'
import { useActions } from '../hooks/useActions'
import { CreateTypes } from './ReviewPage'
// import { map } from "../components/Map"

export interface MissionObjectItemProps {
    id: number;
    key: number;
    title: string;
    x: string;
    y: string;
    isDesired: boolean;
}

function MissionObjectItem({ id, key, title, x, y, isDesired }: MissionObjectItemProps) {
    const { fetchObjectUpdate, mapCenter } = useActions()

    function deleteMissionObject(id: number) {
        alert("object " + id + " deleted from mission")
    }
    return (
        <>
            <div className="mission-object-item col-12 col-xl-6 d-flex align-items-center">
                <div
                    className="mission-object-item-icon"
                    style={{ backgroundColor: isDesired? "gray" : "red" }}
                >

                </div>
                <div className="object-name"
                    onClick={() => {
                        fetchObjectUpdate(id)
                        $("#" + CreateTypes.ModalObjectUpdate).modal('show')
                        mapCenter(parseFloat(x), parseFloat(y))
                    }}
                    onMouseEnter={() => {
                        console.log("HOVER")
                        mapCenter(parseFloat(x), parseFloat(y))
                    }
                    }
                >
                    {title}
                </div>
                {/* <div className="delete-object-button" onClick={() => deleteMissionObject(id)}>
                    <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                </div> */}
            </div>
        </>
    )
}

export default MissionObjectItem
