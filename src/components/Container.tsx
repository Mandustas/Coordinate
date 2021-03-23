import React, { useEffect } from 'react'
import OperationPage from './OperationPage';
import Operations from './Operations';
import OperationsContainer from './OperationsContainer'
import OperationsHeader from './OperationsHeader';

export interface ContainerProps{
    children: any
}

function Container({children}:ContainerProps) {
    useEffect(() => {
        const headerHeight = $("#AppHeader").outerHeight() as any;
        console.log(headerHeight);
        
        const height = $(window).height() as any;
        console.log(height);
        
        $('#AppContainer').css("min-height", height-headerHeight);
      });

    return (
        <div className="container-fluid bg-light" id="AppContainer" style={{backgroundColor: "#7E8994"}}>
            {children}
            
        </div>
    )
}

export default Container
