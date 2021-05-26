export interface TargetUpdateState {
    target: any;
}

export enum TargetUpdateActionTypes {
    FETCH_TARGET_UPDATE = 'FETCH_TARGET_UPDATE',
}

interface FetchTargetUpdateAction {
    type: TargetUpdateActionTypes.FETCH_TARGET_UPDATE;
    payload: any;
}


export type TargetUpdateAction = FetchTargetUpdateAction 

