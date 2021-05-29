export interface MapCenterState {
    center: [number, number];
}

export enum MapCenteredActionTypes {
    MAP_CENTERED = 'MAP_CENTERED',
}

interface MapCenteredAction {
    type:MapCenteredActionTypes.MAP_CENTERED;
    payload: [number, number];
}


export type MapCenterAction = MapCenteredAction 

