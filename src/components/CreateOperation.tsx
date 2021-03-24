import React from 'react'
import OperationPageHeader from './OperationPageHeader'

function CreateOperation() {
    return (
        <div className="row">
            <OperationPageHeader title="Создание операции" operationName="Создание операции" isBurger={false}></OperationPageHeader>

        </div>
    )
}

export default CreateOperation
