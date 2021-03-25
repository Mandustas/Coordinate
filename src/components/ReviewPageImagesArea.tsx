import React from 'react'
import ImagesPreview from './ImagesPreview'
import OperationPageHeader from './OperationPageHeader'

function ReviewPageImagesArea() {
    return (
        <>
            <OperationPageHeader title="Изображения" isBurger={false} href="/operation/images"></OperationPageHeader>
            <ImagesPreview></ImagesPreview>
        </>
    )
}

export default ReviewPageImagesArea
