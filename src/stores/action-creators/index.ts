import * as OperationActionCreators from './operation'
import * as ActiveOperationActionCreators from './activeOperation'
import * as DetectedObjectsActionCreators from './detectedObjects'

export default {
    ...OperationActionCreators,
    ...ActiveOperationActionCreators,
    ...DetectedObjectsActionCreators
}
