import {combineReducers} from 'redux'

import {GET_POSTS,GET_CATEGORIES,GET_POSTS_CATEGORY} from '../actions'

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
        [posts]: posts
      }
     case GET_POSTS_CATEGORY:
      return {
        [posts]: posts
      }
    default:
      return state
  }
}

export default combineReducers({posts, categories})