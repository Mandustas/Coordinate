import React from 'react'
import "../components/OperationCard.css"

export interface OperationCard {
    key: number
    id: number
    title: string
    isActive?: boolean
    coordinator: string
    members: number
    targets: number
    date: any
}
function OperationCard({ isActive, title, key, id, coordinator, members, targets, date }: OperationCard) {

    function handleClick() {
        document.location.href = "/operation/missions";
    }

    return (
        < div className={` ${isActive ? 'col-12' : 'col-md-12 col-xl-4 mb-4'} `} onClick={handleClick} >
            <div className="card operation-card ">
                <div className="card-body">
                    <div className="operation-card-header">
                        {
                            isActive
                                ? <h2 className="operation-card-title">{title}</h2>
                                : <h5 className="operation-card-title">{title}</h5>
                        }
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
