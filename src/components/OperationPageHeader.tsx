import React, { useEffect } from 'react'
import "../components/OperationPageHeader.css"

export interface OperationPageHeaderProps {
    title?: string
    isBurger: boolean
    operationName?: string
}

function OperationPageHeader({ title, isBurger, operationName }: OperationPageHeaderProps) {
    useEffect(() => {
        // Handler to call on window resize
        // function handleResize() {
        //     // Set window width/height to state
        //     if (window.innerWidth >= 576) {
        //         // $("#sidebarCollapse").removeClass("active")
        //         $("#sidebarCollapse").css("display", "none")
        //         $(".operation-page-header-item").addClass("active")
        //     } else {
        //         if (!$("#sidebarCollapse").hasClass("active")) {
        //             // $("#sidebarCollapse").addClass("active")
        //             $("#sidebarCollapse").css("display", "block")
        //             $(".operation-page-header-item").removeClass("active")
        //         }
        //     }
        //     console.log("QWEQWE");

        // }

        // // Add event listener
        // window.addEventListener("resize", handleResize);

        // // Call handler right away so state gets updated with initial window size
        // handleResize();

        // // Remove event listener on cleanup
        // return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (

        <nav className="navbar navbar-light bg-light justify-content-between ">

            <div className="d-flex">
                {isBurger
                    ? <button type="button" id="sidebarCollapse" className="btn ">
                        <i className="fa fa-bars"></i>
                    </button>
                    : null
                }


                <a className="navbar-brand" style={{ marginRight: 0, marginLeft: 10 }}>{isBurger ? operationName + ' /': ''} {title}:</a>
            </div>
            {/* <div className="d-flex">
                <a className="nav-item nav-link operation-page-header-item" href="#">Обзор</a>
                <a className="nav-item nav-link operation-page-header-item" href="#">Участники</a>
                <a className="nav-item nav-link operation-page-header-item" href="#">Цели</a>
                <a className="nav-item nav-link operation-page-header-item" href="#">Миссии</a>
                <a className="nav-item nav-link operation-page-header-item" href="#">Изменить</a>

            </div> */}

        </nav>
    )
}

export default OperationPageHeader
