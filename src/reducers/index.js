import {combineReducers} from 'redux'

import {GET_POSTS,GET_POST,GET_CATEGORIES,GET_POSTS_CATEGORY} from '../actions'

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
  console.log('action', action);
  const {posts, post} = action
  switch (action.type) {
    case GET_POSTS:
      return posts

    case GET_POST:
      return {
        ...state,
        [action.post.id]: post
      }
     case GET_POSTS_CATEGORY:
      return posts
    default:
      return state
  }
}

export default combineReducers({posts, categories})