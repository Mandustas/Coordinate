export interface ActiveOperationState {
    activeOperation: any;
    loading: boolean;
    error: null | string;
}

export enum ActiveOperationActionTypes {
    FETCH_ACTIVEOPERATION = 'FETCH_ACTIVEOPERATION',
    FETCH_ACTIVEOPERATION_SUCCESS = 'FETCH_ACTIVEOPERATION_SUCCESS',
    FETCH_ACTIVEOPERATION_ERROR = 'FETCH_ACTIVEOPERATION_ERROR',
}

interface FetchActiveOperationsAction{
    type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION;
}
interface FetchActiveOperationsSuccessAction{
    type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_SUCCESS;
    payloadOperation: any;
}
interface FetchActiveOperationsErrorAction{
    type: ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_ERROR;
    payload: string;
}

export type ActiveOperationAction = FetchActiveOperationsAction | FetchActiveOperationsSuccessAction | FetchActiveOperationsErrorAction

