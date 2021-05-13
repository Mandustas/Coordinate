import { ActiveOperationAction, ActiveOperationActionTypes, ActiveOperationState } from "../../types/activeOperation";

const initialState: ActiveOperationState = {
    activeOperation: null,
    error: null,
    loading: false
}

export const activeOperationReducer = (state: ActiveOperationState = initialState, action: ActiveOperationAction): ActiveOperationState => {
    switch (action.type) {
        case ActiveOperationActionTypes.FETCH_ACTIVEOPERATION:
            return {...state, loading: true }

        case ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_SUCCESS:
            return {...state, loading: false, activeOperation: action.payloadOperation}

        case ActiveOperationActionTypes.FETCH_ACTIVEOPERATION_ERROR:
            return {...state, loading: false, error: action.payload}

        default:
            return state;
    }
}