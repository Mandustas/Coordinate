import React from 'react'
import MapPreview from './MapPreview'
import OperationPageHeader from './OperationPageHeader'

function ReviewPageMapArea() {
    return (
        <>
            <OperationPageHeader operationName="Поиск кота" title="Обзор" isBurger={true}></OperationPageHeader>
            <MapPreview></MapPreview>
        </>
    )
}

export default ReviewPageMapArea
