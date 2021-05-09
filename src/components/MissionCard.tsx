import React, { useEffect } from 'react'
import "../components/MissionCard.css"
import $ from 'jquery'
import { map } from "../components/Map"

function MissionCard() {

    function flyToLatLng(lat: any, lng: any) {
        map.flyTo([lat, lng], 15);
    };

    function deleteMissionObject(id: number) {
        alert("object " + id + " deleted from mission")
    }

    function missionDeleteHandler(id: number) {
        alert("mission " + id + "deleted")
    }

    useEffect(() => {
        const mouseTarget: any = document.getElementsByClassName('mission-object-item');
        const deleteButton: any = document.querySelector('.delete-object-button');

        // mouseTarget[0].addEventListener('mouseenter', (e: any) => {
        //     // mouseTarget.style.border = '5px dotted orange';
        //     console.log("hover");

        // });

        // console.log("hover");
        // mouseTarget[0].addEventListener('mouseleave', (e: any) => {
        //     console.log("unhover");
        //     // mouseTarget.style.border = '1px solid #333';
        // });

        // for (var i = 0; i < mouseTarget.length; i++) {
        //     mouseTarget[i].addEventListener('mouseenter', (e: any) => {
        //         console.log("hover")
        //         // deleteButton[i].classList.toggle("delete-object-button-active")
        //         // deleteButton[i].innerHTML = "<i style={{ fontWeight: 100 }} className='fa fa-times' aria-hidden='true'></i>";

        //     });

        //     mouseTarget[i].addEventListener('mouseleave', (e: any) => {
        //         console.log("unhover")
        //         // deleteButton[i].classList.toggle("delete-object-button-active");
        //     });
        // }
    })

    return (
        <div className="col">
            <div className="card mission-card mb-2">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-1" style={{ paddingRight: "10px" }}>Миссия </h5>
                            <i className="fa fa-trash-o mission-delete-button" style={{ fontSize: "16px" }} onClick={() => missionDeleteHandler(1)}></i>
                        </div>
                        <small className="text-muted">Андрей Подоляко</small>
                    </div>
                    <div className="row">
                        <div onClick={() => flyToLatLng(53.22104557790858, 34.11112667059104)} className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                            <div className="object-name" >
                                Объект #1
                                    </div>
                            <div className="delete-object-button" onClick={() => deleteMissionObject(1)}>
                                <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div onClick={() => flyToLatLng(53.24104557790858, 34.15012667059104)} className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                            <div className="object-name" >
                                Объект #2
                                    </div>
                            <div className="delete-object-button" onClick={() => deleteMissionObject(1)}>
                                <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div onClick={() => flyToLatLng(53.23204557790858, 34.12212667059104)} className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                            <div className="object-name" >
                                Объект #3
                                    </div>
                            <div className="delete-object-button" onClick={() => deleteMissionObject(1)}>
                                <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div onClick={() => flyToLatLng(53.23204557790858, 34.12212667059104)} className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                            <div className="object-name" >
                                Объект #3
                                    </div>
                            <div className="delete-object-button" onClick={() => deleteMissionObject(1)}>
                                <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div onClick={() => flyToLatLng(53.23204557790858, 34.12212667059104)} className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                            <div className="object-name" >
                                Объект #3
                                    </div>
                            <div className="delete-object-button" onClick={() => deleteMissionObject(1)}>
                                <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionCard
