import React from 'react'
import "../components/TargetCard.css"
import Modal from './Modal'

function TargetCard() {
    return (
        <div className="col">
            <div className="card target-card  mb-3 " data-bs-toggle="modal" data-bs-target=".exampleModalCenter">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Цель поиска</h5>
                        <small className="text-muted">25.03.2021 17:42</small>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default TargetCard
