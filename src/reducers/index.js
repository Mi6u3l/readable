import {combineReducers} from 'redux'

import {GET_POSTS} from '../actions'

function posts(state = {}, action) {
  const {posts} = action
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        [posts]: posts
      }
    default:
      return state
  }
}

export default combineReducers({posts})