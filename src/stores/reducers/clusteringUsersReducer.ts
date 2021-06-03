import { ClusteringUsersActionTypes, ClusteringUsersState, ClusteringUsersAction } from "../../types/clusteringUsers";

const initialState: ClusteringUsersState = {
    users: []
}

export const clusteringUsersReducer = (state: ClusteringUsersState = initialState, action: ClusteringUsersAction): ClusteringUsersState => {
    switch (action.type) {
        case ClusteringUsersActionTypes.ADD_USER:
            return { ...state, users: [ ...state.users.concat(action.payload)] }
        case ClusteringUsersActionTypes.REMOVE_USER:
            return { ...state, users: state.users.filter((user) => user.id != action.payload) }
        case ClusteringUsersActionTypes.CLEAR_USERS:
            return { ...state, users:  [...state.users = []] }
        default:
            return state;
    }
}