import React, { useEffect } from 'react'
import "../components/OperationPageSidebar.css"
import $ from "jquery"

function OperationPageSidebar() {
    useEffect(() => {
        $('#dismiss, .overlay').on('click', function () {
            // hide sidebar
            $('#sidebar').removeClass('active');
            // hide overlay
            $('.overlay').removeClass('active');
        })

        $('#sidebarCollapse').on('click', function () {
            // open sidebar
            
            $('#sidebar').addClass('active')
            // fade in the overlay
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        })
    });

    return (
        <div className="wrapper">
            <nav id="sidebar">

                <div id="dismiss">
                    <i className="fa fa-times"></i>
                </div>

                <div className="sidebar-header">
                    <h3>Поиск кота</h3>  
                </div>
                
                <ul className="list-unstyled components">
                <p className="sidebar-second-header">Навигация</p>
                    <li className="active">
                    
                        <a href="#" ><i className="fa fa-search sidebar-item-icon"></i> Обзор</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-edit sidebar-item-icon"></i> Изменить</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-map-marker sidebar-item-icon"></i> Карта</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-users sidebar-item-icon"></i> Участники</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-bullseye sidebar-item-icon"></i> Цели</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-list sidebar-item-icon"></i> Миссии</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-image sidebar-item-icon"></i> Изображения</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default OperationPageSidebar
