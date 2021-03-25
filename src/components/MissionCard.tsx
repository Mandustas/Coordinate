import React from 'react'
import "../components/MissionCard.css"

function MissionCard() {
    return (
        <div className="col">
            <div className="card mission-card mb-1">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Миссия</h5>

                        <small className="text-muted">Андрей Подоляко</small>
                    </div>
                    <div>Объект #1: <span>41.40338, 2.17403 </span></div>
                </div>
            </div>
        </div>
    )
}

export default MissionCard
