import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as OperationActionCreators from "../stores/action-creators/operation"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(OperationActionCreators, dispatch)
}