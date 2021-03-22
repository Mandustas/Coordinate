import React, { useEffect } from 'react'
import OperationPage from './OperationPage';
import Operations from './Operations';
import OperationsContainer from './OperationsContainer'
import OperationsHeader from './OperationsHeader';

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
            {/* <OperationsHeader></OperationsHeader>
            <Operations></Operations> */}

            <OperationPage></OperationPage>
        </div>
    )
}

export default Container
