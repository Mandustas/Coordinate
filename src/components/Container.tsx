import React, { useEffect } from 'react'
import $ from "jquery"
import "../components/Container.scss"

export interface ContainerProps{
    children: any
}

function Container({children}:ContainerProps) {
    useEffect(() => {
        // const headerHeight = $("#AppHeader").outerHeight() as any;
        // const height = $(window).height() as any;
        
        // $('#AppContainer').css("min-height", height-headerHeight);
      });

    return (
        <div className="container-fluid bg-light" id="AppContainer" >
            {children}
        </div>
    )
}

export default Container
