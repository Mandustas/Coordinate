import React from 'react'
import ImagePreviewItem from './ImagePreviewItem'
import OperationPageHeader from './OperationPageHeader'

function ImagesPage() {
    return (
        <div className="row">
            <OperationPageHeader title="Изображения" isBurger={true}></OperationPageHeader>
            <ImagePreviewItem></ImagePreviewItem>
            <ImagePreviewItem></ImagePreviewItem>
            <ImagePreviewItem></ImagePreviewItem>
            <ImagePreviewItem></ImagePreviewItem>
            <ImagePreviewItem></ImagePreviewItem>
        </div>
    )
}

export default ImagesPage
