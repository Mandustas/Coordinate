import { DetectedObjectAction, DetectedObjectActionTypes, DetectedObjectState } from "../../types/detectedObject"

const initialState: DetectedObjectState = {
    detectedObjects: [],
    loading: false,
    error: null
}

export const detectedObjectReducer = (state = initialState, action: DetectedObjectAction): DetectedObjectState => {
    switch (action.type) {
        case DetectedObjectActionTypes.FETCH_DETECTEDOBJECT:
            return {loading: true, error: null, detectedObjects: []}
        case DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_SUCCESS:
            return {loading: false, error: null, detectedObjects: action.payloadDetectedObjects}
        case DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_ERROR:
            return {loading: false, error: action.payload, detectedObjects: []}
        default:
            return state;
    }
}