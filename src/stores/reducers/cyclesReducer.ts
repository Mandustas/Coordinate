import { CycleAction, CyclesActionTypes, CyclesState } from "../../types/cycles"
import { OperationAction, OperationActionTypes, OperationState } from "../../types/operation"

const initialState: CyclesState = {
    cycles: [],
    loading: false,
    error: null
}

export const cyclesReducer = (state = initialState, action: CycleAction): CyclesState => {
    switch (action.type) {
        case CyclesActionTypes.FETCH_CYCLES:
            return {loading: true, error: null, cycles: []}
        case CyclesActionTypes.FETCH_CYCLES_SUCCESS:
            return {loading: false, error: null, cycles: action.payloadCycles}
        case CyclesActionTypes.FETCH_CYCLES_ERROR:
            return {loading: false, error: action.payload, cycles: []}
        default:
            return state;
    }
}