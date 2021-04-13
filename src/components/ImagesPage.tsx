import React from 'react'
import ImageItem from './ImageItem'
import OperationPageHeader from './OperationPageHeader'

function ImagesPage() {
    return (
        <div className="row">
            <OperationPageHeader title="Изображения" isBurger={true}></OperationPageHeader>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
            <ImageItem></ImageItem>
        </div>
    )
}

export default ImagesPage
