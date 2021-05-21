export interface PagesState {
    page: number;
}

export enum PagesActionTypes {
    PAGE_CHANGE = 'PAGE_CHANGE',
}

interface PagesChangesAction {
    type: PagesActionTypes.PAGE_CHANGE;
    payload: number;
}


export type PagesAction = PagesChangesAction 

