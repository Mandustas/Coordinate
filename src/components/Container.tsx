import React, { useEffect } from 'react'
import "../components/Container.scss"
import ModalObjectUpdate from './ModalObjectUpdate';
import ModalTargetUpdate from './ModalTargetUpdate';

export interface ContainerProps {
    children: any
}

function Container({ children }: ContainerProps) {
    useEffect(() => {
        // const headerHeight = $("#AppHeader").outerHeight() as any;
        // const height = $(window).height() as any;

        // $('#AppContainer').css("min-height", height-headerHeight);
    });

    return (
        <div className="container-fluid bg-light" id="AppContainer" >
            {children}
            <ModalObjectUpdate></ModalObjectUpdate>
            <ModalTargetUpdate></ModalTargetUpdate>
        </div>
    )
}

export default Container
