import React, { useEffect } from 'react'
import "../components/OperationPageHeader.css"

function OperationPageHeader() {
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            if (window.innerWidth >= 576) {
                $("#sidebarCollapse").removeClass("active")
                $(".operation-page-header-item").addClass("active")
            } else {
                if (!$("#sidebarCollapse").hasClass("active")) {
                    $("#sidebarCollapse").addClass("active")
                    $(".operation-page-header-item").removeClass("active")
                }
            }
            console.log("QWEQWE");

        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (

        <nav className="navbar navbar-light bg-light justify-content-between">
            <div>
                <a className="navbar-brand">Поиск кота</a>
            </div>
            <div className="d-flex">
                <a className="nav-item nav-link operation-page-header-item" href="#">Обзор</a>
                <a className="nav-item nav-link operation-page-header-item" href="#">Участники</a>
                <a className="nav-item nav-link operation-page-header-item" href="#">Цели</a>
                <a className="nav-item nav-link operation-page-header-item" href="#">Миссии</a>
                <button type="button" id="sidebarCollapse" className="btn btn-dark btn-outline">
                    <span>Меню операции</span>
                </button>
            </div>
            
        </nav>
    )
}

export default OperationPageHeader
