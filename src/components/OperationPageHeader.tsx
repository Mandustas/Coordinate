import React, { useEffect } from 'react'
import "../components/OperationPageHeader.css"

export interface OperationPageHeaderProps {
    title?: string
    isBurger: boolean
    operationName?: string
    href?: string
    modelType?: string
    pageAddHref?: string
    call?: boolean
}

function OperationPageHeader({ title, isBurger, operationName, href, modelType, pageAddHref,call }: OperationPageHeaderProps) {
    // useEffect(() => {
    //     function handleResize() {
    //         // Set window width/height to state
    //         if (window.innerWidth >= 576) {
    //             // $("#sidebarCollapse").removeClass("active")
    //             $("#sidebarCollapse").css("display", "none")
    //             $(".operation-page-header-item").addClass("active")
    //         } else {
    //             if (!$("#sidebarCollapse").hasClass("active")) {
    //                 // $("#sidebarCollapse").addClass("active")
    //                 $("#sidebarCollapse").css("display", "block")
    //                 $(".operation-page-header-item").removeClass("active")
    //             }
    //         }
    //     }
    //     // Add event listener
    //     window.addEventListener("resize", handleResize);
    //     // Call handler right away so state gets updated with initial window size
    //     handleResize();
    //     // Remove event listener on cleanup
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []); // Empty array ensures that effect is only run on mount

    function handleClick() {
        if (href != undefined && href != null && href != "") {
            document.location.href = String(href)
        }
    }

    function handleCreateClick() {
        if (pageAddHref != undefined && pageAddHref != null && pageAddHref != "") {
            document.location.href = String(pageAddHref)
        } else{
            return
        }
    }
    return (

        <nav className="navbar justify-content-between ">

            <div className="d-flex">
                {isBurger
                    ? <button type="button" id="sidebarCollapse" className="btn ">
                        <i className="fa fa-bars"></i>
                    </button>
                    : null
                }


                <a className={`navbar-brand  ${href != undefined && href != null && href != "" ? 'operation-page-header-underline' : ''}`} onClick={handleClick} href={href} style={{ marginRight: 0, marginLeft: 10 }}>
                    {operationName != undefined && operationName != null && operationName != ""
                        ? operationName + ' /' : ''
                    } {title}
                </a>
            </div>
            
            {(modelType != undefined && modelType != null && modelType != "")||(pageAddHref != undefined && pageAddHref != null && pageAddHref != "")
                ? <div className={`btn header-add-button`} data-bs-toggle="modal" data-bs-target={`.${modelType}`} onClick={handleCreateClick}>
                    <i className={`fa  ${call == true ? 'fa-bullhorn' : 'fa-plus'}`} aria-hidden="true"></i>
                </div>
                : null
            }

        </nav>
    )
}

export default OperationPageHeader
