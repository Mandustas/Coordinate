export interface User {
    id: number;
    firstName: string;
    secondName: string;
}

export interface ClusteringUsersState {
    users: User[];
}

export enum ClusteringUsersActionTypes {
    ADD_USER = 'ADD_USER',
    REMOVE_USER = 'REMOVE_USER',
    CLEAR_USERS = 'CLEAR_USERS'
}

interface AddUserAction {
    type: ClusteringUsersActionTypes.ADD_USER;
    payload: User;
}

interface RemoveUserAction {
    type: ClusteringUsersActionTypes.REMOVE_USER;
    payload: number;
}

interface ClearUserAction {
    type: ClusteringUsersActionTypes.CLEAR_USERS;
}

export type ClusteringUsersAction = AddUserAction | RemoveUserAction | ClearUserAction

