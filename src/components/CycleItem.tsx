import React, { useEffect } from 'react'
import ImageItem from './ImageItem'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { string } from 'yup/lib/locale';

export interface CycleItemProps {
    key: number;
    id: number;
    title: string;
    images: any[];
    startDate: string;
    endDate: string;
}
let galleryImages: Array<{ original: string, thumbnail: string }> = []
function CycleItem({ key, id, endDate, images, startDate, title }: CycleItemProps) {
    const [imagesGallery, setImages] = React.useState([{ original: '', thumbnail: '' }]);

    useEffect(() => {
        // galleryImages = [];
        // images.forEach(img => {
        //     galleryImages.push({ original: img.path, thumbnail: img.path })
        // },[])

        setImages(
            images.map(img => ({
                original: img.path,
                thumbnail: img.path
            }))
        );

        console.log("DEBUG: IMGS");
        console.log(images);
        console.log(imagesGallery);
    }, []);



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
                    {/* {images.map(image => {
                        return (<ImageItem key={image.id} path={image.path} id={image.id} ></ImageItem>)
                    })} */}
                    <ImageGallery
                        key={id}

                        showPlayButton={false}
                        showBullets={false}
                        items={imagesGallery}
                        thumbnailPosition={'left'}
                    />
                </div>

            </div>
        </>
    )
}

export default CycleItem
