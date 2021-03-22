import React, { useEffect } from 'react'
import OperationPage from './OperationPage';
import OperationsContainer from './OperationsContainer'

function Container() {
    useEffect(() => {
        const headerHeight = $("#AppHeader").outerHeight() as any;
        console.log(headerHeight);
        
        const height = $(window).height() as any;
        console.log(height);
        
        $('#AppContainer').css("min-height", height-headerHeight);
      });

    return (
        <div className="container-fluid bg-light" id="AppContainer" style={{backgroundColor: "#7E8994"}}>
            <OperationPage></OperationPage>
        </div>
    )
}

export default Container
