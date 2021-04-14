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
    filter?: boolean
    filterType?: string
}

function OperationPageHeader({ title, isBurger, operationName, href, modelType, pageAddHref, call, filter,filterType }: OperationPageHeaderProps) {

    function handleClick() {
        if (href != undefined && href != null && href != "") {
            document.location.href = String(href)
        }
    }

    function handleCreateClick() {
        if (pageAddHref != undefined && pageAddHref != null && pageAddHref != "") {
            document.location.href = String(pageAddHref)
        } else {
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
            {filter == true
                ? <div className={`btn header-add-button`} data-bs-toggle="modal" data-bs-target={`.${filterType}`} >
                    <i className="fa fa-filter"></i>
                </div>
                : null
            }
            {(modelType != undefined && modelType != null && modelType != "") || (pageAddHref != undefined && pageAddHref != null && pageAddHref != "")
                ? <div className={`btn header-add-button`} data-bs-toggle="modal" data-bs-target={`.${modelType}`} onClick={handleCreateClick}>
                    <i className={`fa  ${call == true ? 'fa-bullhorn' : 'fa-plus'}`} aria-hidden="true"></i>
                </div>
                : null
            }

        </nav>
    )
}

export default OperationPageHeader
