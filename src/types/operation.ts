export interface OperationState {
    operations: any[];
    loading: boolean;
    error: null | string;
}

export enum OperationActionTypes {
    FETCH_OPERATIONS = 'FETCH_OPERATIONS',
    FETCH_OPERATIONS_SUCCESS = 'FETCH_OPERATIONS_SUCCESS',
    FETCH_OPERATIONS_ERROR = 'FETCH_OPERATIONS_ERROR',
}

interface FetchOperationsAction{
    type: OperationActionTypes.FETCH_OPERATIONS;
}
interface FetchOperationsSuccessAction{
    type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS;
    payloadOperations: any[];
}
interface FetchOperationsErrorAction{
    type: OperationActionTypes.FETCH_OPERATIONS_ERROR;
    payload: string;
}


export type OperationAction = FetchOperationsAction | FetchOperationsSuccessAction | FetchOperationsErrorAction

