export interface DetectedObjectState {
    detectedObject: {id: number, title: string, description: string, missionId: number};
}

export enum DetectedObjectActionTypes {
    FETCH_DETECTEDOBJECT_UPDATE = 'FETCH_DETECTEDOBJECT_UPDATE',
}

interface FetchDetectedObjectAction {
    type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_UPDATE;
    payload: any;
}


export type DetectedObjectAction = FetchDetectedObjectAction

