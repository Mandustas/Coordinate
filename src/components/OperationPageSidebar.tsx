import React, { useEffect } from 'react'
import "../components/OperationPageSidebar.css"
import $ from "jquery"
import { useTypedSelector } from '../hooks/useTypedSelector'

export enum SidebarPages {
    Review = 1,
    Map = 2,
    Images = 3
}

function OperationPageSidebar() {

    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    const { page } = useTypedSelector(state => state.pages)

    useEffect(() => {


    }, [])

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
                    <h3>{activeOperation != null ? activeOperation.title : ""}</h3>
                </div>

                <ul className="list-unstyled components">
                    <p className="sidebar-second-header">Навигация</p>
                    <li className={ `${ page == SidebarPages.Review ? "active" : ""}`}>
                        <a href="/operation/review" ><i className="fa fa-search sidebar-item-icon"></i> Обзор</a>
                    </li>
                    <li className={ `${ page == SidebarPages.Map ? "active" : ""}`}>
                        <a href="/operation/missions"><i className="fa fa-map-marker sidebar-item-icon"></i> Миссии</a>
                    </li>
                    <li className={ `${ page == SidebarPages.Images ? "active" : ""}`}>
                        <a href="/operation/images"><i className="fa fa-image sidebar-item-icon"></i> Изображения</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default OperationPageSidebar
