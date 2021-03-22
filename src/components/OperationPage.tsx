import React from 'react'
import OperationPageHeader from './OperationPageHeader'
import OperationPageSidebar from './OperationPageSidebar'

function OperationPage() {
    return (
        <div className="row">
            <OperationPageHeader></OperationPageHeader>
            <div className="overlay"></div>  {/* Для затемнения сайдбара */}
            <OperationPageSidebar></OperationPageSidebar>
        </div>
    )
}

export default OperationPage