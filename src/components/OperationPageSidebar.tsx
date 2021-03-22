import React, { useEffect } from 'react'
import "../components/OperationPageSidebar.css"

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
            console.log("QWEQWE");
            
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
                    <h3>Навигация</h3>
                </div>

                <ul className="list-unstyled components">
                    
                    <li className="active">
                        <a href="#">Обзор</a>
                    </li>
                    <li>
                        <a href="#">Участники</a>
                    </li>
                    <li>
                        <a href="#">Цели</a>
                    </li>
                    <li>
                        <a href="#">Миссии</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default OperationPageSidebar
