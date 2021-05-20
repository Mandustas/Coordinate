export interface DetectedObjectState {
    detectedObjects: any[];
    loading: boolean;
    error: null | string;
}

export enum DetectedObjectActionTypes {
    FETCH_DETECTEDOBJECT = 'FETCH_DETECTEDOBJECT',
    FETCH_DETECTEDOBJECT_SUCCESS = 'FETCH_DETECTEDOBJECT_SUCCESS',
    FETCH_DETECTEDOBJECT_ERROR = 'FETCH_DETECTEDOBJECT_ERROR',
}

interface FetchDetectedObjectAction{
    type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT;
}
interface FetchDetectedObjectSuccessAction{
    type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_SUCCESS;
    payloadDetectedObjects: any[];
}
interface FetchDetectedObjectErrorAction{
    type: DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_ERROR;
    payload: string;
}

export type DetectedObjectAction = FetchDetectedObjectAction | FetchDetectedObjectSuccessAction | FetchDetectedObjectErrorAction