import React from 'react'
import OperationPageContainer from './OperationPageContainer'
import OperationPageHeader from './OperationPageHeader'
import OperationPageSidebar from './OperationPageSidebar'

function OperationPage() {
    return (
        <div className="">
            {/* <OperationPageHeader></OperationPageHeader> */}
            <div className="overlay"></div>  {/* Для затемнения сайдбара */}
            <OperationPageSidebar></OperationPageSidebar>
            <OperationPageContainer></OperationPageContainer>
        </div>
    )
}

export default OperationPage