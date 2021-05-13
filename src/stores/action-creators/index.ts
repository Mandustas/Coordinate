import * as OperationActionCreators from './operation'
import * as ActiveOperationActionCreators from './activeOperation'

export default {
    ...OperationActionCreators,
    ...ActiveOperationActionCreators
}
