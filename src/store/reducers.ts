import { combineReducers } from 'redux'
import { SHORTCUT, ESCAPE } from '../shortcuts/constants'

/**
 * There's only a single reducer for our shortcuts at the moment.
 * Once there's the need for more reducers we'll move these into
 * their own files.
 */
function shortcutsReducer(state = {}, action: any) {
  switch (action.type) {
    case SHORTCUT:
      return action.payload
    case ESCAPE:
      return {}
    default:
      return state
  }
}

const reducers = combineReducers({
  shortcuts: shortcutsReducer,
})

export default reducers