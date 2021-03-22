import React from 'react'
import "../components/MissionCard.css"

function MissionCard() {
    return (
        <div className="col">
            <div className="card mission-card mb-3">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Миссия</h5>

                        <small className="text-muted">25.03.2021 17:42</small>
                    </div>
                    <p></p>
                    <ul>
                        <li>
                            41.40338, 2.17403
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MissionCard
