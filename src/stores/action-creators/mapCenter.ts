import { Dispatch } from "react"
import { MapCenterAction, MapCenteredActionTypes } from "../../types/mapCenter"

export const mapCenter = (x: number, y: number) => {

    return (dispatch: Dispatch<MapCenterAction>) => {
        dispatch({ type: MapCenteredActionTypes.MAP_CENTERED, payload: [x, y] })
    }
}
