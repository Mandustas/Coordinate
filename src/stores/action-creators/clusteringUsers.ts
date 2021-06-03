import { Dispatch } from "react"
import { ClusteringUsersAction, ClusteringUsersActionTypes, User } from "../../types/clusteringUsers"

export const addUser = (user: User) => {

    return (dispatch: Dispatch<ClusteringUsersAction>) => {
        dispatch({ type: ClusteringUsersActionTypes.ADD_USER, payload: user })
    }
}
export const removeUser = (id: number) => {

    return (dispatch: Dispatch<ClusteringUsersAction>) => {
        dispatch({ type: ClusteringUsersActionTypes.REMOVE_USER, payload: id })
    }
}

export const clearUsers = () => {

    return (dispatch: Dispatch<ClusteringUsersAction>) => {
        dispatch({ type: ClusteringUsersActionTypes.CLEAR_USERS })
    }
}
