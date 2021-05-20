import React from 'react'
import "../components/TargetCard.css"
import { TargetStatuses } from './TargetPanel';


export interface TargetPanelItemProps {
    id:number
    key: number
    status: number;
    title:string;

}

function TargetPanelItem({ status,id,key,title }: TargetPanelItemProps) {
    let statusPic;
    if (status === TargetStatuses.Finded) {
        statusPic = <div className="target-status-circle green "></div>
    } else if (status === TargetStatuses.Attention) {
        statusPic = <div className="target-status-circle yellow pulse"></div>
    } else if (status === TargetStatuses.NotFound) {
        statusPic = <div className="target-status-circle red"></div>
    }

    return (
        <div className={`targetPanelItem  `}>
            <div style={{display:'flex'}}>
                {statusPic}
                <div className={`target-name ${status === TargetStatuses.Attention ? "shake-horizontal" : null}`}>{title}</div>
            </div>

            {status === TargetStatuses.Attention ? <div className=" fa fa-check confirm"></div> : null}

        </div>
    )
}

export default TargetPanelItem
