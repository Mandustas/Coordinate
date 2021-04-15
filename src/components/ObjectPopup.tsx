import React from 'react'

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
        console.log("qwe");

    }

    return (
        <>
            <div><span className="object-popup-text-bold">Название: </span> {name}</div>
            <div><span className="object-popup-text-bold">Описание:</span>  {description}</div>
            <div >
                <span className="object-popup-text-bold">Изображение</span>:
                <img style={{ width: "300px" }} src={img} alt="Изображение не найдено" onClick={() => handleClick()}>

                </img>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div><span className="object-popup-text-bold">X:</span> {x}</div>
                <div><span className="object-popup-text-bold">Y:</span> {y}</div>
            </div>
        </>
    )
}

export default ObjectPopup
