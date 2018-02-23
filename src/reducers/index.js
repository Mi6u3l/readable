import {combineReducers} from 'redux'

import {GET_POSTS} from '../actions'
import {GET_CATEGORIES} from '../actions'

function categories(state = {}, action) {
  const {categories} = action
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        [categories]: categories
      }
    default:
      return state
  }
}

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

export default combineReducers({posts, categories})