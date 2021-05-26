import { ObjectCreateAction, ObjectCreateActionTypes, ObjectCreateState } from "../../types/objectCreate";

const initialState: ObjectCreateState = {
    x: "",
    y: ""
}

export const objectCreateReducer = (state: ObjectCreateState = initialState, action: ObjectCreateAction): ObjectCreateState => {
    switch (action.type) {
        case ObjectCreateActionTypes.SET_OBJECT_CREATE:
            return { ...state, x: action.payload.x, y: action.payload.y }
        default:
            return state;
    }
}