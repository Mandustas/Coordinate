import React, { useEffect } from 'react'
import "../components/MissionCard.css"
import $ from 'jquery'
import {map} from "../components/Map"



function MissionCard() {

    function flyToLatLng(lat: any, lng: any) {
        map.flyTo([lat, lng], 15);
    };

    useEffect(() => {
        const mouseTarget: any = document.getElementsByClassName('mission-object-item');
        const deleteButton: any = document.querySelector('.delete-object-button');

        console.log(deleteButton);

        // mouseTarget[0].addEventListener('mouseenter', (e: any) => {
        //     // mouseTarget.style.border = '5px dotted orange';
        //     console.log("hover");

        // });

        // console.log("hover");
        // mouseTarget[0].addEventListener('mouseleave', (e: any) => {
        //     console.log("unhover");
        //     // mouseTarget.style.border = '1px solid #333';
        // });

        for (var i = 0; i < mouseTarget.length; i++) {
            mouseTarget[i].addEventListener('mouseenter', (e: any) => {
                console.log("hover")
                // deleteButton[i].classList.toggle("delete-object-button-active")
                // deleteButton[i].innerHTML = "<i style={{ fontWeight: 100 }} className='fa fa-times' aria-hidden='true'></i>";

            });

            mouseTarget[i].addEventListener('mouseleave', (e: any) => {
                console.log("unhover")
                // deleteButton[i].classList.toggle("delete-object-button-active");
            });
        }


    })



    return (
        <div className="col">
            <div className="card mission-card mb-2">
                <div className="card-body text-dark">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Миссия</h5>

                        <small className="text-muted">Андрей Подоляко</small>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xl-8">
                            <div className="row">
                                <div className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                                    <div className="object-name" onClick={() => flyToLatLng(32,32)}>
                                        Объект #1
                                    </div>
                                    <div className="delete-object-button">
                                        <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                                    <div className="object-name">
                                        Объект #1
                                    </div>
                                    <div className="delete-object-button">
                                        <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                                    <div className="object-name">
                                        Объект #1
                                    </div>
                                    <div className="delete-object-button">
                                        <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                                    <div className="object-name">
                                        Объект #1
                                    </div>
                                    <div className="delete-object-button">
                                        <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="mission-object-item col-12 col-xl-6 d-flex justify-content-between">
                                    <div className="object-name">
                                        Объект #1
                                    </div>
                                    <div className="delete-object-button">
                                        <i className="fa fa-times-thin fa-2x" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-xl-4" style={{ borderLeft: "1px solid darkgray" }}>
                            <div className="add-object-to-mission">Добавить объект</div>
                            <div className="delete-mission">Удалить миссию</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MissionCard
