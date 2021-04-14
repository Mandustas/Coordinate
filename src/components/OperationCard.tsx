import React from 'react'
import "../components/OperationCard.css"

export interface OperationCard {
    isActive?: boolean
}
function OperationCard({isActive}:OperationCard) {

    function handleClick() {
        document.location.href = "/operation/missions";

    }

    return (
        < div className={` ${isActive ? 'col-12' : 'col-md-12 col-xl-4 mb-4'} `} onClick={handleClick} >
            <div className="card operation-card ">
                <div className="card-body">
                    <h5 className="card-title">Название операции</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non recusandae dolor adipisci doloribus accusamus, asperiores</p>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">Учаcтников: 12</p>
                        <p className="card-text">Целей: 3</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OperationCard
