import { OperationAction, OperationActionTypes, OperationState } from "../../types/operation"

const initialState: OperationState = {
    operations: [],
    loading: false,
    error: null
}

export const operationReducer = (state = initialState, action: OperationAction): OperationState => {
    switch (action.type) {
        case OperationActionTypes.FETCH_OPERATIONS:
            return {loading: true, error: null, operations: []}
        case OperationActionTypes.FETCH_OPERATIONS_SUCCESS:
            return {loading: false, error: null, operations: action.payloadOperations}
        case OperationActionTypes.FETCH_OPERATIONS_ERROR:
            return {loading: false, error: action.payload, operations: []}
        default:
            return state;
    }
}