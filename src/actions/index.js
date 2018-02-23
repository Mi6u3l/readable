import * as APIUtil from '../utils/api';

export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORIES = 'GET_CATEGORIES'

export const receivePosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  APIUtil
      .getPosts()
      .then(posts => dispatch(receivePosts(posts)))
);


export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  APIUtil
      .getCategories()
      .then(categories => dispatch(receiveCategories(categories)))
);
