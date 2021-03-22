import React from 'react'
import Operations from './Operations'
import OperationsHeader from './OperationsHeader'

function OperationsContainer() {
    return (
        <div className="row">
            <OperationsHeader></OperationsHeader>
            <Operations></Operations>
        </div>
    )
}

export default OperationsContainer
