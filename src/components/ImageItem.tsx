import React, { useEffect } from 'react'
import $ from "jquery"

export interface ImageItemProps {
    key: number;
    id: number;
    path: string;
}



function ImageItem({ key, id, path }: ImageItemProps) {
    useEffect(() => {
        // $(".fancybox").fancybox({
        //     openEffect: 'none',
        //     closeEffect: 'none'
        // });
    }, [])
    return (
        <div className="col-12 col-md-3 mt-2 mb-2">
            <div className="card fancybox">
                <img className="card-img-top fancybox" src={path} alt=""></img>
            </div>
        </div>
    )
}

export default ImageItem
