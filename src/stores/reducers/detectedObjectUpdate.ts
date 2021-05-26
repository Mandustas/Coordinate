import { DetectedObjectAction, DetectedObjectActionTypes, DetectedObjectState } from "../../types/detectedObjectUpdate";

const initialState: DetectedObjectState = {
    detectedObject: { id: 0, description: "", missionId: 0, title: "" }
}

export const objectUpdateReducer = (state: DetectedObjectState = initialState, action: DetectedObjectAction): DetectedObjectState => {
    switch (action.type) {
        case DetectedObjectActionTypes.FETCH_DETECTEDOBJECT_UPDATE:
            return { ...state, detectedObject: action.payload }
        default:
            return state;
    }
}