import React from 'react'
import "../components/MissionCard.css"

function MissionCard() {
    return (
        <div className="col">
            <div className="card mission-card mb-2">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Миссия</h5>

                        <small className="text-muted">Андрей Подоляко</small>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Объект #1:</div>
                        <div>41.40338, 2.17403 </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Объект #1:</div>
                        <div>41.40338, 2.17403 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionCard
