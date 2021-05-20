import React, { useEffect } from 'react'
import TargetPanelItem from './TargetPanelItem'
import "../components/TargetPanel.scss"
import $ from "jquery"
import 'jqueryui';
import { useTypedSelector } from '../hooks/useTypedSelector';

export enum TargetStatuses {
    Finded = 1,
    Attention = 2,
    NotFound = 3
}



function TargetPanel() {


    const { activeOperation } = useTypedSelector(state => state.activeOperation)
    useEffect(() => {
        $("#TargetPanel").draggable({ scroll: false });

    }, [])
    return (
        <div id="TargetPanel">

            {
                activeOperation.targets.map((target: { id: number; title: string; targetStatusId: number }) => {
                    if (target) {
                        return (<TargetPanelItem id={target.id} key={target.id} title={target.title} status={target.targetStatusId}></TargetPanelItem>)
                    } else {
                        return null;
                    }

                })
            }
        </div>
    )
}

export default TargetPanel
