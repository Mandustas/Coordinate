import { MapCenterAction, MapCenteredActionTypes, MapCenterState } from "../../types/mapCenter";

const initialState: MapCenterState = {
    center: [53.02231925772324, 33.516210152748435]
}

export const mapCenterReducer = (state: MapCenterState = initialState, action: MapCenterAction): MapCenterState => {
    switch (action.type) {
        case MapCenteredActionTypes.MAP_CENTERED:
            return {...state, center: action.payload}
        default:
            return state;
    }
}