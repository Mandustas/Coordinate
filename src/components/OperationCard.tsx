import React from 'react'
import "../components/OperationCard.css"

function OperationCard() {
    function handleClick() {
        document.location.href = "/operation/review";

    }
    return (
        < div className = "col-sm-6 col-md-4 col-xl-3 mb-4 " onClick = {handleClick} >
            <div className="card operation-card ">
                <div className="card-body">
                    <h5 className="card-title">Название операции</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non recusandae dolor adipisci doloribus accusamus, asperiores</p>
                    <p className="card-text">Учаcтников: 12</p>
                    <p className="card-text">Целей: 3</p>
                </div>
            </div>
        </div >
    )
}

export default OperationCard
