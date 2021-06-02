import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export interface ObjectPopupProps {
    id?: number
    name?: string
    description?: string
    img?: string
    x?: string
    y?: string
}

function ObjectPopup({ id, name, description, img, x, y }: ObjectPopupProps) {
    function handleClick() {
        alert("qwe")
    }

    return (
        <>
            <div><span className="object-popup-text-bold">Название: </span> {name}</div>
            <div><span className="object-popup-text-bold">Описание:</span>  {description}</div>
            {
                img != null
                    ?
                    <div onClick={() => handleClick}>
                        <span className="object-popup-text-bold">Изображение</span>:

                        <ImageGallery
                            showPlayButton={false}
                            showNav={false}
                            showBullets={false}
                            showIndex={false}
                            showThumbnails={false}
                            items={[{ original: img }]}
                        />
                    </div>
                    : null
            }

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div><span className="object-popup-text-bold">X:</span> {x}</div>
                <div><span className="object-popup-text-bold">Y:</span> {y}</div>
            </div>
        </>
    )
}

export default ObjectPopup
