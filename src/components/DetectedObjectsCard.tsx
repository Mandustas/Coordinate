import React from 'react'

function DetectedObjectsCard() {
    return (
        <div className="col">
            <div className="card mission-card mb-2">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Без названия</h5>
                        <small className="text-muted">Не проверен</small>
                    </div>
                    <small className="text-muted">41.40338, 2.17403</small>

                </div>
            </div>
        </div>
    )
}

export default DetectedObjectsCard
