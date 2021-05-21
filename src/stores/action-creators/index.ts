import * as OperationActionCreators from './operation'
import * as ActiveOperationActionCreators from './activeOperation'
import * as DetectedObjectsActionCreators from './detectedObjects'
import * as CyclesActionCreators from './cycles'
import * as PagesActionCreators from './pages'

export default {
    ...OperationActionCreators,
    ...ActiveOperationActionCreators,
    ...DetectedObjectsActionCreators,
    ...CyclesActionCreators,
    ...PagesActionCreators
}
