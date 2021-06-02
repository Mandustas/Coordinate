export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionTypes {
    SET_AUTH = 'SET_AUTH',
}

interface AuthChangesAction {
    type: AuthActionTypes.SET_AUTH;
    payload: boolean;
}


export type AuthAction = AuthChangesAction 

