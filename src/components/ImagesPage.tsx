import React, { useEffect } from 'react'
import ImageItem from './ImageItem'
import OperationPageHeader from './OperationPageHeader'

function ImagesPage() {
    useEffect(() => {
        function handleResize() {
            const headerHeight = $("#AppHeader").outerHeight() as any;
            const height = $(window).height() as any;
            $('.images-panel').css("height", height - headerHeight);

        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize)

        };
    }, []);

    return (
        <div className="row">
            <div className="col-md-4 col-12 control-panel">
                <OperationPageHeader title="Изображения" isBurger={true}></OperationPageHeader>

            </div>
            <div className="col-md-8 col-12 images-panel">
                <div className="row">

                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                    <ImageItem></ImageItem>
                </div>
            </div>

        </div>


    )
}

export default ImagesPage
