import { TargetUpdateAction, TargetUpdateActionTypes, TargetUpdateState } from "../../types/targetUpdate";

const initialState: TargetUpdateState = {
    target: null
}

export const targetUpdateReducer = (state: TargetUpdateState = initialState, action: TargetUpdateAction): TargetUpdateState => {
    switch (action.type) {
        case TargetUpdateActionTypes.FETCH_TARGET_UPDATE:
            return {...state, target: action.payload }
        default:
            return state;
    }
}