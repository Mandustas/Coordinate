export interface ObjectCreateState {
    x: string;
    y: string
}

export enum ObjectCreateActionTypes {
    SET_OBJECT_CREATE = 'SET_OBJECT_CREATE',
}

interface FetchObjectCreateAction {
    type: ObjectCreateActionTypes.SET_OBJECT_CREATE;
    payload: any;
}


export type ObjectCreateAction = FetchObjectCreateAction 

