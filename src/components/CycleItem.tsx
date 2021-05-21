import React from 'react'
import ImageItem from './ImageItem'

export interface CycleItemProps {
    key: number;
    id: number;
    title: string;
    images: any[];
    startDate: string;
    endDate: string;
}

function CycleItem({ key, id, endDate, images, startDate, title }: CycleItemProps) {
    return (
        <>
            <h2 className="accordion-header" id={`panelsStayOpen-heading${id}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${id}`}>
                    <div className="cycle-accordion-buton">
                        <h4>{title}</h4>
                    </div>
                </button>
            </h2>
            <div id={`panelsStayOpen-collapse${id}`} className="accordion-collapse collapse show" aria-labelledby={`panelsStayOpen-heading${id}`}>
                <div className="row">
                    {images.map(image => {
                        return (<ImageItem key={image.id} path={image.path} id={image.id} ></ImageItem>)
                    })}
                </div>

            </div>
        </>
    )
}

export default CycleItem
