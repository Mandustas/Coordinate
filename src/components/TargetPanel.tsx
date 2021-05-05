import React, { useEffect } from 'react'
import TargetPanelItem from './TargetPanelItem'
import "../components/TargetPanel.scss"
import $ from "jquery"
import 'jqueryui';

export enum TargetStatuses{
    Finded = 1,
    Attention = 2,
    NotFound = 3
}

function TargetPanel() {
    useEffect(() => {
        $("#TargetPanel").draggable({ scroll: false });

    }, [])
    return (
        <div id="TargetPanel">
            <TargetPanelItem status={TargetStatuses.Attention}></TargetPanelItem>
            <TargetPanelItem status={TargetStatuses.Finded}></TargetPanelItem>
            <TargetPanelItem status={TargetStatuses.NotFound}></TargetPanelItem>
            <TargetPanelItem status={TargetStatuses.NotFound}></TargetPanelItem>
            <TargetPanelItem status={TargetStatuses.NotFound}></TargetPanelItem>
        </div>
    )
}

export default TargetPanel
